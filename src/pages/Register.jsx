import styles from "./Register.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { useState, useRef } from "react";

export default function Register() {
  const [valueEmail, setValueEmail] = useState("");
  const onChangeMail = (e) => {
      setValueEmail(e.target.value);
  };
  const [valuePassword, setValuePassword] = useState("");
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
  };
  const [valueName, setValueName] = useState("");
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
  const history = useHistory();
  const onClick = () => {
    history.replace({ pathname: "/" });
  };
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
              onChange={(e) => setValueName(e.target.value)}
              value={valueName}
              name={"name"}
              error={false}
              ref={inputRef}
              onIconClick={onIconClick}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
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
          <Button onClick={onClick} type="primary" size="medium">
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
