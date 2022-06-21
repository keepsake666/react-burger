import React from 'react';
import styles from './IngredientsItem.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
function IngredientsItem(props) {

  return (
    <li className={styles.item}>
      <img src={props.image} alt={props.name} className="ml-4" />
      <Counter count={0} size="default" />
      <div className={styles.item__name}>
        <p style={{ marginRight: '9.5px' }} className="text text_type_digits-default">{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{props.name}</p>
    </li>
  )
}
export default IngredientsItem;