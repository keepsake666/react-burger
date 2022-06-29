import React from 'react';
import styles from './IngredientsItem.module.css'
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientsItem({name, price, image, setModalAtive, value}) {

  return (
    <li className={styles.item}>
      <img src={image} alt={name} className={styles.item_image}  onClick={(e) => `${setModalAtive(true)} ${value(e.target.src)}` }/>
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
  value: PropTypes.func.isRequired,
}; 