import styles from "./Profile.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory, NavLink } from "react-router-dom";
import { useState, useRef } from "react";

export default function Profile() {
  const [valueEmail, setValueEmail] = useState("");
  const onChangeMail = (e) => {
    setValueEmail(e.target.value);
  };
  const [valuePassword, setValuePassword] = useState("");
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
  };
  const [valueName, setValueName] = useState("");
  const onChangeName = (e) => {
    setValueName(e.target.value);
  };

  return (
    <main className={styles.main__page}>
      <div className={styles.navigate}>
        <NavLink
          to="/profile"
          activeClassName={styles.link__active}
          className={`text text_type_main-medium ${styles.link}`}
        >
          Профиль
        </NavLink>
        <NavLink
          to="/"
          className={`text text_type_main-medium ${styles.link}`}
        >
          История заказов
        </NavLink>
        <NavLink
          to="/"
          className={`text text_type_main-medium ${styles.link}`}
        >
          Выход
        </NavLink>
        <p className={`text text_type_main-default ${styles.text}`}>
          В этом разделе вы можете изменить свои персональные данные{" "}
        </p>
      </div>
      <div className={styles.container}>
        <form className={styles.form} action="">
          <div className={`mb-6`}>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={onChangeName}
              icon={"EditIcon"}
              value={valueName}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className={"mb-6"}>
            <Input
              type={"email"}
              placeholder={"Логин"}
              onChange={onChangeMail}
              icon={"EditIcon"}
              value={valueEmail}
              name={"email"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className={"mb-6"}>
            {" "}
            <Input
              type={"password"}
              placeholder={"Пароль"}
              onChange={onChangePassword}
              icon={"EditIcon"}
              value={valuePassword}
              name={"password"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
        </form>
      </div>
    </main>
  );
}
