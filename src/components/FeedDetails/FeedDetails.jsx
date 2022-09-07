import styles from "./FeedDetails.module.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function FeedDetails({ total, totalToday }) {
  const [ordersDone, setOrdersDone] = useState([]);
  const [ordersReady, setOrdersReady] = useState([]);
  const { orders } = useSelector((store) => store.wsReducer);

  useEffect(() => {
    setOrdersDone(
      orders.filter((item) => item.status === "done").map((item) => item.number)
    );
    setOrdersReady(
      orders.filter((item) => item.status !== "done").map((item) => item.number)
    );
  }, [orders]);

  return (
    <div className={styles.main}>
      <div className={styles.container__turn}>
        <div>
          <h2 className="text text_type_main-medium mb-5">Готовы:</h2>
          <ul className={styles.list}>
            {ordersDone.map((item, index) => (
              <li
                className={`text text_type_digits-default ${styles.item__left}`}
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text text_type_main-medium mb-5">В работе:</h2>
          <ul className={styles.list}>
            {ordersReady.map((item, index) => (
              <li
                className={`text text_type_digits-default ${styles.item__right}`}
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-15">
        <h2 className="text text_type_main-medium">Выполнено за все время:</h2>
        <p className={`text text_type_digits-large ${styles.text}`}>{total}</p>
      </div>
      <div>
        <h2 className="text text_type_main-medium">Выполнено за сегодня:</h2>
        <p className={`text text_type_digits-large ${styles.text}`}>
          {totalToday}
        </p>
      </div>
    </div>
  );
}

FeedDetails.propTypes = {
  total: PropTypes.number.isRequired,
  totalToday: PropTypes.number.isRequired,
};
