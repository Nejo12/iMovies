import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar navbar-light bg-light" style={{ marginBottom: 30 }}>
      <Link to="" className="navbar-brand mb-0 h1">
        iMovies
      </Link>
    </div>
  );
};

export default NavBar;
