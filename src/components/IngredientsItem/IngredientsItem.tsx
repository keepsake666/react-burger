import React, { useMemo, FC } from "react";
import styles from "./IngredientsItem.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "../../services/hooks";

interface IIngredientsItem {
  name: string;
  price: number;
  image: string;
  setModalAtive: (bool: boolean) => void;
  id: any;
  type?: any;
}

export const IngredientsItem: FC<IIngredientsItem> = ({
  name,
  price,
  image,
  setModalAtive,
  id,
  type,
}) => {
  const dispatch = useDispatch();
  const { ingredientsConstructor, bunConstructor } = useSelector(
    (store) => store.BurgerConstructorReducer
  );
  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: { id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const countIngredient = useMemo(
    () =>
      ingredientsConstructor?.filter((item: any) => item[0]._id === id).length,
    [id, ingredientsConstructor]
  );
  const countBun = useMemo(
    () => bunConstructor?.filter((item: any) => item._id === id).length,
    [bunConstructor, id]
  );

  return (
    <li className={styles.item} ref={dragRef} style={{ opacity }}>
      <img
        id={id}
        src={image}
        alt={name}
        className={styles.item_image}
        onClick={() => setModalAtive(true)}
      />
      <Counter
        count={type === "bun" ? countBun * 2 : countIngredient}
        size="default"
      />
      <div className={styles.item__name}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </li>
  );
};
