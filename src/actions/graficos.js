import axios from "axios";

export const FETCH_GRAFICO = "FETCH_GRAFICO";

export function fetchGrafico(simbolo) {
  const url = `https://api.iextrading.com/1.0/stock/${simbolo}/chart/1m`;
  const request = axios.get(url);

  return {
    type: FETCH_GRAFICO,
    payload: request
  };
}