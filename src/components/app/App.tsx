import React from 'react';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import styles from './App.module.css'

function App() {
  const [dataState, setDataStae] = React.useState([])

  function apiData() {
    fetch('https://norma.nomoreparties.space/api/ingredients', {
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
        <BurgerIngredients data={dataState} />
        <BurgerConstructor data={dataState} />
      </main>
    </div>
  );
}

export default App;
