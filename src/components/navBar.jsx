import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/movies">
        iMovies
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/movies">
            Movies <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
        </div>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link className="navbar-brand" to="/movies">
    //     Navbar
    //   </Link>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNavAltMarkup"
    //     aria-controls="navbarNavAltMarkup"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon" />
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <NavLink className="nav-link" to="/movies">
    //           Movies <span className="sr-only">(current)</span>
    //         </NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" to="/customers">
    //           Customers
    //         </NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" to="/rentals">
    //           Rentals
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    // <div className="navbar navbar-light bg-light" style={{ marginBottom: 30 }}>
    //   <Link to="" className="navbar-brand mb-0 h1">
    //     iMovies
    //   </Link>
    // </div>
  );
};

export default NavBar;
