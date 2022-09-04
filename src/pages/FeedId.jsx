import styles from "./FeedId.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect, useMemo } from "react";
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../services/action/socketAction";

export default function FeedId() {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.wsReducer);
  const { burgerIgredients } = useSelector(
    (store) => store.BurgerIngredientsReducer
  );

  const id = useParams().id;
  let ingredient;
  ingredient = useMemo(
    () => orders.filter((item) => item._id === id),
    [id, orders]
  );

  const orderItems = ingredient[0]?.ingredients.map((item) => {
    return burgerIgredients?.find((elem) => {
      return item === elem._id;
    });
  });
  const totalPrice = useMemo(
    () => orderItems?.reduce((total, item) => total + item.price, 0),
    [orderItems]
  );

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
    return () => dispatch({ type: WS_CONNECTION_CLOSED });
  }, [dispatch]);

  return ingredient.length >= 1 ? (
    <main className={styles.main__page}>
      <div className={styles.main}>
        <p className={`text text_type_digits-default ${styles.feed}`}>
          {ingredient[0]?.number}
        </p>
        <h3 className={`text text_type_main-medium ${styles.name}`}>
          {ingredient[0]?.name}
        </h3>
        {ingredient[0]?.status === "done" ? (
          <p className={`text text_type_main-default ${styles.status}`}>
            Выполнен
          </p>
        ) : (
          <p className={`text text_type_main-default ${styles.created}`}>
            Выполняется
          </p>
        )}
        <h3 className={`text text_type_main-medium mb-6`}>Состав:</h3>
        <ul className={styles.list}>
          {orderItems.map((item, index) => (
            <li className={styles.item} key={index}>
              <div className={styles.container__ingredient}>
                <img src={item.image} alt="" className={styles.image} />
                <p className={`text text_type_main-default`}>{item.name}</p>
              </div>
              <div className={styles.item__name}>
                <p className="text text_type_digits-default mr-2">
                  {item.price}
                </p>
                <CurrencyIcon type="primary" />
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.container__allPrice}>
          <p className="text text_type_main-default text_color_inactive">
            {ingredient[0].createdAt}
          </p>
          <div className={styles.item__name}>
            <p className="text text_type_digits-default mr-2">{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </main>
  ) : (
    <main className={styles.main__page}>
      <div className={styles.main}>...загрузка</div>
    </main>
  );
}
