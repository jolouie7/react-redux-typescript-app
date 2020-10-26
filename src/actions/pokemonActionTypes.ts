// where dispatch types go
export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";

// usually use types for 3rd party APIs?
// API from https://pokeapi.co/
export type PokemonAbility = {
  ability: {
    name: string,
    url: string
  }
}

export type PokemonSprites = {
  front_default: string
}

export type PokemonStat = {
  base_stat: number,
  stat: {
    name: string
  }
}

export type PokemonType = {
    abilities: PokemonAbility[], // usually pokemon has 4 abilities
    sprites: PokemonSprites, // we are only showing the front view of the pokemon
    stats: PokemonStat[] // pokemon has more then 1 stat e.g. hp, def, etc
  }

export interface PokemonLoading {
  type: typeof POKEMON_LOADING
}

export interface PokemonFail {
  type: typeof POKEMON_FAIL
}

export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS,
  payload: PokemonType
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess