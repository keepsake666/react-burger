import React from 'react';
import IngredientsItem from '../IngredientsItem/IngredientsItem'
import styles from './IngredientsCateg.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientsCateg() {

  return (
    <ul className={styles.list}>
      <li>
        <h2 className="text text_type_main-medium">Булки</h2>
        <ul className={styles.list_item}>
          <li className={styles.item}>
            <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" className="ml-4" />
            <Counter count={2} size="default" />
            <div className={styles.item__name}>
              <p className="text text_type_digits-default">23</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">Краторная булка N-200i</p>
          </li>
          <li className={styles.item}>
            <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" className="ml-4" />
            <Counter count={2} size="default" />
            <div className={styles.item__name}>
              <p className="text text_type_digits-default">23</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">Краторная булка N-200i</p>
          </li>
          <li className={styles.item}>
            <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" className="ml-4" />
            <Counter count={2} size="default" />
            <div className={styles.item__name}>
              <p className="text text_type_digits-default">23</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">Краторная булка N-200i</p>
          </li>
        </ul>
      </li>
      <li>
        <h2 className="text text_type_main-medium">Булки</h2>
        <ul className={styles.list_item}>
          <li className={styles.item}>
            <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" className="ml-4" />
            <Counter count={2} size="default" />
            <div className={styles.item__name}>
              <p className="text text_type_digits-default">23</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">Краторная булка N-200i</p>
          </li>
          <li className={styles.item}>
            <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" className="ml-4" />
            <Counter count={2} size="default" />
            <div className={styles.item__name}>
              <p className="text text_type_digits-default">23</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">Краторная булка N-200i</p>
          </li>
          <li className={styles.item}>
            <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" className="ml-4" />
            <Counter count={2} size="default" />
            <div className={styles.item__name}>
              <p className="text text_type_digits-default">23</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">Краторная булка N-200i</p>
          </li>
        </ul>
      </li>
    </ul>
  )
}
export default IngredientsCateg;