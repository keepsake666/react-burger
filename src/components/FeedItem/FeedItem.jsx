import styles from "./FeedItem.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

export default function FeedItem() {
  return (
    <li className={styles.feedItem}>
      <div className={styles.title}>
        <p className="text text_type_digits-default">#034535</p>
        <p className="text text_type_main-default text_color_inactive">
          Сегодня, 16:20 i-GMT+3
        </p>
      </div>
      <h3 className={`text text_type_main-medium ${styles.name}`}>
        Death Star Starship Main бургер
      </h3>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img
              src="https://code.s3.yandex.net/react/code/bun-02.png"
              alt=""
              className={styles.image}
            />
          </li>
          <li className={styles.item}>
            <img
              src="https://code.s3.yandex.net/react/code/bun-02.png"
              alt=""
              className={styles.image}
            />
          </li>
          <li className={styles.item}>
            <img
              src="https://code.s3.yandex.net/react/code/bun-02.png"
              alt=""
              className={styles.image}
            />
          </li>
          <li className={styles.item}>
            <img
              src="https://code.s3.yandex.net/react/code/bun-02.png"
              alt=""
              className={styles.image}
            />
          </li>
          <li className={styles.item}>
            <p className={`text text_type_main-default ${styles.text_image}`}>
              +3
            </p>
            <img
              src="https://code.s3.yandex.net/react/code/bun-01.png"
              alt=""
              className={`${styles.image} ${styles.last__image}`}
            />
          </li>
        </ul>

        <div className={styles.item__name}>
          <p className="text text_type_digits-default mr-2">480</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
}
