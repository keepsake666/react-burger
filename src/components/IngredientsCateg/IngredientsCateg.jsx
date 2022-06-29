import React from 'react';
import PropTypes from 'prop-types';
import IngredientsItem from '../IngredientsItem/IngredientsItem'
import styles from './IngredientsCateg.module.css'

function IngredientsCateg({ data, setModalAtive, value }) {
  const main = data.filter((elem) => elem.type === 'main')
  const bun = data.filter((elem) => elem.type === 'bun')
  const sauce = data.filter((elem) => elem.type === 'sauce')
  return (
    <ul className={styles.list}>
      <li>
        <h2 className="text text_type_main-medium mb-4">Булка</h2>
        <ul className={styles.list_item}>
          {bun.map((elem) => (
            <IngredientsItem key={elem._id} name={elem.name} image={elem.image} price={elem.price} setModalAtive={setModalAtive} value={value} />
          ))}
        </ul>
      </li>
      <li>
        <h2 className="text text_type_main-medium mb-4">Соусы</h2>
        <ul className={styles.list_item}>
          {sauce.map((elem) => (
            <IngredientsItem key={elem._id} name={elem.name} image={elem.image} price={elem.price} setModalAtive={setModalAtive} value={value} />
          ))}
        </ul>
      </li>
      <li>
        <h2 className="text text_type_main-medium mb-4">Начинка</h2>
        <ul className={styles.list_item}>
          {main.map((elem) => (
            <IngredientsItem key={elem._id} name={elem.name} image={elem.image} price={elem.price} setModalAtive={setModalAtive} value={value} />
          ))}
        </ul>
      </li>
    </ul>
  )
}
export default IngredientsCateg;

IngredientsCateg.propTypes = {
  data: PropTypes.array.isRequired,
  setModalAtive: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
}; 