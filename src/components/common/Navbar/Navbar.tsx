import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg_loanith ">
        <Link to="/">
          {" "}
          <a className="navbar-brand">
            <img
              src="./assets/loanith-logo.png"
              width={155}
              height={40}
              loading="lazy"
            />
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/why-loanith">
                <a className="nav-link text-white">Why Loanith</a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to=""></Link>
              <a className="nav-link text-white">Blog</a>
            </li>
            <li className="nav-item active">
              <Link to="/contact">
                <a className="nav-link text-white">Contact Us</a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/support">
                <a className="nav-link text-white">Support</a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/leaderboard">
                <a className="nav-link p-2 rounded bg-white">Leaderboard</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
