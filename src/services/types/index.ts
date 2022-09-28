import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";

import { store } from "../store";
import { TBurgerConstructor } from "../action/burgerConstructor";
import { TBurgerIngredients } from "../action/burgerIngredients";
import { TOrderBurger } from "../action/orderBurger";
import { TSocketActions } from "../action/socketAction";
import { TAuthorization } from "../action/authorization";

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions =
  | TBurgerConstructor
  | TBurgerIngredients
  | TOrderBurger
  | TSocketActions
  | TAuthorization;

// Типизация thunk в нашем приложении
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch;
