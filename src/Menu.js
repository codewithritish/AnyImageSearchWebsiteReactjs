import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
export default function Menu() {
  return (
    <>
      <div class="menu">
        <NavLink exact activeClassName="active" to="/about">
          About us
        </NavLink>
        <br />
        <NavLink exact activeClassName="active" to="/search">
          Search
        </NavLink>
        <br />
        <NavLink exact activeClassName="active" to="/contact">
          Contact us
        </NavLink>
      </div>
    </>
  );
}
