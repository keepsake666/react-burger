export const ADD_ITNGREDIENTS = 'ADD_ITNGREDIENTS';
export const ADD_BUN = 'ADD_BUN';
export const DELETE_INGREDIEN = 'DELETE_INGREDIEN';
export const DROP_INGREDIENTS = 'DROP_INGREDIENTS';
export const RESET_ORDER = 'RESET_ORDER';

export function addIngredient(item, id) {
  return {
    type: ADD_ITNGREDIENTS,
    item: {
      ...item,
      uuid: id
    }
  }
}

export function addBun(item) {
  return {
    type: ADD_BUN,
    addBun: item
  }
}

export function dporIngredient(dragIndex, hoverIndex) {
  return {
    type: DROP_INGREDIENTS,
    dragIndex: dragIndex,
    hoverIndex: hoverIndex
  }
}