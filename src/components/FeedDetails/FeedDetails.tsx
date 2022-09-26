import styles from "./FeedDetails.module.css";
import React, {FC, useEffect, useState} from "react";
import { useSelector } from "../../services/hooks";

interface IFeedDetails {
  total: number;
  totalToday: number;
}

export const FeedDetails: FC<IFeedDetails> =({ total, totalToday }) =>{
  const [ordersDone, setOrdersDone] = useState<any>([]);
  const [ordersReady, setOrdersReady] = useState<any>([]);
  const { orders } = useSelector((state) => state.wsReducer);

  useEffect(() => {
    setOrdersDone(
      orders.filter((item:any) => item.status === "done").map((item:any) => item.number)
    );
    setOrdersReady(
      orders.filter((item:any) => item.status !== "done").map((item:any) => item.number)
    );
  }, [orders]);

  return (
    <div className={styles.main}>
      <div className={styles.container__turn}>
        <div>
          <h2 className="text text_type_main-medium mb-5">Готовы:</h2>
          <ul className={styles.list}>
            {ordersDone.map((item:any, index:number) => (
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
            {ordersReady.map((item:any, index:number) => (
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
