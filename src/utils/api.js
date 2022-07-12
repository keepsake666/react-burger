 const checkResponse = res => {
   if (res.ok) {
     return res.json()
   } else {
     return Promise.reject(`Ошибка: ${res.status}`)
   }
 }
 const config = {
   baseUrl: 'https://norma.nomoreparties.space/api',
   headers: {
     'Content-Type': 'application/json',
   },
 };

 export function apiOrder(ingredients) {
   return fetch(config.baseUrl + '/orders', {
       method: 'POST',
       headers: config.headers,
       body: JSON.stringify({
         ingredients
       })
     })
     .then(checkResponse)
 }

 export function apiData() {
   return fetch(config.baseUrl + '/ingredients', {
       headers: config.headers
     })
     .then(checkResponse)
 }