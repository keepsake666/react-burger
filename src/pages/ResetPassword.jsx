import styles from "./ResetPassword.module.css";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect, useHistory} from "react-router-dom";
import { useRef, useState } from "react";
import {postNewPassword} from "../utils/api";
import {useSelector} from "react-redux";

export default function ResetPassword() {
  const history = useHistory();
  const { isAuthenticated } = useSelector((store) => store.authorizationReducer);
  const newPassword = (e) => {
    e.preventDefault()
    postNewPassword(valuePassword, code)
      .then((res) => {
        if (res.success) {
          history.replace({ pathname: "/" });
        }
      })
      .catch((err) => console.log(err));
  };
  const [valuePassword, setValuePassword] = useState("");
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
  };
  const [code, setCode] = useState("");
  const changeCode = (e) => {
    setCode(e.target.value)
  }
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  console.log(Redirect)
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
            />
          </div>
          <div className={"mb-6"}>
            <Input
              type={"text"}
              placeholder={"Введите код из письма"}
              onChange={changeCode}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              value={code}
            />
          </div>
          <Button onClick={newPassword} type="primary" size="medium">
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
