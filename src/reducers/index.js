import { combineReducers } from "redux";
import ReducerCotacoes from "./reducer_cotacoes";
import ReducerEmpresa from "./reducer_empresa";
import ReducerGraficoCotacao from './reducer_grafico'

const rootReducer = combineReducers({
  cotacao: ReducerCotacoes,
  empresa: ReducerEmpresa,
  grafico: ReducerGraficoCotacao,
});

export default rootReducer;