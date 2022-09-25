import {GET_INGREDIENTS_DETAILS, TIngredientDetails} from "../action/ingredientDetails";

type TInitialState = {
  getIngredientDetails: any,
}
const initialState:TInitialState = {
  getIngredientDetails: {},
};

export const IngredientdetailsReducer = (state = initialState, action: TIngredientDetails):TInitialState => {
  switch (action.type) {
    case GET_INGREDIENTS_DETAILS: {
      return {
        ...state,
        getIngredientDetails: action.details,
      };
    }
    default: {
      return state;
    }
  }
};
