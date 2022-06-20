import React from 'react';
import IngredientsCateg from '../IngredientsCateg/IngredientsCateg'
import styles from './BurgerIngredients.module.css'
import { Logo, BurgerIcon, ListIcon, ProfileIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one')
  return (
    <section className={styles.section}>
      <h2 className="text text_type_main-large mb-5 mt-10">Соберите бургер</h2>
      <div style={{ display: 'flex' }} className="mb-10">
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <IngredientsCateg>
      </IngredientsCateg>
    </section>
  )
}