import React, {FC, useMemo} from "react";
import styles from "./IngredientDetails.module.css";
import { useLocation } from "react-router-dom";
import {useSelector} from "../../services/hooks";

export const IngredientDetails:FC =() => {
  const location = useLocation();
  const id = location.pathname.slice(12);

  const { burgerIgredients } = useSelector(
    (state) => state.BurgerIngredientsReducer
  );

  const ingredient:any = useMemo(
    () => burgerIgredients?.filter((item) => item._id === id),
    [burgerIgredients, id]
  );

  return ingredient.length >= 1 ? (
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
  ) : (
    <div>Ошибка</div>
  );
}
