import {
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import styles from "./Login.module.css";
import { Link, Redirect, useLocation } from "react-router-dom";
import { logIn } from "../services/action/authorization";
import { useDispatch, useSelector } from "../services/hooks";

export const Login: FC = () => {
  const dispatch = useDispatch();
  const location: any = useLocation();
  const { state } = location;
  const { isAuthenticated } = useSelector(
    (state) => state.authorizationReducer
  );
  const [form, setForm] = useState<{mail:string, password:string}>({
    mail: "",
    password: "",
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const LogIn = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(logIn(form.mail, form.password));
  };

  if (isAuthenticated) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <main className={styles.main__page}>
      <div className={styles.container}>
        <h2 className={`text text_type_main-medium mb-6 ${styles.title}`}>
          Вход
        </h2>
        <form onSubmit={LogIn} className={styles.form} action="">
          <div className={"mb-6"}>
            <Input
              value={form.mail}
              onChange={onChange}
              name={"mail"}
              placeholder={"E-mail"}
              type={"email"}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className={"mb-6"}>
            {" "}
            <PasswordInput
              onChange={onChange}
              value={form.password}
              name={"password"}
            />
          </div>
          <Button type="primary" size="medium">
            Войти
          </Button>
        </form>
        <p className={"text text_type_main-default mt-20 mb-4"}>
          Вы - новый пользователь?
          <Link to="/register" className={styles.span}>
            Зарегистрироваться
          </Link>
        </p>
        <p className={"text text_type_main-default"}>
          Забыли пароль?
          <Link to="/forgot-password" className={styles.span}>
            Восстановить пароль
          </Link>
        </p>
      </div>
    </main>
  );
};
