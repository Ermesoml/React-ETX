import axios from "axios";

export const FETCH_NOTICIA = "FETCH_NOTICIA";

export function fetchNoticia(simbolo) {
  const url = `https://api.iextrading.com/1.0/stock/${simbolo}/news/last/1`;
  const request = axios.get(url);

  return {
    type: FETCH_NOTICIA,
    payload: request
  };
}