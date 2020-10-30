import {combineReducers} from "redux";
import pokemonReducer from "./pokemonReducer";
import authReducer from "./authReducer";

const RootReducer = combineReducers({
  pokemon: pokemonReducer,
  auth: authReducer,
});

export default RootReducer