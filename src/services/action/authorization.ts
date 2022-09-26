import {
  deleteCookie,
  getCookie,
  getNewToken,
  getProfile,
  logOut,
  patchNewProfile,
  setCookie,
  setLogIn,
  setRegistration,
} from "../../utils/api";
import { AppDispatch, AppThunk } from "../types";
import { ADD_ITNGREDIENTS } from "./burgerConstructor";
export const GET_REGISTRATION_REQUEST: "GET_REGISTRATION_REQUEST" =
  "GET_REGISTRATION_REQUEST";
export const GET_REGISTRATION_SUCCESS: "GET_REGISTRATION_SUCCESS" =
  "GET_REGISTRATION_SUCCESS";
export const GET_REGISTRATION_FAILED: "GET_REGISTRATION_FAILED" =
  "GET_REGISTRATION_FAILED";
export const GET_LOGIN_REQUEST: "GET_LOGIN_REQUEST" = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS: "GET_LOGIN_SUCCESS" = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED: "GET_LOGIN_FAILED" = "GET_LOGIN_FAILED";
export const GET_TOKEN_REQUEST: "GET_TOKEN_REQUEST" = "GET_TOKEN_REQUEST";
export const GET_TOKEN_SUCCESS: "GET_TOKEN_SUCCESS" = "GET_TOKEN_SUCCESS";
export const GET_TOKEN_FAILED: "GET_TOKEN_FAILED" = "GET_TOKEN_FAILED";
export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST";
export const GET_USER_SUCCESS: "GET_USER_SUCCESS" = "GET_USER_SUCCESS";
export const GET_USER_FAILED: "GET_USER_FAILED" = "GET_USER_FAILED";
export const GET_LOGOUT_REQUEST: "GET_LOGOUT_REQUEST" = "GET_LOGOUT_REQUEST";
export const GET_LOGOUT_SUCCESS: "GET_LOGOUT_SUCCESS" = "GET_LOGOUT_SUCCESS";
export const GET_LOGOUT_FAILED: "GET_LOGOUT_FAILED" = "GET_LOGOUT_FAILED";
export const GET_CHANGEPROFILE_REQUEST: "GET_CHANGEPROFILE_REQUEST" =
  "GET_CHANGEPROFILE_REQUEST";
export const GET_CHANGEPROFILE_SUCCESS: "GET_CHANGEPROFILE_SUCCESS" =
  "GET_CHANGEPROFILE_SUCCESS";
export const GET_CHANGEPROFILE_FAILED: "GET_CHANGEPROFILE_FAILED" =
  "GET_CHANGEPROFILE_FAILED";

interface IGetRegistrationRequest {
  readonly type: typeof GET_REGISTRATION_REQUEST;
}
interface IGetRegistrationSuccess {
  readonly type: typeof GET_REGISTRATION_SUCCESS;
  payload: any;
}
interface IGetRegistrationFailed {
  readonly type: typeof GET_REGISTRATION_FAILED;
}
interface IGetLoginRequest {
  readonly type: typeof GET_LOGIN_REQUEST;
}
interface IGetLoginSuccess {
  readonly type: typeof GET_LOGIN_SUCCESS;
  payload: any;
}
interface IGetLoginFailed {
  readonly type: typeof GET_LOGIN_FAILED;
}
interface IGetTokenRequest {
  readonly type: typeof GET_TOKEN_REQUEST;
}
interface IGetTokenSuccess {
  readonly type: typeof GET_TOKEN_SUCCESS;
  payload: any;
}
interface IGetTokenFailed {
  readonly type: typeof GET_TOKEN_FAILED;
}
interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
}
interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  payload: any;
}
interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED;
  failed: any;
}
interface IGetLogoutRequest {
  readonly type: typeof GET_LOGOUT_REQUEST;
}
interface IGetLogoutSuccess {
  readonly type: typeof GET_LOGOUT_SUCCESS;
  payload: any;
}
interface IGetLogoutFailed {
  readonly type: typeof GET_LOGOUT_FAILED;
}
interface IGetChangeProfileRequest {
  readonly type: typeof GET_CHANGEPROFILE_REQUEST;
}
interface IGetChangeProfileSuccess {
  readonly type: typeof GET_CHANGEPROFILE_SUCCESS;
  payload: any;
}
interface IGetChangeProfileFailed {
  readonly type: typeof GET_CHANGEPROFILE_FAILED;
  failed: any;
}

export type TAuthorization =
  | IGetRegistrationRequest
  | IGetRegistrationSuccess
  | IGetRegistrationFailed
  | IGetLoginRequest
  | IGetLoginSuccess
  | IGetLoginFailed
  | IGetTokenRequest
  | IGetTokenSuccess
  | IGetTokenFailed
  | IGetUserRequest
  | IGetUserSuccess
  | IGetUserFailed
  | IGetLogoutRequest
  | IGetLogoutSuccess
  | IGetLogoutFailed
  | IGetChangeProfileRequest
  | IGetChangeProfileSuccess
  | IGetChangeProfileFailed;

export const registration: AppThunk = (
  email: string,
  password: string,
  name: string
) => {
  return function (dispatch: AppDispatch) {
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
          localStorage.setItem("refreshToken", res.refreshToken);
        }
      })

      .catch(() => {
        dispatch({
          type: GET_REGISTRATION_FAILED,
        });
      });
  };
};

export const logIn: AppThunk = (email: string, password: string) => {
  return function (dispatch: AppDispatch) {
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
          localStorage.setItem("refreshToken", res.refreshToken);
        }
      })

      .catch(() => {
        dispatch({
          type: GET_LOGIN_FAILED,
        });
      });
  };
};
export const newToken: AppThunk = (token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_TOKEN_REQUEST,
    });
    getNewToken(token)
      .then((res) => {
        dispatch({
          type: GET_TOKEN_SUCCESS,
          payload: res,
        });
        if (res) {
          // Сохраняем токен в куку token
          setCookie("token", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
        }
      })
      .catch(() => {
        dispatch({
          type: GET_TOKEN_FAILED,
        });
      });
  };
};

export const actionLogOut: AppThunk = (token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_LOGOUT_REQUEST,
    });
    logOut(token)
      .then((res) => {
        dispatch({
          type: GET_LOGOUT_SUCCESS,
          payload: res,
        });
        deleteCookie("token");
        localStorage.removeItem("refreshToken");
      })
      .catch(() => {
        dispatch({
          type: GET_LOGOUT_FAILED,
        });
      });
  };
};

export const getUser: AppThunk = (token: string) => {
  return function (dispatch: AppDispatch) {
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
      .catch((err) => {
        if (err === "Ошибка: 403") {
          const refreshToken = localStorage.getItem("refreshToken");
          return getNewToken(refreshToken).then((res) => {
            setCookie("token", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);
            const accessToken = getCookie("token");
            return getProfile(accessToken).then((res) => {
              dispatch({
                type: GET_USER_SUCCESS,
                payload: res,
              });
            });
          });
        } else {
          deleteCookie("token");
          localStorage.removeItem("refreshToken");
        }
        dispatch({
          type: GET_USER_FAILED,
          failed: err,
        });
      });
  };
};

export const getNewProfile: AppThunk = (
  token: string,
  email: string,
  password: string,
  name: string
) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_CHANGEPROFILE_REQUEST,
    });
    patchNewProfile(token, email, password, name)
      .then((res) => {
        dispatch({
          type: GET_CHANGEPROFILE_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        if (err === "Ошибка: 403") {
          return getNewToken(localStorage.getItem("refreshToken")).then(
            (res) => {
              setCookie("token", res.accessToken);
              localStorage.setItem("refreshToken", res.refreshToken);
              return getProfile(getCookie("token")).then((res) => {
                dispatch({
                  type: GET_USER_SUCCESS,
                  payload: res,
                });
              });
            }
          );
        } else {
          deleteCookie("token");
          localStorage.removeItem("refreshToken");
        }
        dispatch({
          type: GET_CHANGEPROFILE_FAILED,
          failed: err,
        });
      });
  };
};
