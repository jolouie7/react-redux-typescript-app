import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getPokemon } from './actions/pokemonActions';
import Login from './components/Login';
import NavbarComp from './components/Navbar';
import SignUp from './components/SignUp';
import { RootStore } from './store';


const App: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStore) => state.auth)
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value)
  };

  const handleClick = () => {
    dispatch(getPokemon(pokemonName))
  }
  // console.log("pokemon state: ", pokemonState)
  return (
    <Router>
      <NavbarComp /> <br />
      {authState.user && <div>Hello {authState.user.username}</div>} <br />
      <Switch>
        <Route exact path="/">
          <input type="text" onChange={handleChange} />
          <button onClick={handleClick}>Search</button>
          {pokemonState.pokemon && (
            <div>
              <img
                src={pokemonState.pokemon.sprites.front_default}
                alt="pokemon"
              />
              {pokemonState.pokemon.abilities.map((ability) => (
                <p>{ability.ability.name}</p>
              ))}
            </div>
          )}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
