import React from 'react';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import Modal from '../Modal/Modal';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import styles from './App.module.css'
import { checkResponse, config } from '../../utils/burger-api'

function App() {
  const [dataIngredienState, setDdataIngredienState] = React.useState([])
  const [modatOrderActive, setModalOrderAtive] = React.useState(false)
  const [modalIngredientActive, setmodalIngredientActive] = React.useState(false)
  const [targetValue, setTargetValue] = React.useState('')
  const [errState, setErrState] = React.useState()

  function apiData() {
    fetch(config.baseUrl + '/ingredients', {
      headers: config.headers
    })
      .then(checkResponse)
      .then((res) => {
        setDdataIngredienState(res.data)
      })
      .catch(err => {
        setErrState(err)
      })
  }

  React.useEffect(() => {
    apiData()
  }, [])

  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={dataIngredienState} setModalAtive={setmodalIngredientActive} value={setTargetValue} />
        <BurgerConstructor data={dataIngredienState} setModalAtive={setModalOrderAtive} />
      </main>
      <ModalOverlay active={modatOrderActive} setActive={setModalOrderAtive}>
        <Modal title={''} setModalAtive={setModalOrderAtive}> <OrderDetails /> </Modal>
      </ModalOverlay>
      <ModalOverlay active={modalIngredientActive} setActive={setmodalIngredientActive}>
        <Modal title={'Детали ингредиента'} setModalAtive={setmodalIngredientActive}> <IngredientDetails data={dataIngredienState} value={targetValue} /> </Modal>
      </ModalOverlay>
    </div>
  );
}

export default App;
