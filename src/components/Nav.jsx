import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/create">Add </NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/update">Edit</NavLink></li>
    </ul>
  </nav>
    </div>
  )
}

export default Nav;