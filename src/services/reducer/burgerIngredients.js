import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../action/burgerIngredients";

const initialState = {
  burgerIgredients: [],
  igredientsRequest: false,
  igredientsFailed: false,
};

export const BurgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        igredientsFailed: false,
        igredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        igredientsRequest: false,
        igredientsFailed: false,
        burgerIgredients: action.ingredients,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        igredientsRequest: false,
        igredientsFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
