const checkResponse = (res) => {
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

export function apiOrder(ingredients) {
  return fetch(config.baseUrl + "/orders", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      ingredients,
    }),
  }).then(checkResponse);
}

export function apiData() {
  return fetch(config.baseUrl + "/ingredients", {
    headers: config.headers,
  }).then(checkResponse);
}

export function setRegistration(email, password, name) {
  return fetch(config.baseUrl + "/auth/register", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  }).then(checkResponse);
}

export function setLogIn (email, password) {
  return fetch(config.baseUrl + "/auth/login", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(checkResponse);
}

export function getProfile(token) {
  return fetch(config.baseUrl + "/auth/user", {
    headers: { 'Content-Type': 'application/json',
    authorization: token}
  }).then(checkResponse);
}


export function setCookie(name, value, props) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function getCookie(name) {
  const matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}