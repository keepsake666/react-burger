import React from 'react';
import styles from './IngredientDetails.module.css'


export default function IngredientDetails() {
  return (
    <div className={styles.container}>
      <img src='https://code.s3.yandex.net/react/code/meat-03-large.png' alt='' />
      <h2 className="text text_type_main-medium mt-4 mb-8">Биокотлета из марсианской Магнолии</h2>
      <ul className={styles.list}>
        <li className={`mr-5 ${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_main-default text_color_inactive">244,4</p>
        </li >
        <li className={`mr-5 ${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_main-default text_color_inactive">244,4</p>
        </li >
        <li className={`mr-5 ${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive" >Жиры, г</p>
          <p className="text text_type_main-default text_color_inactive">244,4</p>
        </li >
        <li className={styles.item}>
          <p className="text text_type_main-default text_color_inactive" >Углеводы, г</p>
          <p className="text text_type_main-default text_color_inactive ">244,4</p>
        </li >
      </ul>
    </div >
  )
}