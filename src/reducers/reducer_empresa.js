// eslint-disable-next-line
import { FETCH_EMPRESA } from "../actions/empresas";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EMPRESA:
      return [action.payload.data];
  }
  return state;
}
