import styles from "./ForgotPassword.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import { recoverPassword } from "../utils/api";
import { useSelector } from "react-redux";

export default function ForgotPassword() {
  const [valueEmail, setValueEmail] = useState("");
  const { isAuthenticated } = useSelector(
    (store) => store.authorizationReducer
  );
  const onChangeMail = (e) => {
    setValueEmail(e.target.value);
  };
  const history = useHistory();
  const recover = (e) => {
    e.preventDefault();
    recoverPassword(valueEmail)
      .then((res) => {
        if (res.success) {
          history.replace({ pathname: "/reset-password" });
        }
      })
      .catch((err) => console.log(err));
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <main className={styles.main__page}>
      <div className={styles.container}>
        <form onSubmit={recover} className={styles.form} action="">
          <div className={"mb-6"}>
            <Input
              value={valueEmail}
              onChange={onChangeMail}
              name={"email"}
              placeholder={"Укажите e-mail"}
              type={"email"}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <Button type="primary" size="medium">
            Восстановить
          </Button>
        </form>
        <p className={"text text_type_main-default mt-20 mb-4"}>
          Вспомнили пароль?
          <Link to="/login" className={styles.span}>
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
}
