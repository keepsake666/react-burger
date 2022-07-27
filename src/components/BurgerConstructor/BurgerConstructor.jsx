import React, { useMemo, useState, useEffect } from 'react';
import BurgerConstructorItem from '../BurgerConstructorItem/BurgerConstructorItem';
import styles from './BurgerConstructor.module.css';
import PropTypes from 'prop-types';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { getOrder } from '../../services/action/action'
import { useDrop } from "react-dnd";
import { ADD_ITNGREDIENTS, ADD_BUN } from '../../services/action/action';

export default function BurgerConstructor({ setModalAtive, setOrder, creatOrder }) {
  const [totalPrice, setTotlPrice] = useState(null)
  const dispatch = useDispatch();
  const { burgerIgredients, ingredientsConstructor, bunConstructor } = useSelector(store => store.BurgerReducer)
  const ingredient = useMemo(() => ingredientsConstructor.filter((item) => item.type !== 'bun'), [ingredientsConstructor])
  const totapPriceIngredients = useMemo(() => ingredient.reduce((total, item) => total + item.price, 0), [ingredientsConstructor])
  const totalPriceBun = useMemo(() => bunConstructor.length >= 1 ? bunConstructor[0].price * 2 : 0, [bunConstructor])

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemId) {
      const typeIngredient = burgerIgredients.filter(item => item._id === itemId.id).map(item => item.type)
      if (typeIngredient[0] !== "bun") {
        dispatch({
          type: ADD_ITNGREDIENTS,
          addIngredient: burgerIgredients.filter(item => item._id === itemId.id && item.type !== 'bun')
        })
      } else if (typeIngredient[0] === "bun") {
        dispatch({
          type: ADD_BUN,
          addBun: burgerIgredients.filter(item => item._id === itemId.id && item.type === 'bun')
        })
      }
    },
  });

  useEffect(() => {
    const order = burgerIgredients.map(item => item._id)
    setOrder(order)
    setTotlPrice(totapPriceIngredients + totalPriceBun)
  }, [ingredientsConstructor, bunConstructor])

  function creatOrderAndSetModal() {
    creatOrder()
    setModalAtive(true)
  }

  return (
    <section className={styles.section} ref={dropTarget}>
      <div className='ml-9'>
        {bunConstructor.map((elem, index) => (
          <ConstructorElement type="top" isLocked={true} key={index} text={`${elem.name} (верх)`} thumbnail={elem.image} price={elem.price} />
        ))}
      </div>
      {ingredient.length >= 1 ?
        <ul className={styles.section__block}>
          {ingredient.map((elem, index) => (
            <BurgerConstructorItem key={index} text={elem.name} image={elem.image} price={elem.price} />
          ))}
        </ul>
        : <h1>Dobavte ing</h1>
      }
      <div className='ml-9' >
        {bunConstructor.map((elem, index) => (
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