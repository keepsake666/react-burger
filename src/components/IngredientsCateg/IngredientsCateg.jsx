import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import IngredientsItem from '../IngredientsItem/IngredientsItem';
import styles from './IngredientsCateg.module.css';
import { useSelector } from 'react-redux';

function IngredientsCateg({ setModalAtive, refBun, refMain, refSauce }) {
  const { burgerIgredients } = useSelector(store => store.BurgerIngredientsReducer)
  const main = useMemo(() => burgerIgredients.filter((elem) => elem.type === 'main'), [burgerIgredients])
  const bun = useMemo(() => burgerIgredients.filter((elem) => elem.type === 'bun'), [burgerIgredients])
  const sauce = useMemo(() => burgerIgredients.filter((elem) => elem.type === 'sauce'), [burgerIgredients])

  return (
    <ul className={styles.list}>
      <li id='bun'>
        <h2 className="text text_type_main-medium mb-4" ref={refBun} >Булка</h2>
        <ul className={styles.list_item}>
          {bun.map((elem) => (
            <IngredientsItem type={'bun'} key={elem._id} id={elem._id} name={elem.name} image={elem.image} price={elem.price} setModalAtive={setModalAtive} />
          ))}
        </ul>
      </li>
      <li id='sauce'>
        <h2 className="text text_type_main-medium mb-4" ref={refMain} >Соусы</h2>
        <ul className={styles.list_item}>
          {sauce.map((elem) => (
            <IngredientsItem key={elem._id} id={elem._id} name={elem.name} image={elem.image} price={elem.price} setModalAtive={setModalAtive} />
          ))}
        </ul>
      </li>
      <li id='main'>
        <h2 className="text text_type_main-medium mb-4" ref={refSauce} >Начинка</h2>
        <ul className={styles.list_item}>
          {main.map((elem) => (
            <IngredientsItem key={elem._id} id={elem._id} name={elem.name} image={elem.image} price={elem.price} setModalAtive={setModalAtive} />
          ))}
        </ul>
      </li>
    </ul>
  )
}
export default IngredientsCateg;

IngredientsCateg.propTypes = {
  setModalAtive: PropTypes.func.isRequired,
}; 