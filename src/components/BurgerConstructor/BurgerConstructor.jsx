import React, { useMemo, useState, useEffect } from 'react';
import BurgerConstructorItem from '../BurgerConstructorItem/BurgerConstructorItem';
import styles from './BurgerConstructor.module.css';
import PropTypes from 'prop-types';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { getOrder } from '../../services/action/orderBurger'
import { useDrop } from "react-dnd";
import { ADD_ITNGREDIENTS, ADD_BUN } from '../../services/action/burgerConstructor';

export default function BurgerConstructor({ setModalAtive }) {
  const [totalPrice, setTotlPrice] = useState(null)
  const dispatch = useDispatch();
  const { burgerIgredients } = useSelector(store => store.BurgerIngredientsReducer)
  const { ingredientsConstructor, bunConstructor } = useSelector(store => store.BurgerConstructorReducer)
  const totapPriceIngredients = useMemo(() => ingredientsConstructor.reduce((total, item) => total + item.price, 0), [ingredientsConstructor])
  const totalPriceBun = useMemo(() => bunConstructor.length >= 1 ? bunConstructor[0].price * 2 : 0, [bunConstructor])
  const orderIngredients = useMemo(() => ingredientsConstructor.map(item => item._id), [ingredientsConstructor])
  const orderBun = useMemo(() => bunConstructor.map(item => item._id), [bunConstructor])

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
    setTotlPrice(totapPriceIngredients + totalPriceBun)
  }, [ingredientsConstructor, bunConstructor, burgerIgredients, totapPriceIngredients, totalPriceBun])

  function creatOrderAndSetModal() {
    setModalAtive(true)
    dispatch(getOrder(orderIngredients, orderBun))
  }

  return (
    <section className={styles.section} ref={dropTarget}>
      {bunConstructor.length >= 1 ?
        <div className='ml-9'>
          {bunConstructor.map((elem, index) => (
            <ConstructorElement type="top" isLocked={true} key={index} text={`${elem.name} (верх)`} thumbnail={elem.image} price={elem.price} />
          ))}
        </div>
        : <h2 className="text text_type_digits-medium">Добавте булку</h2>}
      {ingredientsConstructor.length >= 1 ?
        <ul className={styles.section__block} >
          {ingredientsConstructor.map((elem, index) => (
            <BurgerConstructorItem key={index} text={elem.name} image={elem.image} price={elem.price} id={elem._id} indexItem={index} />
          ))}
        </ul>
        : <h2 className="text text_type_digits-medium">Добавте ингредиент</h2>
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
        {bunConstructor.length >= 1 && ingredientsConstructor.length >= 1 ?
          <Button type="primary" size="medium" onClick={creatOrderAndSetModal}>
            Оформить заказ
          </Button> : <Button type="primary" size="medium" disabled={true}>
            Оформить заказ
          </Button>
        }
      </div>
    </section >
  )
}

BurgerConstructor.propTypes = {
  setModalAtive: PropTypes.func.isRequired,
}; 