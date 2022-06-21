import React from 'react';
import BurgerConstructorItem from '../BurgerConstructorItem/BurgerConstructorItem';
import styles from './BurgerConstructor.module.css';
import PropTypes from 'prop-types';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';


export default function BurgerConstructor(props) {
  const data = props.data
  const ingredient = data.filter((item) => item.type !== 'bun'
  )
  return (
    <section className={styles.section}>
      <div className='ml-9'>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>
      <ul className={styles.section__block}>
        {ingredient.map((elem) => (
          <BurgerConstructorItem key={elem._id} text={elem.name} image={elem.image} price={elem.price} />
        ))}
      </ul>
      <div className='ml-9'>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>
      <div className={styles.button__block}>
        <div className={styles.price}>
          <p style={{ marginRight: '9.5px' }} className="text text_type_digits-medium">200</p>
          <CurrencyIcon />
        </div>
        <Button type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section >
  )
}

BurgerConstructor.propTypes = {
  data:PropTypes.array.isRequired
}; 