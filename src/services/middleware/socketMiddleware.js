import {getCookie} from "../../utils/api";

export const socketMiddleware = (wsUrl, wsActions) => {
  const accessToken = getCookie("token");
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch, isAuthenticated } = store;
      const { type, payload } = action;
      const { wsInit, onOpen, onClose, onError, onOrders, wsSendOrders } =
        wsActions;

      if (type === wsInit ) {
        socket = new WebSocket(wsUrl);
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onOrders, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendOrders) {
          const order = payload;
          socket.send(JSON.stringify({ ...order, token: accessToken }));
        }
      }

      next(action);
    };
  };
};
