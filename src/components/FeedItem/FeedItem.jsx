import styles from "./FeedItem.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function FeedItem({ name, time, number, ingredient }) {
  const { burgerIgredients } = useSelector(
    (store) => store.BurgerIngredientsReducer
  );
  const ordertItem =
    ingredient?.map((item) => {
      return burgerIgredients?.find((elem) => {
        return item === elem._id;
      });
    })

  return (
    <li className={styles.feedItem}>
      <div className={styles.title}>
        <p className="text text_type_digits-default">{number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {time}
        </p>
      </div>
      <h3 className={`text text_type_main-medium ${styles.name}`}>{name}</h3>
      <div className={styles.container}>
        <ul className={styles.list}>
          {ordertItem?.length <4 ? ordertItem?.map((item, index)=> (
              <li className={styles.item} key={index}>
                <img
                    src={item.image}
                    alt={item.name}
                    className={styles.image}
                />
              </li>
          ))
            : <li></li>
          }
          {/**/}
          {/*<li className={styles.item}>*/}
          {/*  <img*/}
          {/*    src="https://code.s3.yandex.net/react/code/bun-02.png"*/}
          {/*    alt=""*/}
          {/*    className={styles.image}*/}
          {/*  />*/}
          {/*</li>*/}
          {/*<li className={styles.item}>*/}
          {/*  <img*/}
          {/*    src="https://code.s3.yandex.net/react/code/bun-02.png"*/}
          {/*    alt=""*/}
          {/*    className={styles.image}*/}
          {/*  />*/}
          {/*</li>*/}
          {/*<li className={styles.item}>*/}
          {/*  <img*/}
          {/*    src="https://code.s3.yandex.net/react/code/bun-02.png"*/}
          {/*    alt=""*/}
          {/*    className={styles.image}*/}
          {/*  />*/}
          {/*</li>*/}
          {/*<li className={styles.item}>*/}
          {/*  <p className={`text text_type_main-default ${styles.text_image}`}>*/}
          {/*    +3*/}
          {/*  </p>*/}
          {/*  <img*/}
          {/*    src="https://code.s3.yandex.net/react/code/bun-01.png"*/}
          {/*    alt=""*/}
          {/*    className={`${styles.image} ${styles.last__image}`}*/}
          {/*  />*/}
          {/*</li>*/}

        </ul>

        <div className={styles.item__name}>
          <p className="text text_type_digits-default mr-2">480</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
}
