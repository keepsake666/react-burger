import React, { FC, useMemo } from "react";
import {IngredientsItem} from "../IngredientsItem/IngredientsItem";
import styles from "./IngredientsCateg.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "../../services/hooks";

interface IIngredientsCateg {
  setModalAtive: (bool: boolean) => void;
  refBun: any;
  refMain: any;
  refSauce: any;
}

export const IngredientsCateg: FC<IIngredientsCateg> = ({
  setModalAtive,
  refBun,
  refMain,
  refSauce,
}) => {
  const location = useLocation();

  const { burgerIgredients } = useSelector(
    (state) => state.BurgerIngredientsReducer
  );
  const main = useMemo(
    () => burgerIgredients?.filter((elem: any) => elem.type === "main"),
    [burgerIgredients]
  );
  const bun = useMemo(
    () => burgerIgredients?.filter((elem:any) => elem.type === "bun"),
    [burgerIgredients]
  );
  const sauce = useMemo(
    () => burgerIgredients?.filter((elem: any) => elem.type === "sauce"),
    [burgerIgredients]
  );

  return (
    <ul className={styles.list}>
      <li id="bun">
        <h2 className="text text_type_main-medium mb-4" ref={refBun}>
          Булка
        </h2>
        <ul className={styles.list_item}>
          {bun.map((elem: any) => (
            <Link
              to={{
                pathname: `/ingredient/${elem._id}`,
                state: { background: location },
              }}
              key={elem._id}
              className={styles.link}
            >
              <IngredientsItem
                type={"bun"}
                key={elem._id}
                id={elem._id}
                name={elem.name}
                image={elem.image}
                price={elem.price}
                setModalAtive={setModalAtive}
              />
            </Link>
          ))}
        </ul>
      </li>
      <li id="sauce">
        <h2 className="text text_type_main-medium mb-4" ref={refMain}>
          Соусы
        </h2>
        <ul className={styles.list_item}>
          {sauce.map((elem: any) => (
            <Link
              to={{
                pathname: `/ingredient/${elem._id}`,
                state: { background: location },
              }}
              key={elem._id}
              className={styles.link}
            >
              <IngredientsItem
                key={elem._id}
                id={elem._id}
                name={elem.name}
                image={elem.image}
                price={elem.price}
                setModalAtive={setModalAtive}
              />
            </Link>
          ))}
        </ul>
      </li>
      <li id="main">
        <h2 className="text text_type_main-medium mb-4" ref={refSauce}>
          Начинка
        </h2>
        <ul className={styles.list_item}>
          {main.map((elem: any) => (
            <Link
              to={{
                pathname: `/ingredient/${elem._id}`,
                state: { background: location },
              }}
              key={elem._id}
              className={styles.link}
            >
              <IngredientsItem
                key={elem._id}
                id={elem._id}
                name={elem.name}
                image={elem.image}
                price={elem.price}
                setModalAtive={setModalAtive}
              />
            </Link>
          ))}
        </ul>
      </li>
    </ul>
  );
};
