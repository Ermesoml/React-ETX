// eslint-disable-next-line
import { FETCH_NOTICIA } from "../actions/noticias";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_NOTICIA:
      return action.payload.data;
  }
  return state;
}
