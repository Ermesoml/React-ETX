import { combineReducers } from "redux";
import ReducerCotacoes from "./reducer_cotacoes";
import ReducerEmpresa from "./reducer_empresa";
import ReducerGraficoCotacao from './reducer_grafico'
import ReducerNoticia from './reducer_noticia'


const rootReducer = combineReducers({
  cotacao: ReducerCotacoes,
  empresa: ReducerEmpresa,
  grafico: ReducerGraficoCotacao,
  noticia: ReducerNoticia,
});

export default rootReducer;