// eslint-disable-next-line
import { FETCH_GRAFICO } from "../actions/graficos";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_GRAFICO:
      return action.payload.data;
  }
  return state;
}
