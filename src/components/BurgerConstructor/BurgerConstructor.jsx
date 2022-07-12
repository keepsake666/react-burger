import React, { useContext } from 'react';
import BurgerConstructorItem from '../BurgerConstructorItem/BurgerConstructorItem';
import styles from './BurgerConstructor.module.css';
import PropTypes from 'prop-types';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { DataApiContext } from '../../context/dataApiContext';

export default function BurgerConstructor({ setModalAtive, setOrder, creatOrder }) {
  const [totalPrice, setTotlPrice] = React.useState(null)
  const { dataIngredienState } = useContext(DataApiContext)
  const ingredient = dataIngredienState.filter((item) => item.type !== 'bun')
  const bunBottom = dataIngredienState.filter((item) => item.type === 'bun').slice(-1)
  const bunTop = dataIngredienState.filter((item) => item.type === 'bun').slice(-1)
  const totapPriceIngredients = ingredient.reduce((total, item) => total + item.price, 0)
  const totalPriceBun = dataIngredienState.length >= 1 ? bunTop[0].price + bunBottom[0].price : 0
  const order = dataIngredienState.map(item => item._id)

  React.useMemo(() => setOrder(order), [dataIngredienState])
  React.useMemo(() => setTotlPrice(totapPriceIngredients + totalPriceBun), [dataIngredienState])

  return (
    <section className={styles.section}>
      <div className='ml-9'>
        {bunTop.map((elem) => (
          <ConstructorElement type="top" isLocked={true} key={elem._id} text={`${elem.name} (верх)`} thumbnail={elem.image} price={elem.price} />
        ))}
      </div>
      <ul className={styles.section__block}>
        {ingredient.map((elem) => (
          <BurgerConstructorItem key={elem._id} text={elem.name} image={elem.image} price={elem.price} />
        ))}
      </ul>
      <div className='ml-9'>
        {bunBottom.map((elem) => (
          <ConstructorElement type="bottom" isLocked={true} key={elem._id} text={`${elem.name} (низ)`} thumbnail={elem.image} price={elem.price} />
        ))}
      </div>
      <div className={styles.button__block}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
          <CurrencyIcon />
        </div>
        <Button type="primary" size="medium" onClick={() => `${creatOrder()} ${setModalAtive(true)} `} >
          Оформить заказ
        </Button>
      </div>
    </section >
  )
}

BurgerConstructor.propTypes = {
  setModalAtive: PropTypes.func.isRequired,
}; 