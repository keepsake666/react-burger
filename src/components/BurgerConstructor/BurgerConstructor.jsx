import React, { useMemo, useState, useEffect } from 'react';
import BurgerConstructorItem from '../BurgerConstructorItem/BurgerConstructorItem';
import styles from './BurgerConstructor.module.css';
import PropTypes from 'prop-types';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { getOrder } from '../../services/action/action'
import { useDrop } from "react-dnd";
import { ADD_ITNGREDIENTS } from '../../services/action/action';

export default function BurgerConstructor({ setModalAtive, setOrder, creatOrder }) {
  const [totalPrice, setTotlPrice] = useState(null)
  const dispatch = useDispatch();
  const { burgerIgredients, ingredientsConstructor } = useSelector(store => store.BurgerReducer)
  const ingredient = useMemo(() => ingredientsConstructor.filter((item) => item.type !== 'bun'), [ingredientsConstructor])
  const bun = useMemo(() => ingredientsConstructor.filter((item) => item.type === 'bun').slice(-1), [ingredientsConstructor])
   const totapPriceIngredients = useMemo(() => ingredient.reduce((total, item) => total + item.price, 0), [ingredientsConstructor])
   const totalPriceBun = useMemo(() => ingredientsConstructor.length >= 1 ? bun[0].price * 2 : 0, [ingredientsConstructor])
  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemId) {
      dispatch({
        type: ADD_ITNGREDIENTS,
        addIngredient: burgerIgredients.filter(item => item._id === itemId.id)
      })
    },

  });
  useEffect(() => {
    const order = burgerIgredients.map(item => item._id)
    setOrder(order)
    setTotlPrice(totapPriceIngredients + totalPriceBun)
  }, [ingredientsConstructor])

  function creatOrderAndSetModal() {
    creatOrder()
    setModalAtive(true)
  }

  const asdasda = ingredientsConstructor.map(item => [item])
  console.log(asdasda)
  return (
    <section className={styles.section} ref={dropTarget}>
      <div className='ml-9'>
        {bun.map((elem, index) => (
          <ConstructorElement type="top" isLocked={true} key={index} text={`${elem.name} (верх)`} thumbnail={elem.image} price={elem.price} />
        ))}
      </div>
      <ul className={styles.section__block}>
        {ingredient.map((elem, index) => (
          <BurgerConstructorItem key={index} text={elem.name} image={elem.image} price={elem.price} />
        ))}
      </ul>
      <div className='ml-9' >
        {bun.map((elem, index) => (
          <ConstructorElement type="bottom" isLocked={true} key={index} text={`${elem.name} (низ)`} thumbnail={elem.image} price={elem.price} />
        ))}
      </div>
      <div className={styles.button__block}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
          <CurrencyIcon />
        </div>
        <Button type="primary" size="medium" onClick={creatOrderAndSetModal}>
          Оформить заказ
        </Button>
      </div>
    </section >
  )
}

BurgerConstructor.propTypes = {
  setModalAtive: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
  creatOrder: PropTypes.func.isRequired
}; 