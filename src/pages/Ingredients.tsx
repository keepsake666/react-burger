import styles from "./Ingredients.module.css";
import React, { FC, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "../services/hooks";

export const Ingredients: FC = () => {
  const location = useLocation();
  const id = location.pathname.slice(12);
  const { burgerIgredients } = useSelector(
    (store) => store.BurgerIngredientsReducer
  );

  let ingredient: any;
  ingredient = useMemo(
    () => burgerIgredients.filter((item) => item._id === id),
    [burgerIgredients, id]
  );

  return ingredient.length >= 1 ? (
    <main className={styles.main__page}>
      <div className={styles.main}>
        <h2 className={`text text_type_main-medium mb-6 `}>
          Детали ингредиента
        </h2>
        <div className={styles.container}>
          <img src={ingredient[0].image_large} alt={ingredient[0].name} />
          <h2 className="text text_type_main-medium mt-4 mb-8">
            {ingredient[0].name}
          </h2>
          <ul className={styles.list}>
            <li className={`mr-5 ${styles.item}`}>
              <p className="text text_type_main-default text_color_inactive">
                Калории,ккал
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {ingredient[0].calories}
              </p>
            </li>
            <li className={`mr-5 ${styles.item}`}>
              <p className="text text_type_main-default text_color_inactive">
                Белки, г
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {ingredient[0].proteins}
              </p>
            </li>
            <li className={`mr-5 ${styles.item}`}>
              <p className="text text_type_main-default text_color_inactive">
                Жиры, г
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {ingredient[0].fat}
              </p>
            </li>
            <li className={styles.item}>
              <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </p>
              <p className="text text_type_main-default text_color_inactive ">
                {ingredient[0].carbohydrates}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  ) : (
    <main className={styles.main__page}>
      {" "}
      <div className={styles.main}>
        {" "}
        <h2 className={`text text_type_main-medium mb-6 `}>Загрузка...</h2>{" "}
      </div>
    </main>
  );
};
