import React from 'react';
import IngredientsItem from '../IngredientsItem/IngredientsItem'
import styles from './IngredientsCateg.module.css'
import { data } from '../utils/data'

function IngredientsCateg() {
  const main = data.filter((elem) => elem.type === 'main')
  const bun = data.filter((elem) => elem.type === 'bun')
  const sauce = data.filter((elem) => elem.type === 'sauce')
  return (
    <ul className={styles.list}>
      <li>
        <h2 className="text text_type_main-medium mb-4">Булка</h2>
        <ul className={styles.list_item}>
          {bun.map((elem) => (
            <IngredientsItem key={elem._id} name={elem.name} image={elem.image} price={elem.price} />
          ))}
        </ul>
      </li>
      <li>
        <h2 className="text text_type_main-medium mb-4">Соусы</h2>
        <ul className={styles.list_item}>
          {sauce.map((elem) => (
            <IngredientsItem key={elem._id} name={elem.name} image={elem.image} price={elem.price} />
          ))}
        </ul>
      </li>
      <li>
        <h2 className="text text_type_main-medium mb-4">Начинка</h2>
        <ul className={styles.list_item}>
          {main.map((elem) => (
            <IngredientsItem key={elem._id} name={elem.name} image={elem.image} price={elem.price} />
          ))}
        </ul>
      </li>
    </ul>
  )
}
export default IngredientsCateg;