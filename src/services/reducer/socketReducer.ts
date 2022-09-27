import {
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_GET_ORDERS,
  TSocketActions,
} from "../action/socketAction";
import {IGetOrdersWebSokect} from "../types/types";

type IInitialState = {
  wsConnected: boolean;
  orders: IGetOrdersWebSokect[];
  error: undefined;
  total: number;
  totalToday: number;
  authWsConnected: boolean;
  authOrders: IGetOrdersWebSokect[];
  authError: undefined;
  authTotal: number;
  authTotalToday: number;
};
const initialState: IInitialState = {
  wsConnected: false,
  orders: [],
  error: undefined,
  total: 0,
  totalToday: 0,
  authWsConnected: false,
  authOrders: [],
  authError: undefined,
  authTotal: 0,
  authTotalToday: 0,
};

export const wsReducer = (state = initialState, action: TSocketActions): IInitialState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };
    case WS_GET_ORDERS:
      return {
        ...state,
        error: undefined,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    case WS_AUTH_CONNECTION_SUCCESS:
      return {
        ...state,
        authError: undefined,
        authWsConnected: true,
      };
    case WS_AUTH_CONNECTION_ERROR:
      return {
        ...state,
        authError: action.payload,
        authWsConnected: false,
      };
    case WS_AUTH_CONNECTION_CLOSED:
      return {
        ...state,
        authError: undefined,
        authWsConnected: false,
      };
    case WS_AUTH_GET_ORDERS:
      return {
        ...state,
        authError: undefined,
        authOrders: action.payload.orders,
        authTotal: action.payload.total,
        authTotalToday: action.payload.totalToday,
      };
    default:
      return state;
  }
};
