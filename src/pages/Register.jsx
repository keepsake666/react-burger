import styles from "./Register.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect, useHistory} from "react-router-dom";
import { useState } from "react";
import { registration } from "../services/action/authorization";
import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((store) => store.authorizationReducer);
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
  const history = useHistory();
  const onRegistration = (e) => {
    e.preventDefault();
    dispatch(registration(valueEmail, valuePassword, valueName));
  };

  if (isAuthenticated) {
    return (
        <Redirect to='/' />
    )
  }

  return (
    <main className={styles.main__page}>
      <div className={styles.container}>
        <h2 className={`text text_type_main-medium mb-6 ${styles.title}`}>
          Регистрация
        </h2>
        <form className={styles.form} action="">
          <div className={"mb-6"}>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={onChangeName}
              value={valueName}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className={"mb-6"}>
            <EmailInput
              onChange={onChangeMail}
              value={valueEmail}
              name={"E-mail"}
            />
          </div>
          <div className={"mb-6"}>
            {" "}
            <PasswordInput
              onChange={onChangePassword}
              value={valuePassword}
              name={"Пароль"}
            />
          </div>
          <Button onClick={onRegistration} type="primary" size="medium">
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
}
