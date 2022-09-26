import styles from "../components/app/App.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {BurgerIngredients} from "../components/BurgerIngredients/BurgerIngredients";
import {BurgerConstructor} from "../components/BurgerConstructor/BurgerConstructor";
import React from "react";
import PropTypes from "prop-types";

export default function Home({ setModalIngredient, setModalOrder }) {
  return (
    <main className={styles.main}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients setModalAtive={setModalIngredient} />
        <BurgerConstructor setModalAtive={setModalOrder} />
      </DndProvider>
    </main>
  );
}

Home.propTypes = {
  setModalIngredient: PropTypes.func.isRequired,
  setModalOrder: PropTypes.func.isRequired,
};
