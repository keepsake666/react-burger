import {
  GET_INGREDIENTS_DETAILS
} from '../action/ingredientDetails'

const initialState = {
  getIngredientDetails: {}
};

export const IngredientdetailsReducer = (state = initialState, action) => {
  switch (action.type) {
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