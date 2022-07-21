import React from 'react';
import styles from './IngredientsItem.module.css'
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { GET_INGREDIENTS_DETAILS } from '../../services/action/action'

function IngredientsItem({ name, price, image, setModalAtive, id }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <img id={id} src={image} alt={name} className={styles.item_image}
        onClick={(e) => `${setModalAtive(true)}  ${dispatch({ type: GET_INGREDIENTS_DETAILS, details: e.target.id })}`} />
      <Counter count={0} size="default" />
      <div className={styles.item__name}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </li>
  )
}
export default IngredientsItem;

IngredientsItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  setModalAtive: PropTypes.func.isRequired,
};