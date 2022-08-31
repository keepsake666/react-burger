import styles from "./Feed.module.css";
import React, { useCallback, useEffect, useMemo } from "react";
import FeedItem from "../components/FeedItem/FeedItem";
import FeedDetails from "../components/FeedDetails/FeedDetails";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../services/action/socketAction";

export default function Feed() {
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector((store) => store.wsReducer);

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
    return () => dispatch({ type: WS_CONNECTION_CLOSED });
  }, [dispatch]);


  return (
    <main className={styles.main}>
      <div className={styles.feed__container}>
        <h2 className="text text_type_main-large mb-5 mt-10">Лента заказов</h2>
        <ul className={styles.list}>
          {orders.map((item, index) => (
            <Link to={`/feed/${item._id}`} className={styles.link} key={index}>
              {" "}
              <FeedItem
                name={item.name}
                time={item.createdAt}
                number={item.number}
                ingredient = {item.ingredients}
              />
            </Link>
          ))}
          <Link to="/feed/55" className={styles.link}>
            {" "}
            <FeedItem />{" "}
          </Link>
        </ul>
      </div>
      <div className={styles.detail__container}>
        <FeedDetails
          total={total}
          totalToday={totalToday}
        />
      </div>
    </main>
  );
}
