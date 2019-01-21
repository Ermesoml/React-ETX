import axios from "axios";

export const FETCH_EMPRESA = "FETCH_EMPRESA";

export function fetchEmpresa(simbolo) {
  const url = `https://api.iextrading.com/1.0/stock/${simbolo}/company/`;
  const request = axios.get(url);

  return {
    type: FETCH_EMPRESA,
    payload: request
  };
}