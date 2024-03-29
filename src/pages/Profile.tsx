import styles from "./Profile.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import React, {
  ChangeEvent,
  FC,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { getCookie } from "../utils/api";
import {
  actionLogOut,
  getNewProfile,
  getUser,
} from "../services/action/authorization";
import { FeedItem } from "../components/FeedItem/FeedItem";
import {
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_CONNECTION_START,
} from "../services/action/socketAction";
import { FeedId } from "./FeedId";
import { useDispatch, useSelector } from "../services/hooks";

interface IProfile {
  setActive: (bool: boolean) => void;
}

export const Profile: FC<IProfile> = ({ setActive }) => {
  const { authOrders } = useSelector((store) => store.wsReducer);
  const { user } = useSelector((store) => store.authorizationReducer);
  const dispatch = useDispatch();
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = getCookie("token");
  const match = useRouteMatch({ path: "/profile/orders/:id" });
  const location = useLocation();

  useEffect(() => {
    dispatch(getUser(accessToken));
  }, [accessToken, dispatch]);

  const [form, setForm] = useState({
    mail: `${user.email}`,
    password: "",
    name: `${user.name}`,
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerLogOut = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(actionLogOut(refreshToken));
  };

  const cancelChange = useCallback(
    (e: SyntheticEvent) => {
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
    (e: SyntheticEvent) => {
      e.preventDefault();
      dispatch(getNewProfile(accessToken, form.mail, form.password, form.name));
    },
    [accessToken, dispatch, form.mail, form.name, form.password]
  );

  useEffect(() => {
    if (accessToken) {
      dispatch({ type: WS_AUTH_CONNECTION_START });
    }
    return () => {
      dispatch({ type: WS_AUTH_CONNECTION_CLOSED });
    };
  }, [accessToken, dispatch]);

  return (
    <>
      <main className={styles.main__page}>
        {!match && (
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
        )}
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
                  <Button htmlType='submit' type="primary" size="medium">
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
              {authOrders?.map((item, index) => (
                <Link
                  to={{
                    pathname: `/profile/orders/${item?._id}`,
                    state: { background: location },
                  }}
                  className={styles.link__feed}
                  key={index}
                  onClick={() => setActive(true)}
                >
                  <FeedItem
                    name={item?.name}
                    time={item?.createdAt}
                    number={item?.number}
                    ingredient={item?.ingredients}
                  />
                </Link>
              ))}
            </ul>
          </Route>
          <Route path="/profile/orders/:id" exact={true}>
            <FeedId modal={true} />
          </Route>
        </Switch>
      </main>
    </>
  );
};
