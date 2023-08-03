import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <img
            className="header_icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt=""
          />
        </Link>
        <Link to="/movies/popular" className="header_items">
          Popular
        </Link>
        <Link to="/movies/top_rated" className="header_items">
          Top Rated
        </Link>
        <Link to="/movies/upcoming" className="header_items">
          Upcoming
        </Link>
      </div>
    </div>
  );
};

export default Header;
