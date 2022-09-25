import {
  ADD_ITNGREDIENTS,
  ADD_BUN,
  DELETE_INGREDIEN,
  DROP_INGREDIENTS,
  RESET_ORDER, TBurgerConstructor,
} from "../action/burgerConstructor";

type TInitialState = {
  ingredientsConstructor: any;
  bunConstructor: any;
};

const initialState:TInitialState = {
  ingredientsConstructor: [],
  bunConstructor: [],
};

export const BurgerConstructorReducer = (state = initialState, action: TBurgerConstructor):TInitialState => {
  switch (action.type) {
    case ADD_ITNGREDIENTS: {
      return {
        ...state,
        ingredientsConstructor: [...state.ingredientsConstructor, action.item],
      };
    }
    case DELETE_INGREDIEN: {
      const index = action.deleteItem;
      return {
        ...state,
        ingredientsConstructor: [
          ...state.ingredientsConstructor.slice(0, index),
          ...state.ingredientsConstructor.slice(index + 1),
        ],
      };
    }
    case DROP_INGREDIENTS: {
      const moveCard = [...state.ingredientsConstructor];
      moveCard.splice(
        action.dragIndex,
        0,
        moveCard.splice(action.hoverIndex, 1)[0]
      );
      return {
        ...state,
        ingredientsConstructor: moveCard,
      };
    }
    case ADD_BUN: {
      return {
        ...state,
        bunConstructor: action.addBun,
      };
    }
    case RESET_ORDER: {
      return {
        ...state,
        ingredientsConstructor: [],
        bunConstructor: [],
      };
    }
    default: {
      return state;
    }
  }
};
