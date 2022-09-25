export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" =
  "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" =
  "WS_CONNECTION_CLOSED";
export const WS_GET_ORDERS: "WS_GET_ORDERS" = "WS_GET_ORDERS";
export const WS_SEND_ORDERS: "WS_SEND_ORDERS" = "WS_SEND_ORDERS";

export const WS_AUTH_CONNECTION_START: "WS_AUTH_CONNECTION_START" =
  "WS_AUTH_CONNECTION_START";
export const WS_AUTH_CONNECTION_SUCCESS: "WS_AUTH_CONNECTION_SUCCESS" =
  "WS_AUTH_CONNECTION_SUCCESS";
export const WS_AUTH_CONNECTION_ERROR: "WS_AUTH_CONNECTION_ERROR" =
  "WS_AUTH_CONNECTION_ERROR";
export const WS_AUTH_CONNECTION_CLOSED: "WS_AUTH_CONNECTION_CLOSED" =
  "WS_AUTH_CONNECTION_CLOSED";
export const WS_AUTH_GET_ORDERS: "WS_AUTH_GET_ORDERS" = "WS_AUTH_GET_ORDERS";
export const WS_AUTH_SEND_ORDERS: "WS_AUTH_SEND_ORDERS" = "WS_AUTH_SEND_ORDERS";

type TWsConnectionStart = {
  readonly type: typeof WS_CONNECTION_START;
};
type TWsConnectionSuccess = {
  readonly type: typeof WS_CONNECTION_SUCCESS;
};
type TWsConnectionClose = {
  readonly type: typeof WS_CONNECTION_CLOSED;
};
type TWsConnectionError = {
  readonly type: typeof WS_CONNECTION_ERROR;
  payload: any;
};
type TWsGetOrders = {
  readonly type: typeof WS_GET_ORDERS;
  payload: any;
};
type TWsSendOrders = {
  readonly type: typeof WS_SEND_ORDERS;
};
type TWsAuthConnectionStart = {
  readonly type: typeof WS_AUTH_CONNECTION_START;
};
type TWsAuthConnectionSuccess = {
  readonly type: typeof WS_AUTH_CONNECTION_SUCCESS;
};
type TWsAuthConnectionError = {
  readonly type: typeof WS_AUTH_CONNECTION_ERROR;
  payload: any;
};
type TWsAuthConnectionClose = {
  readonly type: typeof WS_AUTH_CONNECTION_CLOSED;
};
type TWsAuthGetOrders = {
  readonly type: typeof WS_AUTH_GET_ORDERS;
  payload: any;
};
type TWsAuthSendOrders = {
  readonly type: typeof WS_AUTH_SEND_ORDERS;
};

export type TSocketActions =
  | TWsConnectionStart
  | TWsConnectionSuccess
  | TWsConnectionClose
  | TWsConnectionError
  | TWsGetOrders
  | TWsSendOrders
  | TWsAuthConnectionStart
  | TWsAuthConnectionSuccess
  | TWsAuthConnectionError
  | TWsAuthConnectionClose
  | TWsAuthGetOrders
  | TWsAuthSendOrders;
