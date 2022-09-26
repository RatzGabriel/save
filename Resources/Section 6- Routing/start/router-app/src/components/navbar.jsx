import React from "react";
import { Link,NavLink } from "react-router-dom";
import "./admin/navbar.css"


const NavBar = () => {
  return (
    <ul>
      <NavLink  className={isActive =>
    "nav-link " + (!isActive ? " unselected" : "active")
  } to="/">
       Home
      </NavLink>
      <NavLink  className={isActive =>
    "nav-link " + (!isActive ? " unselected" : "active")
  } to="/products">
      Products
      </NavLink>
      <NavLink  className={isActive =>
    "nav-link " + (!isActive ? " unselected" : "active")
  } to="/posts/2018/06">
        Posts
      </NavLink>
      <NavLink  className={isActive =>
    "nav-link " + (!isActive ? " unselected" : "active")
  } to="/admin">
       Admin
      </NavLink>
    </ul>
  );
};

export default NavBar;
