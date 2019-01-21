// eslint-disable-next-line
import { FETCH_COTACOES } from "../actions/cotacoes";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COTACOES:
      return [action.payload.data];
  }
  return state;
}
