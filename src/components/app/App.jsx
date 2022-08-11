import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import styles from "./App.module.css";
import { useDispatch } from "react-redux";
import { getIngredients } from "../../services/action/burgerIngredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RESET_ORDER } from "../../services/action/burgerConstructor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../pages/Login";

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
        <div className={styles.page}>
          <AppHeader />
          <Router>
            <Switch>
          <Route path="/" exact={true}>
            <main className={styles.main} >
              <DndProvider backend={HTML5Backend}>
                <BurgerIngredients setModalAtive={setModalIngredientActive} />
                <BurgerConstructor setModalAtive={setModalOrderActive} />
              </DndProvider>
            </main>
          </Route>
          <Route path="/login" exact={true}>
            <main className={styles.main__page} >
              <Login />
            </main>
          </Route>
            </Switch>
          </Router>
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
  );
}

export default App;
