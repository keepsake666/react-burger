import React from "react";
import styles from "./OrderDetails.module.css";
import { useSelector } from "react-redux";

export default function OrderDetails() {
  const { numberOrder } = useSelector((store) => store.OrderBurgerReducer);

  return (
    <div className={styles.container}>
      <h3 className={`text text_type_digits-large ${styles.title}`}>
        {numberOrder}
      </h3>
      <p className="text text_type_main-default mb-15">идентификатор заказа</p>
      <div className={styles.image}></div>
      <p className="text text_type_main-small mt-15 mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
