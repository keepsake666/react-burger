import React from 'react';

import styles from './BurgerConstructor.module.css'
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerConstructor() {

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
        <li className={styles.item}>
          <DragIcon />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
        <li className={styles.item}>
          <DragIcon />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
        <li className={styles.item}>
          <DragIcon />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
        <li className={styles.item}>
          <DragIcon />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
        <li className={styles.item}>
          <DragIcon />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
        <li className={styles.item}>
          <DragIcon />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
        <li className={styles.item}>
          <DragIcon />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
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