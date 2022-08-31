import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer } from "./reducer";
import { socketMiddleware } from "./middleware/socketMiddleware";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_SEND_ORDERS,
} from "./action/socketAction";
import thunk from "redux-thunk";

const wsUrl = "wss://norma.nomoreparties.space/orders/all";

const wsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onOrders: WS_GET_ORDERS,
  wsSendOrders: WS_SEND_ORDERS,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions))
);
export const store = createStore(rootReducer, enhancer);
