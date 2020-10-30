import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {logout} from "../actions/authActions";

const NavbarComp = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* Create Mavbar with login and signup. Also need react router */}
      <Link to="/">Home</Link> <br />
      <Link to="/login">Login</Link> <br />
      <Link to="/signup">Sign Up</Link> <br />
      <Link to="/" onClick={() => dispatch(logout())}>Logout</Link> <br />
    </div>
  )
}

export default NavbarComp
