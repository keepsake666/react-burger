import styles from "./FeedItem.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { date } from "../../utils/const";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export default function FeedItem({ name, time, number, ingredient }) {
  const { burgerIgredients } = useSelector(
    (store) => store.BurgerIngredientsReducer
  );

  const orderItems = ingredient?.map((item) => {
    return burgerIgredients?.find((elem) => {
      return item === elem._id;
    });
  });

  const totalPrice = useMemo(
    () => orderItems?.reduce((total, item) => total + item.price, 0),
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
              {orderItems?.slice(0, 5).map((item) => (
                <li className={styles.item} key={uuidv4()}>
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
            orderItems?.map((item) => (
              <li className={styles.item} key={uuidv4()}>
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

FeedItem.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  ingredient: PropTypes.array.isRequired,
};
