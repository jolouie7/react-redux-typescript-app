import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from './actions/pokemonActions';
import { RootStore } from './store';

function App() {
  const dispatch = useDispatch()
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value)
  };

  const handleClick = () => {
    dispatch(getPokemon(pokemonName))
  }
  console.log("pokemon state: ", pokemonState)
  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt="pokemon"/>
          {pokemonState.pokemon.abilities.map(ability => (
            <p>{ability.ability.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
