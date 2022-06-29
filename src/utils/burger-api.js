export const checkResponse = res => {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
}
export const config = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json',
  },
};