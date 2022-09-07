import { getCookie } from "../../utils/api";

export const socketMiddleware = (wsUrl, wsActions, auth) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, onOpen, onClose, onError, onOrders, wsSendOrders } =
        wsActions;
      const accessToken = getCookie("token");
      if (type === wsInit && auth === false) {
        socket = new WebSocket(wsUrl);
      } else if (type === wsInit && auth === true && accessToken) {
        const accessToken = getCookie("token");
        socket = new WebSocket(
          `${wsUrl}?token=${accessToken.replace("Bearer ", "")}`
        );
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
