import React from 'react';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import Modal from '../Modal/Modal';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import styles from './App.module.css'

const url = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [dataState, setDataStae] = React.useState([])
  const [modatOrderActive, setModalOrderAtive] = React.useState(false)
  const [modalIngredientActive, setmodalIngredientActive] = React.useState(false)
  const [targetValue, setTargetValue] = React.useState()

  function apiData() {
    fetch(url, {
      headers: {
        'Content-Type': 'aplication.json'
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(`Ошибка: code ${res.status}`)
        }
      })
      .then((res) => {
        setDataStae(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    apiData()
  }, [])

  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={dataState} setModalAtive={setmodalIngredientActive} value={setTargetValue} />
        <BurgerConstructor data={dataState} setModalAtive={setModalOrderAtive} />
      </main>
      <ModalOverlay active={modatOrderActive} setActive={setModalOrderAtive}>
        <Modal title={''} setModalAtive={setModalOrderAtive}> <OrderDetails /> </Modal>
      </ModalOverlay>
      <ModalOverlay active={modalIngredientActive} setActive={setmodalIngredientActive}>
        <Modal title={'Детали ингредиента'} setModalAtive={setmodalIngredientActive}> <IngredientDetails data={dataState} value={targetValue} /> </Modal>
      </ModalOverlay>
    </div>
  );
}

export default App;
