import styles from "./FeedDetails.module.css";
import React from "react";

export default function FeedDetails() {
  return (
    <div className={styles.main}>
      <div className={styles.container__turn}>
        <div>
          <h2 className="text text_type_main-medium mb-5">Готовы:</h2>
          <ul className={styles.list}>
            <li
              className={`text text_type_digits-default ${styles.item__left}`}
            >
              123123
            </li>
            <li
              className={`text text_type_digits-default ${styles.item__left}`}
            >
              123123
            </li>
            <li
              className={`text text_type_digits-default ${styles.item__left}`}
            >
              123123
            </li>
            <li
              className={`text text_type_digits-default ${styles.item__left}`}
            >
              123123
            </li>
            <li
              className={`text text_type_digits-default ${styles.item__left}`}
            >
              123123
            </li>
            <li
              className={`text text_type_digits-default ${styles.item__left}`}
            >
              123123
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text text_type_main-medium mb-5">В работе:</h2>
          <ul className={styles.list}>
            <li
              className={`text text_type_digits-default ${styles.item__right}`}
            >
              123123
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-15">
        <h2 className="text text_type_main-medium">Выполнено за все время:</h2>
        <p className={`text text_type_digits-large ${styles.text}`}>28 752</p>
      </div>
      <div>
        <h2 className="text text_type_main-medium">Выполнено за сегодня:</h2>
        <p className={`text text_type_digits-large ${styles.text}`}>138</p>
      </div>
    </div>
  );
}
