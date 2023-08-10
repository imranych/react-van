import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/assets/images/avatar-icon.png";
import imageReact from "/assets/images/react.png";
import imageRouter from "/assets/images/router.png";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife <span className="with">with</span>
        <img className="logo-img-1" src={imageReact} />
        <img className="logo-img-2" src={imageRouter} />
      </Link>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </Link>
        <button title="log out" onClick={fakeLogOut}>x</button>
      </nav>
    </header>
  );
}
