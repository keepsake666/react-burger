import {
  getNewToken, getProfile,
  setCookie,
  setLogIn,
  setRegistration,
} from "../../utils/api";
export const GET_REGISTRATION_REQUEST = "GET_REGISTRATION_REQUEST";
export const GET_REGISTRATION_SUCCESS = "GET_REGISTRATION_SUCCESS";
export const GET_REGISTRATION_FAILED = "GET_REGISTRATION_FAILED";
export const GET_LOGIN_REQUEST = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED = "GET_LOGIN_FAILED";
export const GET_TOKEN_REQUEST = "GET_TOKEN_REQUEST";
export const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS";
export const GET_TOKEN_FAILED = "GET_TOKEN_FAILED";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export function registration(email, password, name) {
  return function (dispatch) {
    dispatch({
      type: GET_REGISTRATION_REQUEST,
    });
    setRegistration(email, password, name)
      .then((res) => {
        dispatch({
          type: GET_REGISTRATION_SUCCESS,
          payload: res,
        });
        if (res) {
          // Сохраняем токен в куку token
          setCookie("token", res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken)
        }
      })

      .catch(() => {
        dispatch({
          type: GET_REGISTRATION_FAILED,
        });
      });
  };
}

export function logIn(email, password) {
  return function (dispatch) {
    dispatch({
      type: GET_LOGIN_REQUEST,
    });
    setLogIn(email, password)
      .then((res) => {
        dispatch({
          type: GET_LOGIN_SUCCESS,
          payload: res,
        });
        if (res) {
          // Сохраняем токен в куку token
          setCookie("token", res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken)
        }
      })

      .catch(() => {
        dispatch({
          type: GET_LOGIN_FAILED,
        });
      });
  };
}
export function newToken(token) {
  return function (dispatch) {
    dispatch({
      type: GET_TOKEN_REQUEST,
    });
    getNewToken(token)
      .then((res) => {
        dispatch({
          type: GET_TOKEN_SUCCESS,
          payload: res,
        });
      })
      .catch(() => {
        dispatch({
          type: GET_TOKEN_FAILED,
        });
      });
  };
}

export function getUser (token) {
  return function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    getProfile(token)
        .then((res) => {
          dispatch({
            type: GET_USER_SUCCESS,
            payload: res,
          });
        })
        .catch(() => {
          dispatch({
            type: GET_USER_FAILED,
          });
        });
  };
}
