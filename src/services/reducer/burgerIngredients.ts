import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  TBurgerIngredients,
} from "../action/burgerIngredients";
import {IIngredients} from "../types/types";

type IInitialState = {
  burgerIgredients: IIngredients[];
  igredientsRequest: boolean;
  igredientsFailed: boolean;
};

const initialState: IInitialState = {
  burgerIgredients: [],
  igredientsRequest: false,
  igredientsFailed: false,
};

export const BurgerIngredientsReducer = (
  state = initialState,
  action: TBurgerIngredients
): IInitialState => {
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
