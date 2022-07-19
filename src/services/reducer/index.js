import {
  combineReducers
} from 'redux';
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from '../action/action'

const initialState = {
  igredients: [],
  igredientsRequest: false,
  igredientsFailed: false,
  ingredientsConstructor: [],
  ingredientItem: {},
  order: {},
  asd: "Hello"
};

const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        igredientsFailed: false,
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        igredients: action.data,
        asd: "выполнилось",
        igredientsRequest: true
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        igredientsRequest: false,
        igredientsFailed: true,
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