import styles from "./FeedId.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, useEffect, useMemo } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import {
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_CONNECTION_START,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../services/action/socketAction";
import { date } from "../utils/const";
import { useDispatch, useSelector } from "../services/hooks";
import { IGetOrdersWebSokect, IIngredients } from "../services/types/types";

interface IFeedId {
  modal?: boolean;
}

export const FeedId: FC<IFeedId> = ({ modal }) => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.wsReducer);
  const { authOrders } = useSelector((store) => store.wsReducer);
  const { burgerIgredients } = useSelector(
    (store) => store.BurgerIngredientsReducer
  );
  const params: { id: string } = useParams();
  const { id } = params;

  let data = match.path === "/feed/:id" ? orders : authOrders;

  let ingredient: IGetOrdersWebSokect[];
  ingredient = useMemo(
    () => data?.filter((item) => item._id === id),
    [id, data]
  );

  const stateIngredient = ingredient[0]?.ingredients.map((item) => {
    return burgerIgredients?.find((elem) => {
      return item === elem._id;
    });
  });

  const exclusiveItem = [...new Set(stateIngredient)];
  const countIngredient = (id: IIngredients): number => {
    return stateIngredient?.filter((item) => item === id).length;
  };

  const totalPrice = useMemo(
    () => stateIngredient?.reduce((total, item: any) => total + item.price, 0),
    [stateIngredient]
  );

  useEffect(() => {
    if (match.path === "/feed/:id") {
      dispatch({ type: WS_CONNECTION_START });
    } else if (match.path === "/profile/orders/:id") {
      dispatch({ type: WS_AUTH_CONNECTION_START });
    }
    return () => {
      if (match.path === "/feed/:id") {
        dispatch({ type: WS_CONNECTION_CLOSED });
      } else if (match.path === "/profile/orders/:id") {
        dispatch({ type: WS_AUTH_CONNECTION_CLOSED });
      }
    };
  }, [dispatch, match.path]);

  return ingredient?.length >= 1 ? (
    <main className={styles.main__page}>
      <div
        className={`${styles.main} ${modal ? styles.main__modal : styles.main}`}
      >
        <p className={`text text_type_digits-default ${styles.feed}`}>
          {ingredient[0]?.number}
        </p>
        <h3 className={`text text_type_main-medium ${styles.name}`}>
          {ingredient[0]?.name}
        </h3>
        {ingredient[0]?.status === "done" ? (
          <p className={`text text_type_main-default ${styles.status}`}>
            Выполнен
          </p>
        ) : (
          <p className={`text text_type_main-default ${styles.created}`}>
            Выполняется
          </p>
        )}
        <h3 className={`text text_type_main-medium mb-6`}>Состав:</h3>
        <ul
          className={`${styles.list} ${
            modal ? styles.list__modal : styles.list
          }`}
        >
          {exclusiveItem?.map((item: any) => (
            <li className={styles.item} key={item._id}>
              <div className={styles.container__ingredient}>
                <img src={item.image} alt="" className={styles.image} />
                <p className={`text text_type_main-default`}>{item.name}</p>
              </div>
              <div className={styles.item__name}>
                <p className="text text_type_digits-default mr-2">
                  {countIngredient(item)} x {item.price}
                </p>
                <CurrencyIcon type="primary" />
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.container__allPrice}>
          <p className="text text_type_main-default text_color_inactive">
            {date(ingredient[0]?.createdAt)}
          </p>
          <div className={styles.item__name}>
            <p className="text text_type_digits-default mr-2">{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </main>
  ) : (
    <main className={styles.main__page}>
      <div className={styles.main}>...загрузка</div>
    </main>
  );
};
