import httpClient from '../HttpClient';

export default {
  // Запрос получения списка валют
  getCurrencies: () => {
    return httpClient.get(`daily_json.js`);
  },
};
