import React, { useMemo, useState, useEffect, useCallback } from "react";
import BurgerConstructorItem from "../BurgerConstructorItem/BurgerConstructorItem";
import styles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../../services/action/orderBurger";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { addIngredient, addBun } from "../../services/action/burgerConstructor";
import { useHistory } from "react-router-dom";
import { getCookie } from "../../utils/api";

export default function BurgerConstructor({ setModalAtive }) {
  const accessToken = getCookie("token");
  const [totalPrice, setTotalPrice] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { burgerIgredients } = useSelector(
    (store) => store.BurgerIngredientsReducer
  );
  const { isAuthenticated } = useSelector(
    (store) => store.authorizationReducer
  );
  const { ingredientsConstructor, bunConstructor } = useSelector(
    (store) => store.BurgerConstructorReducer
  );
  const { orderRequest } = useSelector((store) => store.OrderBurgerReducer);
  const totalPriceIngredients = useMemo(
    () =>
      ingredientsConstructor.reduce((total, item) => total + item[0].price, 0),
    [ingredientsConstructor]
  );
  const totalPriceBun = useMemo(
    () => (bunConstructor.length >= 1 ? bunConstructor[0].price * 2 : 0),
    [bunConstructor]
  );
  const orderIngredients = useMemo(
    () => ingredientsConstructor.map((item) => item[0]._id),
    [ingredientsConstructor]
  );
  const orderBun = useMemo(
    () => bunConstructor.map((item) => item._id),
    [bunConstructor]
  );

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemId) {
      const typeIngredient = burgerIgredients
        .filter((item) => item._id === itemId.id)
        .map((item) => item.type);
      if (typeIngredient[0] !== "bun") {
        const ingredientItem = burgerIgredients.filter(
          (item) => item._id === itemId.id && item.type !== "bun"
        );
        dispatch(addIngredient(ingredientItem, uuidv4()));
      } else if (typeIngredient[0] === "bun") {
        const bunItem = burgerIgredients.filter(
          (item) => item._id === itemId.id && item.type === "bun"
        );
        dispatch(addBun(bunItem));
      }
    },
  });

  useEffect(() => {
    setTotalPrice(totalPriceIngredients + totalPriceBun);
  }, [
    ingredientsConstructor,
    bunConstructor,
    burgerIgredients,
    totalPriceIngredients,
    totalPriceBun,
  ]);

  const creatOrderAndSetModal = useCallback(() => {
    if (isAuthenticated && accessToken) {
      dispatch(getOrder(accessToken, ...orderIngredients, ...orderBun));
      setModalAtive(true);
    } else {
      history.replace({ pathname: "/login" });
    }
  }, [
    dispatch,
    history,
    isAuthenticated,
    orderBun,
    orderIngredients,
    setModalAtive,
  ]);

  return (
    <section className={styles.section} ref={dropTarget}>
      {bunConstructor.length >= 1 ? (
        <div className="ml-9">
          {bunConstructor.map((elem, index) => (
            <ConstructorElement
              type="top"
              isLocked={true}
              key={index}
              text={`${elem.name} (верх)`}
              thumbnail={elem.image}
              price={elem.price}
            />
          ))}
        </div>
      ) : (
        <h2 className="text text_type_digits-medium">Добавте булку</h2>
      )}
      {ingredientsConstructor.length >= 1 ? (
        <ul className={styles.section__block}>
          {ingredientsConstructor.map((elem, index) => (
            <BurgerConstructorItem
              key={elem.uuid}
              text={elem[0].name}
              image={elem[0].image}
              price={elem[0].price}
              id={elem[0]._id}
              indexItem={index}
            />
          ))}
        </ul>
      ) : (
        <h2 className="text text_type_digits-medium">Добавте ингредиент</h2>
      )}
      <div className="ml-9">
        {bunConstructor.map((elem, index) => (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            key={index}
            text={`${elem.name} (низ)`}
            thumbnail={elem.image}
            price={elem.price}
          />
        ))}
      </div>
      <div className={styles.button__block}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
          <CurrencyIcon />
        </div>
        {bunConstructor.length >= 1 && ingredientsConstructor.length >= 1 ? (
          <Button type="primary" size="medium" onClick={creatOrderAndSetModal}>
             Оформить заказ
          </Button>
        ) : (
          <Button type="primary" size="medium" disabled={true}>
            {orderRequest ? "..загрузка" : "Оформить заказ"}
          </Button>
        )}
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  setModalAtive: PropTypes.func.isRequired,
};
