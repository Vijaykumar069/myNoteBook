import React, { Component } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Navbar = (props) => {
  const { showAlert } = props;
  let history = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    showAlert('logged out successfully','success');
    localStorage.removeItem("token");
    history("/login");
  };
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark  bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-brand">myNotebook</div>
        <NavLink className="navbar-brand" to="/"></NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  location.pathname === "/notes" ? "active" : {}
                }`}
                to="/notes"
              >
                Notes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : {}
                }`}
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        {!localStorage.getItem("token") ? (
          <form className="d-flex">
            <NavLink
              className="btn btn-primary mx-2 d-none"
              to="/login"
              role="button"
            >
              Login
            </NavLink>
            <NavLink
              className="btn btn-primary mx-2 d-none"
              to="/signup"
              role="button"
            >
              Signup
            </NavLink>
          </form>
        ) : (
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};
