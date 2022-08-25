import styles from "./Feed.module.css";
import React from "react";
import FeedItem from "../components/FeedItem/FeedItem";
import FeedDetails from "../components/FeedDetails/FeedDetails";

export default function Feed() {
  return (
    <main className={styles.main}>
      <div className={styles.feed__container}>
        <h2 className="text text_type_main-large mb-5 mt-10">Лента заказов</h2>
        <ul className={styles.list}>
          <FeedItem />
        </ul>
      </div>
      <div className={styles.detail__container}>
        <FeedDetails />
      </div>
    </main>
  );
}
