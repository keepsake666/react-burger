export const GET_INGREDIENTS_DETAILS: "GET_INGREDIENTS_DETAILS" =
  "GET_INGREDIENTS_DETAILS";

interface IGetIngredientsDetails {
  readonly type: typeof GET_INGREDIENTS_DETAILS;
  details: any;
};

export type TIngredientDetails = IGetIngredientsDetails;
