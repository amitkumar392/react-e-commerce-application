import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        
      <Link to="/" >
        <img src={logo} alt="store" className="navbar-brand" />
        
      </Link>
      <ul className="navbar-nav align-item-center">
        <li className="nav-item ml-5 ">
          <NavLink className="nav-link" to="/">
            Products
          </NavLink>
        </li>
      </ul>

      <Link to="/cart" className="ml-auto">
        <button className="btn btn-primary text-capitalize">
            <span className="mr-1">
            <i className="fas fa-cart-plus"></i>
            </span>
          My cart
        </button>
      </Link>
    </nav>
  );
};
export default Navbar;
