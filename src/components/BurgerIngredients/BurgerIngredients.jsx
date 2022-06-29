import React from 'react';
import PropTypes from 'prop-types';
import IngredientsCateg from '../IngredientsCateg/IngredientsCateg'
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { propData } from '../../utils/propTypesBurger'

export default function BurgerIngredients({data, setModalAtive, value}) {
  const [current, setCurrent] = React.useState('bun')
  return (
    <section className={styles.section}>
      <h2 className="text text_type_main-large mb-5 mt-10">Соберите бургер</h2>
      <div className={styles.tab__block}>
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
      <IngredientsCateg data={data} setModalAtive= {setModalAtive} value = {value}/>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: propData,
  setModalAtive:PropTypes.func.isRequired,
  value:PropTypes.func.isRequired,
}; 