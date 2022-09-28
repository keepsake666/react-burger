import styles from "./FeedItem.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {FC, useMemo} from "react";
import { date } from "../../utils/const";
import {useSelector} from "../../services/hooks";

interface IFeedItem {
  name: string;
  time: Date;
  number: number;
  ingredient: Array<string>;
}

export const FeedItem:FC<IFeedItem> = ({ name, time, number, ingredient = [] }) =>{
  const { burgerIgredients } = useSelector(
    (state) => state.BurgerIngredientsReducer
  );

  const orderItems =  ingredient?.map((item) => {
    return burgerIgredients?.find((elem) => {
      return item === elem._id;
    });
  });

  const totalPrice = useMemo(
    () => orderItems?.reduce((total:number, item:any) => total + item.price, 0),
    [orderItems]
  );

  return (
    <li className={styles.feedItem}>
      <div className={styles.title}>
        <p className="text text_type_digits-default">{number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {date(time)}
        </p>
      </div>
      <h3 className={`text text_type_main-medium ${styles.name}`}>{name}</h3>
      <div className={styles.container}>
        <ul className={styles.list}>
          {orderItems?.length >= 6 ? (
            <>
              {orderItems?.slice(0, 5).map((item:any, index:number) => (
                <li className={styles.item} key={index}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.image}
                  />
                </li>
              ))}
              <li className={styles.item}>
                <p
                  className={`text text_type_main-default ${styles.text_image}`}
                >
                  +{orderItems?.length - 5}
                </p>
                <img
                  src={orderItems[5]?.image}
                  alt=""
                  className={`${styles.image} ${styles.last__image}`}
                />
              </li>
            </>
          ) : (
            orderItems?.map((item:any, index:number) => (
              <li className={styles.item} key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.image}
                />
              </li>
            ))
          )}
        </ul>

        <div className={styles.item__name}>
          <p className="text text_type_digits-default mr-2">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
}