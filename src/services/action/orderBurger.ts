import { apiOrder } from "../../utils/api";
import { AppDispatch, AppThunk } from "../types";
export const GET_ORDER_REQUEST: "GET_ORDER_REQUEST" = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS" = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED: "GET_ORDER_FAILED" = "GET_ORDER_FAILED";
export const GET_ORDER_RESET: "GET_ORDER_RESET" = "GET_ORDER_RESET";

type TGetOrderRequest = {
  readonly type: typeof GET_ORDER_REQUEST;
};
type TGetOrderSuccess = {
  readonly type: typeof GET_ORDER_SUCCESS;
  payload: number;
};
type TGetOrderFailed = {
  readonly type: typeof GET_ORDER_FAILED;
};
type TGetOrderReset = {
  readonly type: typeof GET_ORDER_RESET;
};

export type TOrderBurger =
  | TGetOrderRequest
  | TGetOrderSuccess
  | TGetOrderFailed
  | TGetOrderReset;

export const getOrder: AppThunk = (
  accessToken: string,
  ...ingredients: string[]
) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    apiOrder(accessToken, ...ingredients)
      .then((res) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: res.order.number,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
          payload: err,
        });
      });
  };
};
