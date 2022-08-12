import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./Login.module.css";
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
  const [valueEmail, setValueEmail] = useState("");
  const onChangeMail = (e) => {
    setValueEmail(e.target.value);
  };
  const [valuePassword, setValuePassword] = useState("");
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
  };

    const history = useHistory();
    const onClick = () => {
        history.replace({ pathname: '/' });
    }
  return (
      <main className={styles.main__page}>
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6 ${styles.title}`}>
        Вход
      </h2>
      <form className={styles.form} action="">
        <div className={"mb-6"}>
          <EmailInput onChange={onChangeMail} value={valueEmail} name={"E-mail"} />
        </div>
        <div className={"mb-6"}>
          {" "}
          <PasswordInput
            onChange={onChangePassword}
            value={valuePassword}
            name={"Пароль"}
          />
        </div>
        <Button onClick= {onClick} type="primary" size="medium">
          Войти
        </Button>
      </form>
      <p className={"text text_type_main-default mt-20 mb-4"}>
        Вы - новый пользователь?
        <Link to='/register' className={styles.span}>Зарегистрироваться</Link>
      </p>
      <p className={"text text_type_main-default"}>
        Забыли пароль?<Link to='/forgot-password ' className={styles.span}>Восстановить пароль</Link>
      </p>
    </div>
      </main>
  );
}
