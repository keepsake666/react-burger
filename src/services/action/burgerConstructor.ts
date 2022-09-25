export const ADD_ITNGREDIENTS: "ADD_ITNGREDIENTS" = "ADD_ITNGREDIENTS";
export const ADD_BUN: "ADD_BUN" = "ADD_BUN";
export const DELETE_INGREDIEN: "DELETE_INGREDIEN" = "DELETE_INGREDIEN";
export const DROP_INGREDIENTS: "DROP_INGREDIENTS" = "DROP_INGREDIENTS";
export const RESET_ORDER: "RESET_ORDER" = "RESET_ORDER";

interface IAddIngredient {
  readonly type: typeof ADD_ITNGREDIENTS;
  item: {
    item: any;
    uuid: string;
  };
}

interface IAddBun {
  readonly type: typeof ADD_BUN;
  addBun: any;
}

interface IDporIngredient {
  readonly type: typeof DROP_INGREDIENTS;
  dragIndex: number;
  hoverIndex: number;
}
interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIEN;
  deleteItem: any;
}

interface IResetOrder {
  readonly type: typeof RESET_ORDER;
}

export function addIngredient(item: any, id: string): IAddIngredient {
  return {
    type: ADD_ITNGREDIENTS,
    item: {
      ...item,
      uuid: id,
    },
  };
}

export function addBun(item: any): IAddBun {
  return {
    type: ADD_BUN,
    addBun: item,
  };
}

export const dporIngredient = (
  dragIndex: number,
  hoverIndex: number
): IDporIngredient => ({
  type: DROP_INGREDIENTS,
  dragIndex: dragIndex,
  hoverIndex: hoverIndex,
});

export type TBurgerConstructor =
  | IAddIngredient
  | IAddBun
  | IDporIngredient
  | IDeleteIngredient
  | IResetOrder;
