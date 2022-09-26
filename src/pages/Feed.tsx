import styles from "./Feed.module.css";
import React, {FC, useEffect} from "react";
import {FeedItem} from "../components/FeedItem/FeedItem";
import {FeedDetails} from "../components/FeedDetails/FeedDetails";
import { Link, useLocation } from "react-router-dom";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../services/action/socketAction";
import {useDispatch, useSelector} from "../services/hooks";

interface IFeed {
  active:(bool:boolean) => void;
}

export const Feed:FC<IFeed> = ({ active }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector((store) => store.wsReducer);

  useEffect(() => {
    dispatch({type:WS_CONNECTION_START})
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    }
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <div className={styles.feed__container}>
        <h2 className="text text_type_main-large mb-5 mt-10">Лента заказов</h2>
        <ul className={styles.list}>
          {orders?.map((item:any) => (
            <Link
              to={{
                pathname: `/feed/${item._id}`,
                state: { background: location },
              }}
              className={styles.link}
              key={item._id}
              onClick={() => active(true)}
            >
              {" "}
              <FeedItem
                name={item.name}
                time={item.createdAt}
                number={item.number}
                ingredient={item.ingredients}
              />
            </Link>
          ))}
        </ul>
      </div>
      <div className={styles.detail__container}>
        <FeedDetails total={total} totalToday={totalToday} />
      </div>
    </main>
  );
}
