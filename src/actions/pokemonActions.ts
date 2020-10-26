import {Dispatch} from "redux";
import { PokemonDispatchTypes, POKEMON_LOADING, POKEMON_FAIL, POKEMON_SUCCESS } from "./pokemonActionTypes";
import axios from "axios";

// PokemonDispatchTypes generic is important because it tells us what are the possible actions that will get dispatched
export const getPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
  try {
    dispatch({
      type: POKEMON_LOADING
    })

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    dispatch({
      type: POKEMON_SUCCESS,
      payload: res.data
    })

  } catch (error) {
    dispatch({
      type: POKEMON_FAIL
    })
  }
}