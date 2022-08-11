import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [value, setValue] = useState("");
  const onChangeMail = (e) => {
    setValue(e.target.value);
  };
  const [valuePassword, setValuePassword] = useState("");
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
  };
  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6 ${styles.title}`}>
        Вход
      </h2>
      <form className={styles.form} action="">
        <div className={"mb-6"}>
          <EmailInput onChange={onChangeMail} value={value} name={"E-mail"} />
        </div>
        <div className={"mb-6"}>
          {" "}
          <PasswordInput
            onChange={onChangePassword}
            value={valuePassword}
            name={"Пароль"}
          />
        </div>
        <Button type="primary" size="medium">
          Войти
        </Button>
      </form>
      <p className={"text text_type_main-default mt-20 mb-4"}>
        Вы - новый пользователь?
        <span className={styles.span}>Зарегистрироваться</span>
      </p>
      <p className={"text text_type_main-default"}>
        Забыли пароль?<span className={styles.span}>Восстановить пароль</span>
      </p>
    </div>
  );
}
