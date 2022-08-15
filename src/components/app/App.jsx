import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader/AppHeader";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import styles from "./App.module.css";
import { useDispatch } from "react-redux";
import { getIngredients } from "../../services/action/burgerIngredients";
import { RESET_ORDER } from "../../services/action/burgerConstructor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../pages/Login";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import Profile from "../../pages/Profile";
import { getCookie } from "../../utils/api";
import { getUser, newToken } from "../../services/action/authorization";

function App() {
  const [modalOrderActive, setModalOrderActive] = useState(false);
  const [modalIngredientActive, setModalIngredientActive] = useState(false);
  const dispatch = useDispatch();
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = getCookie("token");

  useEffect(() => {
    if (!accessToken && refreshToken) {
      dispatch(newToken(refreshToken));
    }
    if (accessToken && refreshToken) dispatch(getUser(accessToken));
  }, [accessToken, dispatch, refreshToken]);

  useEffect(() => {
    dispatch(getIngredients());
    if (modalOrderActive === false) {
      dispatch({
        type: RESET_ORDER,
      });
    }
  }, [dispatch, modalOrderActive]);

  return (
    <Router>
      <div className={styles.page}>
        <AppHeader />
        <Switch>
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
          <Route path="/profile" exact={true}>
            <Profile />
          </Route>
        </Switch>
        <Modal
          active={modalOrderActive}
          title={""}
          setActive={setModalOrderActive}
        >
          <OrderDetails />
        </Modal>
        <Modal
          active={modalIngredientActive}
          setActive={setModalIngredientActive}
          title={"Детали ингредиента"}
        >
          <IngredientDetails />
        </Modal>
      </div>
    </Router>
  );
}

export default App;
