import { combineReducers } from "redux";
import { BurgerConstructorReducer } from "./burgerConstructor";
import { BurgerIngredientsReducer } from "./burgerIngredients";
import { OrderBurgerReducer } from "./orderBurger";
import { authorizationReducer } from "./authorization";
import { wsReducer } from "./socketReducer";

export const rootReducer = combineReducers({
  BurgerConstructorReducer,
  BurgerIngredientsReducer,
  OrderBurgerReducer,
  authorizationReducer,
  wsReducer,
});
