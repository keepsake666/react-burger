import React, {FC, useRef} from "react";
import styles from "./BurgerConstructorItem.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { DELETE_INGREDIEN } from "../../services/action/burgerConstructor";
import { useDrag, useDrop } from "react-dnd";
import { dporIngredient } from "../../services/action/burgerConstructor";
import {useDispatch} from "../../services/hooks";

interface IBurgerConstructorItem{
  text: string,
  price: number,
  image:string,
  indexItem:number,
  id:string,
}
export const BurgerConstructorItem:FC<IBurgerConstructorItem> =({
  text,
  price,
  image,
  indexItem,
  id,
}) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const deleteIngredient = (index:number) => {
    dispatch({
      type: DELETE_INGREDIEN,
      deleteItem: index,
    });
  };

  const [, drop] = useDrop({
    accept: "item",
    hover(item:any) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = indexItem;
      if (dragIndex) {
        dispatch(dporIngredient(dragIndex, hoverIndex));
      }
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "item",
    item: { id, indexItem },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.3 : 1;
  drag(drop(ref));

  return (
    <li
      className={styles.item}
      ref={ref}
      style={{ opacity }}
    >
      <DragIcon type="secondary" />
      <ConstructorElement
        text={text}
        price={price}
        thumbnail={image}
        handleClose={() => deleteIngredient(indexItem)}
      />
    </li>
  );
}
