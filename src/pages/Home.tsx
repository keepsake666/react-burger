import styles from "../components/app/App.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BurgerIngredients } from "../components/BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../components/BurgerConstructor/BurgerConstructor";
import React, { FC } from "react";

interface IHome {
  setModalIngredient: (bool: boolean) => void;
  setModalOrder: (bool: boolean) => void;
}

export const Home: FC<IHome> = ({ setModalIngredient, setModalOrder }) => {
  return (
    <main className={styles.main}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients setModalAtive={setModalIngredient} />
        <BurgerConstructor setModalAtive={setModalOrder} />
      </DndProvider>
    </main>
  );
};
