import {
  apiOrder
} from '../../utils/api'
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const GET_ORDER_RESET = 'GET_ORDER_RESET';

export function getOrder(ingredients) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST
    })
    apiOrder(ingredients)
      .then((res) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: res.order.number
        })
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
          payload: err
        })
      })
  }
}