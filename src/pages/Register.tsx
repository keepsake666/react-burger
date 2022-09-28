import styles from "./Register.module.css";
import {
  Button,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from "react-router-dom";
import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import { registration } from "../services/action/authorization";
import { useDispatch, useSelector } from "../services/hooks";

export const Register: FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(
    (store) => store.authorizationReducer
  );

  const [form, setForm] = useState({
    mail: "",
    password: "",
    name: "",
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onRegistration = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(registration(form.mail, form.password, form.name));
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <main className={styles.main__page}>
      <div className={styles.container}>
        <h2 className={`text text_type_main-medium mb-6 ${styles.title}`}>
          Регистрация
        </h2>
        <form onSubmit={onRegistration} className={styles.form} action="">
          <div className={"mb-6"}>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={onChange}
              value={form.name}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
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
          <Button htmlType='submit' type="primary" size="medium">
            Зарегистрироваться
          </Button>
        </form>
        <p className={"text text_type_main-default mt-20 mb-4"}>
          Уже зарегистрированы?
          <Link to="/login" className={styles.span}>
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
};
