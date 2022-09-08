export const date = (date) => {
  return `${new Date(date).toLocaleString('ru', {
    weekday: "long",
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZoneName: "short"
  })}`;
};
