import { setCookie, setRegistration } from "../../utils/api";
export const GET_REGISTRATION_REQUEST = "GET_REGISTRATION_REQUEST";
export const GET_REGISTRATION_SUCCESS = "GET_REGISTRATION_SUCCESS";
export const GET_REGISTRATION_FAILED = "GET_REGISTRATION_FAILED";

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
        }
      })

      .catch(() => {
        dispatch({
          type: GET_REGISTRATION_FAILED,
        });
      });
  };
}
