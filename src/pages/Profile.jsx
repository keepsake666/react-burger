import styles from "./Profile.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, NavLink, Route, Switch} from "react-router-dom";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../utils/api";
import { actionLogOut, getNewProfile } from "../services/action/authorization";
import FeedItem from "../components/FeedItem/FeedItem";
// @ts-ignore
export default function Profile() {

  const { user } = useSelector((store) => store.authorizationReducer);
  const dispatch = useDispatch();
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = getCookie("token");

  const [form, setForm] = useState({
    mail: `${user.email}`,
    password: "",
    name: `${user.name}`,
  });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerLogOut = (e) => {
    e.preventDefault();
    dispatch(actionLogOut(refreshToken));
  };

  const cancelChange = useCallback(
    (e) => {
      e.preventDefault();
      setForm({
        mail: `${user.email}`,
        password: "",
        name: `${user.name}`,
      });
    },
    [user.email, user.name]
  );

  const postNewProfile = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(getNewProfile(accessToken, form.mail, form.password, form.name));
    },
    [accessToken, dispatch, form.mail, form.name, form.password]
  );

  return (
    <main className={styles.main__page}>
      <div className={styles.navigate}>
        <NavLink
          to="/profile"
          activeClassName={styles.link__active}
          className={`text text_type_main-medium ${styles.link}`}
          exact
        >
          Профиль
        </NavLink>
        <NavLink
          to="/profile/orders"
          activeClassName={styles.link__active}
          className={`text text_type_main-medium ${styles.link}`}
          exact
        >
          История заказов
        </NavLink>
        <button
          className={`text text_type_main-medium ${styles.link}`}
          onClick={handlerLogOut}
        >
          Выход
        </button>
        <p className={`text text_type_main-default ${styles.text}`}>
          В этом разделе вы можете изменить свои персональные данные{" "}
        </p>
      </div>
      <Switch>
        <Route path="/profile" exact={true}>
          <div className={styles.container}>
            <form onSubmit={postNewProfile} className={styles.form} action="">
              <div className={`mb-6`}>
                <Input
                  type={"text"}
                  placeholder={"Имя"}
                  onChange={onChange}
                  icon={"EditIcon"}
                  value={form.name}
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
                  onChange={onChange}
                  icon={"EditIcon"}
                  value={form.mail}
                  name={"mail"}
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
                  onChange={onChange}
                  icon={"EditIcon"}
                  value={form.password}
                  name={"password"}
                  error={false}
                  errorText={"Ошибка"}
                  size={"default"}
                />
              </div>
              <div className={styles.button_container}>
                <Button type="primary" size="medium">
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
        </Route>
        <Route path="/profile/orders" exact={true}>
          <ul className={styles.list}>
            <Link to='/feed/55' className={styles.link__feed}>
              <FeedItem />
            </Link>
          </ul>
        </Route>
      </Switch>
    </main>
  );
}
