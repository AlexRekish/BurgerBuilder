import http from './httpService';

const orderUrl = '/orders.json';
const ingredientsUrl = '/ingredients.json';

export const getIngredients = () => http.get(ingredientsUrl);

export const saveOrder = order => http.post(orderUrl, order);

export const getOrder = id => http.get(`${orderUrl}/${id}`);
