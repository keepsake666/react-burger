import React, { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import styles from './App.module.css'
import { DataApiContext } from '../../services/dataApiContext';
import { apiData, apiOrder } from '../../utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/action/action'

function App() {
  const [dataIngredienState, setDdataIngredienState] = useState([])
  const [modatOrderActive, setModalOrderAtive] = useState(false)
  const [modalIngredientActive, setmodalIngredientActive] = useState(false)
  const [targetValue, setTargetValue] = useState('')
  const [errApiData, setErrApiData] = useState()
  const [numberOrder, setNumberOrder] = useState(0)
  const [order, setOrder] = useState(null)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])
  const { ingredients } = useSelector(store => store.BurgerReducer)
  console.log(ingredients)

  function creatOrder() {
    setNumberOrder(0)
    apiOrder(order)
      .then(res => setNumberOrder(res.order.number))
      .catch(err => {
        setNumberOrder(err)
      })
  }

  useEffect(() => {
    apiData()
      .then((res) => {
        setDdataIngredienState(res.data)
      })
      .catch(err => {
        setErrApiData(err)
      })
  }, [])

  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.main}>
        <DataApiContext.Provider value={{ dataIngredienState, setDdataIngredienState }}>
          <BurgerIngredients setModalAtive={setmodalIngredientActive} value={setTargetValue} />
          <BurgerConstructor creatOrder={creatOrder} setOrder={setOrder} setModalAtive={setModalOrderAtive} />
        </DataApiContext.Provider>
      </main>
      <Modal active={modatOrderActive} title={''} setActive={setModalOrderAtive}  >
        <OrderDetails numberOrder={numberOrder} />
      </Modal>
      <Modal active={modalIngredientActive} setActive={setmodalIngredientActive} title={'Детали ингредиента'} >
        <IngredientDetails data={dataIngredienState} value={targetValue} />
      </Modal>
    </div>
  );
}

export default App;
