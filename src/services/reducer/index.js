import {
  act
} from 'react-dom/test-utils';
import {
  combineReducers
} from 'redux';
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_DETAILS,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  ADD_ITNGREDIENTS
} from '../action/action'

const initialState = {
  burgerIgredients: [],
  igredientsRequest: false,
  igredientsFailed: false,
  orderRequest: false,
  orderFailed: false,
  ingredientsConstructor: [],
  getIngredientDetails: {},
  order: {},
  numberOrder: 0
};

const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITNGREDIENTS: {
      return {
        ...state,
        ingredientsConstructor: [...state.ingredientsConstructor, ...action.addIngredient]
      }
    }
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        igredientsFailed: false,
        igredientsRequest: true,
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        igredientsRequest: false,
        igredientsFailed: false,
        burgerIgredients: action.ingredients,
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        igredientsRequest: false,
        igredientsFailed: true,
      }
    }
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
    case GET_INGREDIENTS_DETAILS: {
      return {
        ...state,
        getIngredientDetails: action.details
      }
    }
    default: {
      return state
    }
  }
}

export const rootReducer = combineReducers({
  BurgerReducer
})