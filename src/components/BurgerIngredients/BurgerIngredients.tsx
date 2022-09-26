import React, { useState, useEffect, FC } from "react";
import {IngredientsCateg} from "../IngredientsCateg/IngredientsCateg";
import styles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useInView } from "react-intersection-observer";

interface IModal {
  setModalAtive: (bool: boolean) => void;
}

export const BurgerIngredients: FC<IModal> = ({ setModalAtive }) => {
  const [current, setCurrent] = useState("bun");
  const { ref: refBun, inView: bunView } = useInView();
  const { ref: refMain, inView: mainView } = useInView();
  const { ref: refSauce, inView: sauceView } = useInView();

  const scrollIngredient = () => {
    switch (true) {
      case bunView:
        setCurrent("bun");
        break;
      case mainView:
        setCurrent("sauce");
        break;
      case sauceView:
        setCurrent("main");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    scrollIngredient();
  }, [scrollIngredient]);

  const onTabClick = (tab: string) => {
    setCurrent(tab);
    const element: HTMLElement | null = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <h2 className="text text_type_main-large mb-5 mt-10">Соберите бургер</h2>
      <div className={styles.tab__block}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={() => {
            onTabClick("bun");
          }}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={() => {
            onTabClick("sauce");
          }}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={() => {
            onTabClick("main");
          }}
        >
          Начинки
        </Tab>
      </div>
      <IngredientsCateg
        refBun={refBun}
        refMain={refMain}
        refSauce={refSauce}
        setModalAtive={setModalAtive}
      />
    </section>
  );
};
