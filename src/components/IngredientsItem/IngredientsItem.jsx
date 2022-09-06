import React, { useMemo } from "react";
import styles from "./IngredientsItem.module.css";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { GET_INGREDIENTS_DETAILS } from "../../services/action/ingredientDetails";
import { useDrag } from "react-dnd";

function IngredientsItem({ name, price, image, setModalAtive, id, type }) {
  const dispatch = useDispatch();
  const { ingredientsConstructor, bunConstructor } = useSelector(
    (store) => store.BurgerConstructorReducer
  );
  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: { id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const countIngredient = useMemo(
    () => ingredientsConstructor?.filter((item) => item[0]._id === id).length,
    [id, ingredientsConstructor]
  );
  const countBun = useMemo(
    () => bunConstructor?.filter((item) => item._id === id).length,
    [bunConstructor, id]
  );

  return (
    <li className={styles.item} ref={dragRef} style={{ opacity }}>
      <img
        id={id}
        src={image}
        alt={name}
        className={styles.item_image}
        onClick={(e) =>
          `${setModalAtive(true)}  ${dispatch({
            type: GET_INGREDIENTS_DETAILS,
            details: e.target.id,
          })}`
        }
      />
      <Counter
        count={type === "bun" ? countBun * 2 : countIngredient}
        size="default"
      />
      <div className={styles.item__name}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </li>
  );
}
export default IngredientsItem;

IngredientsItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  setModalAtive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};
