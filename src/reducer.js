import {
  combineReducers
} from 'redux';

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from '../action/index';


let initialState = {
  igredients: [],
  igredientsRequest: false,
  igredientsFailed: false,
  ingredientsConstructor: [],
  ingredientItem: {},
  order: {},
};

const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        igredientsFailed: false,
        igredientsRequest: true
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        igredients: action.igredients,
        igredientsRequest: false,
        igredientsFailed: false,
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