import React, {FC} from "react";
import styles from "./AppHeader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink } from "react-router-dom";

export const AppHeader:FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.block}>
          <div className={`mb-4 mt-4 pb-4 pt-4 pr-5 ${styles.container}`}>
            <BurgerIcon type="secondary" />
            <NavLink
              to="/"
              exact
              activeClassName={styles.link__active}
              className={`text text_type_main-default block ml-2 ${styles.link}`}
            >
              Конструктор
            </NavLink>
          </div>
          <div
            className={`mb-4 mt-4 ml-2 pb-4 pt-4 pl-5 pr-5 ${styles.container}`}
          >
            <ListIcon type="secondary" />
            <NavLink
              to="/feed"
              exact
              activeClassName={styles.link__active}
              className={`text text_type_main-default block ml-2 ${styles.link}`}
            >
              Лента заказов
            </NavLink>
          </div>
        </div>
        <Link to="/">
          <div className={styles.logo}>
            <Logo />
          </div>
        </Link>
        <div className={`mb-4 mt-4 pb-4 pt-4 pl-5 ${styles.container}`}>
          <ProfileIcon type="secondary" />
          <NavLink
            to="/profile"
            activeClassName={styles.link__active}
            className={`text text_type_main-default ml-2 ${styles.link}`}
          >
            Личный кабинет
          </NavLink>
        </div>
      </div>
    </header>
  );
}