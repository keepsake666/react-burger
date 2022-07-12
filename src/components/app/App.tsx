import React from 'react';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import Modal from '../Modal/Modal';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import styles from './App.module.css'
import { DataApiContext } from '../../context/dataApiContext';
import { apiData, apiOrder } from '../../utils/api';

function App() {
  const [dataIngredienState, setDdataIngredienState] = React.useState([])
  const [modatOrderActive, setModalOrderAtive] = React.useState(false)
  const [modalIngredientActive, setmodalIngredientActive] = React.useState(false)
  const [targetValue, setTargetValue] = React.useState('')
  const [errApiData, setErrApiData] = React.useState()
  const [errCreatOrder, setErrCreatOrde] = React.useState()
  const [numberOrder, setNumberOrder] = React.useState(null)
  const [order, setOrder] = React.useState(null)


  function creatOrder() {
    apiOrder(order)
      .then(res => setNumberOrder(res.order.number))
      .catch(err => {
        setErrCreatOrde(err)
      })
  }

  React.useEffect(() => {
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
          <BurgerIngredients data={dataIngredienState} setModalAtive={setmodalIngredientActive} value={setTargetValue} />
          <BurgerConstructor creatOrder={creatOrder} setOrder={setOrder} setModalAtive={setModalOrderAtive} />
        </DataApiContext.Provider>
      </main>
      <ModalOverlay active={modatOrderActive} setActive={setModalOrderAtive}>
        <Modal title={''} setModalAtive={setModalOrderAtive}>
          <OrderDetails numberOrder={numberOrder} />
        </Modal>
      </ModalOverlay>
      <ModalOverlay active={modalIngredientActive} setActive={setmodalIngredientActive}>
        <Modal title={'Детали ингредиента'} setModalAtive={setmodalIngredientActive}> <IngredientDetails data={dataIngredienState} value={targetValue} /> </Modal>
      </ModalOverlay>
    </div>
  );
}

export default App;
