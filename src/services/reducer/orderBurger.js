import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  GET_ORDER_RESET
} from '../action/orderBurger'

const initialState = {
  orderRequest: false,
  orderFailed: false,
  numberOrder: 0
};

export const OrderBurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      }
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        numberOrder: action.payload,
      }
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      }
    }
    case GET_ORDER_RESET: {
      return {
        ...state,
        numberOrder: 0
      }
    }
    default: {
      return state
    }
  }
}