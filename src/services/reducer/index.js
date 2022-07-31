import {
  combineReducers
} from 'redux';
import {
  BurgerConstructorReducer
} from './burgerConstructor';
import {
  BurgerIngredientsReducer
} from './burgerIngredients';
import {
  IngredientdetailsReducer
} from './ingredientDetails';
import {
  OrderBurgerReducer
} from './orderBurger';

export const rootReducer = combineReducers({
  BurgerConstructorReducer,
  BurgerIngredientsReducer,
  IngredientdetailsReducer,
  OrderBurgerReducer
})