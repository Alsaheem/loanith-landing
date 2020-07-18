import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg_loanith ">
      <a className="navbar-brand" href="#">
  <img src="./assets/loanith-logo.png" width={155} height={40}  loading="lazy" />
</a>

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
              <a className="nav-link text-white" href="#">
                Why Loanith
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                Support
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link p-2 rounded bg-white" href="#">
                Leaderboard
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
