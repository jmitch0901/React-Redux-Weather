import axios from 'axios';

const API_KEY = 'c119dd9ad408c1bd020b119cd9f50180';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const QUERY_URL = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(QUERY_URL);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
