import React from "react";
import "./navbar.scss";
import logo from "../../images/workwise.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="workwise_logo" width="100px" />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Beruf, Jobtitel oder Stichwort..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="navbar-right-side ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-link active"
                aria-current="page"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/jobsuche"
                className="nav-link active"
                aria-current="page"
              >
                Jobsuche
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
