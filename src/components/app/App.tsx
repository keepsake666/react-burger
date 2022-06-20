import React from 'react';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import styles from './App.module.css'
function App() {
  return (
    <div>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients />
        <section>
          <h2></h2>
        </section>
      </main>
    </div>
  );
}

export default App;
