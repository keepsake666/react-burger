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

function App() {
  const [modalOrderActive, setModalOrderActive] = useState(false);
  const [modalIngredientActive, setModalIngredientActive] = useState(false);
  const dispatch = useDispatch();
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
