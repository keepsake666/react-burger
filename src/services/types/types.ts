export type TLocation<T extends string> = {
[T:string]: {
    pathname: string;
    search: string;
    hash: string;
    state: null;
    key: string;
  } & {
  state?: object;
}
};

export interface IOwner {
  createdAt: Date;
  email: string;
  name: string;
  updatedAt: Date;
}

export interface IIngredients {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
}

export interface IOrder {
  createdAt: Date;
  ingredients: IIngredients[];
  name: string;
  number: number;
  owner: IOwner;
  price: number;
  status: string;
  updatedAt: Date;
  _id: string;
}

export interface IOrderBurger {
  name: string;
  order: IOrder;
  success: boolean;
}

export interface IGetIngredients {
  success: boolean;
  data: IIngredients[];
}

export interface IUser {
  email: string;
  name: string;
}

export interface IRegistration {
  success: boolean;
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface IGetProfile {
  success: boolean;
  user: IUser;
}

export interface IGetNewToken {
  success: boolean;
  accessToken: string;
  refreshToken: string;
}

export interface IOkRes {
  success: boolean;
  message: string;
}

export interface IConstructorBurger {
  ingredientItem: IIngredients[];
  id: string;
}

export interface IWebSocket {
  wsInit: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onOrders: string;
  wsSendOrders: string;
}

export interface IGetOrdersWebSokect {
  createdAt: Date;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: Date;
  _id: string;
}
export interface IFeed {
  success: boolean;
  total: number;
  totalToday: number;
  orders: IGetOrdersWebSokect[];
}

export interface IDrag {
  id: string;
  index: number;
  indexItem: number;
}

export interface IItemIngredient {
  0: IIngredients;
  id: string;
}
