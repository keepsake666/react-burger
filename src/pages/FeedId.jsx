import styles from "./FeedId.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

export default function FeedId() {
  return (
    <main className={styles.main__page}>
      <div className={styles.main}>
        <p className={`text text_type_digits-default ${styles.feed}`}>
          #034535
        </p>
        <h3 className={`text text_type_main-medium ${styles.name}`}>
          Death Star Starship Main бургер
        </h3>
        <p className={`text text_type_main-default ${styles.status}`}>
          Выполнен
        </p>
        <h3 className={`text text_type_main-medium mb-6`}>Состав:</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.container__ingredient}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02.png"
                alt=""
                className={styles.image}
              />
              <p className={`text text_type_main-default`}>
                Флюоресцентная булка R2-D3
              </p>
            </div>
            <div className={styles.item__name}>
              <p className="text text_type_digits-default mr-2">480</p>
              <CurrencyIcon type="primary" />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.container__ingredient}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02.png"
                alt=""
                className={styles.image}
              />
              <p className={`text text_type_main-default`}>
                Флюоресцентная булка R2-D3
              </p>
            </div>
            <div className={styles.item__name}>
              <p className="text text_type_digits-default mr-2">1 x 480</p>
              <CurrencyIcon type="primary" />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.container__ingredient}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02.png"
                alt=""
                className={styles.image}
              />
              <p className={`text text_type_main-default`}>
                Флюоресцентная булка R2-D3
              </p>
            </div>
            <div className={styles.item__name}>
              <p className="text text_type_digits-default mr-2">480</p>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        </ul>
        <div className={styles.container__allPrice}>
          <p className="text text_type_main-default text_color_inactive">
            Сегодня, 16:20 i-GMT+3
          </p>
          <div className={styles.item__name}>
            <p className="text text_type_digits-default mr-2">480</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </main>
  );
}
