import React from 'react';
import IngredientsCateg from '../IngredientsCateg/IngredientsCateg'
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredients() {
  const [current, setCurrent] = React.useState('bun')

  return (
    <section className={styles.section}>
      <h2 className="text text_type_main-large mb-5 mt-10">Соберите бургер</h2>
      <div style={{ display: 'flex' }} className="mb-10">
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <IngredientsCateg />
    </section>
  )
}