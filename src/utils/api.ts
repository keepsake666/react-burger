import {
  IGetIngredients,
  IGetNewToken,
  IGetProfile,
  IOkRes,
  IOrderBurger,
  IRegistration,
} from "../services/types/types";

const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};
const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
  headers: {
    "Content-Type": "application/json",
  },
};

export function apiOrder(token: string, ...ingredients: string[]) {
  return fetch(config.baseUrl + "/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json", authorization: token },
    body: JSON.stringify({
      ingredients,
    }),
  }).then((res) => checkResponse<IOrderBurger>(res));
}

export function apiData() {
  return fetch(config.baseUrl + "/ingredients", {
    headers: config.headers,
  }).then((res) => checkResponse<IGetIngredients>(res));
}

export function setRegistration(email: string, password: string, name: string) {
  return fetch(config.baseUrl + "/auth/register", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  }).then((res) => checkResponse<IRegistration>(res));
}

export function setLogIn(email: string, password: string) {
  return fetch(config.baseUrl + "/auth/login", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => checkResponse<IRegistration>(res));
}

export function getProfile(token: any) {
  return fetch(config.baseUrl + "/auth/user", {
    headers: { "Content-Type": "application/json", authorization: token },
  }).then((res) => checkResponse<IGetProfile>(res));
}

export function patchNewProfile(
  token: string,
  email: string,
  password: string,
  name: string
) {
  return fetch(config.baseUrl + "/auth/user", {
    method: "PATCH",
    headers: { "Content-Type": "application/json", authorization: token },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  }).then((res) => checkResponse<IGetProfile>(res));
}

export function getNewToken(token: any) {
  return fetch(config.baseUrl + "/auth/token", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      token: token,
    }),
  }).then((res) => checkResponse<IGetNewToken>(res));
}

export function logOut(token: string) {
  return fetch(config.baseUrl + "/auth/logout", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      token: token,
    }),
  }).then((res) => checkResponse<IOkRes>(res));
}

export function recoverPassword(mail: string) {
  return fetch(config.baseUrl + "/password-reset", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      mail,
    }),
  }).then((res) => checkResponse<IOkRes>(res));
}

export function postNewPassword(password: string, token: string) {
  return fetch(config.baseUrl + "/password-reset/reset", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      password,
      token,
    }),
  }).then((res) => checkResponse<IOkRes>(res));
}

export function setCookie(name: string, value: string, props?: any) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(name: string) {
  // Находим куку по ключу token, удаляем её значение,
  // устанавливаем отрицательное время жизни, чтобы удалить сам ключ token
  setCookie(name, "", { expires: -1 });
}
