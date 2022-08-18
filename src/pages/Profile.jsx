import styles from "./Profile.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useHistory } from "react-router-dom";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../utils/api";
import { actionLogOut, getNewProfile } from "../services/action/authorization";
export default function Profile() {
  const { user } = useSelector((store) => store.authorizationReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = getCookie("token");

  const [valueEmail, setValueEmail] = useState(`${user.email}`);
  const onChangeMail = (e) => {
    setValueEmail(e.target.value);
  };
  const [valuePassword, setValuePassword] = useState("");
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
  };
  const [valueName, setValueName] = useState(`${user.name}`);
  const onChangeName = (e) => {
    setValueName(e.target.value);
  };

  const handlerLogOut = (e) => {
    e.preventDefault();
    dispatch(actionLogOut(refreshToken));
    history.replace({
      pathname: "/login",
    });
  };
  const cancelChange = useCallback(
    (e) => {
      e.preventDefault();
      setValueEmail(`${user.email}`);
      setValueName(`${user.name}`);
      setValuePassword("");
    },
    [user.email, user.name]
  );

  const postNewProfile = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        getNewProfile(accessToken, valueEmail, valuePassword, valueName)
      );
    },
    [accessToken, dispatch, valueEmail, valueName, valuePassword]
  );

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
        <NavLink to="/" className={`text text_type_main-medium ${styles.link}`}>
          История заказов
        </NavLink>
        <a
          className={`text text_type_main-medium ${styles.link}`}
          onClick={handlerLogOut}
        >
          Выход
        </a>
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
          <div className={styles.button_container}>
            <Button onClick={postNewProfile} type="primary" size="medium">
              Сохранить
            </Button>
            <button
              type={"button"}
              className={`text text_type_main-default ${styles.button}`}
              onClick={cancelChange}
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
