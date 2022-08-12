import styles from "./Register.module.css";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

export default function ForgotPassword() {
  const [valueEmail, setValueEmail] = useState("");
  const onChangeMail = (e) => {
    setValueEmail(e.target.value);
  };
  const history = useHistory();
  const onClick = () => {
    history.replace({ pathname: "/" });
  };
  return (
    <main className={styles.main__page}>
      <div className={styles.container}>
        <h2 className={`text text_type_main-medium mb-6`}>
          Восстановление пароля
        </h2>
        <form className={styles.form} action="">
          <div className={"mb-6"}>
            <EmailInput
              onChange={onChangeMail}
              value={valueEmail}
              name={"E-mail"}
            />
          </div>
          <Button onClick={onClick} type="primary" size="medium">
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
