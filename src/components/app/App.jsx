import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader/AppHeader";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import styles from "./App.module.css";
import {useDispatch} from "react-redux";
import { getIngredients } from "../../services/action/burgerIngredients";
import { RESET_ORDER } from "../../services/action/burgerConstructor";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import Login from "../../pages/Login";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import Profile from "../../pages/Profile";
import { getCookie } from "../../utils/api";
import { getUser } from "../../services/action/authorization";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import Ingredients from "../../pages/Ingredients";
import { NotFound404 } from "../../pages/NotFound404";
import Feed from "../../pages/Feed";
import FeedId from "../../pages/FeedId";
import { GET_ORDER_RESET } from "../../services/action/orderBurger";

function App() {
  const [modalOrderActive, setModalOrderActive] = useState(false);
  const [modalIngredientActive, setModalIngredientActive] = useState(false);
  const [modalOrderDetails, setModalOrderDetails] = useState(false);
  const [modalAuthOrderDetails, setModalAuthOrderDetails] = useState(false);
  const dispatch = useDispatch();
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = getCookie("token");
  const location = useLocation();
  let background = location.state && location.state.background;
  const history = useHistory();

  useEffect(() => {
    if (accessToken && refreshToken) {
      dispatch(getUser(accessToken));
    }
  }, [accessToken, dispatch, refreshToken]);

  useEffect(() => {
    dispatch(getIngredients());
    if (modalOrderActive === false) {
      dispatch({
        type: RESET_ORDER,
      });
      dispatch({ type: GET_ORDER_RESET });
    }
  }, [dispatch, modalOrderActive]);

  const handlerCloseModal = () => {
    setModalIngredientActive(false);
    history.go(-1);
  };
  const handlerCloseModalOrder = () => {
    setModalOrderDetails(false);
    history.go(-1);
  };
  const handlerCloseModalAuthOrder = () => {
    setModalAuthOrderDetails(false);
    history.go(-1);
  };

  return (
    <div className={styles.page}>
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true}>
          <Home
            setModalIngredient={setModalIngredientActive}
            setModalOrder={setModalOrderActive}
          />
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="/register" exact={true}>
          <Register />
        </Route>
        <Route path="/forgot-password" exact={true}>
          <ForgotPassword />
        </Route>
        <Route path="/reset-password" exact={true}>
          <ResetPassword />
        </Route>
        <ProtectedRoute path="/profile">
          <Profile setActive={setModalAuthOrderDetails} />
        </ProtectedRoute>
        <Route path="/ingredient/:id" exact={true}>
          <Ingredients />
        </Route>
        <Route path="/feed" exact={true}>
          <Feed active={setModalOrderDetails} />
        </Route>
        <Route path="/feed/:id" exact={true}>
          <FeedId modal={true} />
        </Route>
        <Route path="/profile/orders/:id">
          <FeedId />
        </Route>
        <Route>
          <NotFound404 />
        </Route>
      </Switch>
      <Modal
        active={modalOrderActive}
        title={""}
        setActive={setModalOrderActive}
      >
        <OrderDetails />
      </Modal>
      {background && (
        <Route path="/ingredient/:id" exact={true}>
          <Modal
            active={modalIngredientActive}
            setActive={handlerCloseModal}
            title={"Детали ингредиента"}
          >
            <IngredientDetails />
          </Modal>
        </Route>
      )}
      {background && (
        <Route path="/feed/:id" exact={true}>
          <Modal
            active={modalOrderDetails}
            setActive={handlerCloseModalOrder}
            title={""}
          >
            <FeedId modal={false} />
          </Modal>
        </Route>
      )}
      {background && (
        <Route path="/profile/orders/:id" exact={true}>
          <Modal
            active={modalAuthOrderDetails}
            setActive={handlerCloseModalAuthOrder}
            title={""}
          >
            <FeedId modal={false} />
          </Modal>
        </Route>
      )}
    </div>
  );
}

export default App;
