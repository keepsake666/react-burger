import React, { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import styles from './App.module.css'
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/action/burgerIngredients'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RESET_ORDER } from '../../services/action/burgerConstructor';

function App() {
  const [modatOrderActive, setModalOrderAtive] = useState(false)
  const [modalIngredientActive, setmodalIngredientActive] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
    if (modatOrderActive === false) {
      dispatch({
        type: RESET_ORDER
      })
    }
  }, [dispatch, modatOrderActive])

  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients setModalAtive={setmodalIngredientActive} />
          <BurgerConstructor setModalAtive={setModalOrderAtive} />
        </DndProvider>
      </main>
      <Modal active={modatOrderActive} title={''} setActive={setModalOrderAtive}  >
        <OrderDetails />
      </Modal>
      <Modal active={modalIngredientActive} setActive={setmodalIngredientActive} title={'Детали ингредиента'} >
        <IngredientDetails />
      </Modal>
    </div >
  );
}

export default App;
