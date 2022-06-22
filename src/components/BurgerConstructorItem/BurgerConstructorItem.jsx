import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerConstructorItem.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerConstructorItem(props) {

  return (
    <li className={styles.item}>
      <DragIcon />
      <ConstructorElement
        text={props.text}
        price={props.price}
        thumbnail={props.image}
      />
    </li>
  )
}

BurgerConstructorItem.propTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}; 