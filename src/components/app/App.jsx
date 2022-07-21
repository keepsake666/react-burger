import React, { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import styles from './App.module.css'
import { apiOrder } from '../../utils/api';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/action/action'

function App() {
  const [modatOrderActive, setModalOrderAtive] = useState(false)
  const [modalIngredientActive, setmodalIngredientActive] = useState(false)
  const [numberOrder, setNumberOrder] = useState(0)
  const [order, setOrder] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  function creatOrder() {
    setNumberOrder(0)
    apiOrder(order)
      .then(res => setNumberOrder(res.order.number))
      .catch(err => {
        setNumberOrder(err)
      })
  }

  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients setModalAtive={setmodalIngredientActive} />
        <BurgerConstructor creatOrder={creatOrder} setOrder={setOrder} setModalAtive={setModalOrderAtive} />
      </main>
      <Modal active={modatOrderActive} title={''} setActive={setModalOrderAtive}  >
        <OrderDetails numberOrder={numberOrder} />
      </Modal>
      <Modal active={modalIngredientActive} setActive={setmodalIngredientActive} title={'Детали ингредиента'} >
        <IngredientDetails />
      </Modal>
    </div>
  );
}

export default App;
