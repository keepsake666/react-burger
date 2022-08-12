import styles from "./ResetPassword.module.css";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { useRef, useState } from "react";

export default function ResetPassword() {
  const history = useHistory();
  const onClick = () => {
    history.replace({ pathname: "/" });
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
  return (
    <main className={styles.main__page}>
      <div className={styles.container}>
        <h2 className={`text text_type_main-medium mb-6`}>
          Восстановление пароля
        </h2>
        <form className={styles.form} action="">
          <div className={"mb-6"}>
            <PasswordInput
              onChange={onChangePassword}
              value={valuePassword}
              name={"password"}
              placeholder={"Введите код из письма"}
            />
          </div>
          <div className={"mb-6"}>
            <Input
              type={"text"}
              placeholder={"Введите код из письма"}
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
          <Button onClick={onClick} type="primary" size="medium">
            Сохранить
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
