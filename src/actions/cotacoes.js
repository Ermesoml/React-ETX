import axios from "axios";

const BASE_URL = 'https://api.iextrading.com/1.0/stock/';

export const FETCH_COTACOES = "FETCH_COTACOES";

export function fetchCotacoes(simbolo) {
  const url = `${BASE_URL}${simbolo}/batch?types=quote&range=1m&last=5`;
  const request = axios.get(url);

  return {
    type: FETCH_COTACOES,
    payload: request
  };
}