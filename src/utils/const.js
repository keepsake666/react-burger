export const date = (date) => {
  return `${new Date(date)}`.replace(", стандартное время", "");
};
