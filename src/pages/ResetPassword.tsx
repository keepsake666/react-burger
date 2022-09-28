import styles from "./ResetPassword.module.css";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import { postNewPassword } from "../utils/api";
import { useSelector } from "../services/hooks";

export const ResetPassword: FC = () => {
  const history = useHistory();
  const { isAuthenticated } = useSelector(
    (state) => state.authorizationReducer
  );

  const [form, setForm] = useState<{ password: string; code: string }>({
    password: "",
    code: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const newPassword = (e: SyntheticEvent) => {
    e.preventDefault();
    postNewPassword(form.password, form.code)
      .then((res) => {
        if (res.success) {
          history.replace({ pathname: "/" });
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
        <h2 className={`text text_type_main-medium mb-6`}>
          Восстановление пароля
        </h2>
        <form onSubmit={newPassword} className={styles.form} action="">
          <div className={"mb-6"}>
            <PasswordInput
              onChange={onChange}
              value={form.password}
              name={"password"}
            />
          </div>
          <div className={"mb-6"}>
            <Input
              type={"text"}
              placeholder={"Введите код из письма"}
              onChange={onChange}
              name={"code"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              value={form.code}
            />
          </div>
          <Button htmlType='submit' type="primary" size="medium">
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
};
