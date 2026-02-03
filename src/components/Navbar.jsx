import React from "react";
import Movies from "./Movies.jsx";
import WatchList from "./WatchList.jsx";
import Recommendations from "./Recommendations.jsx";
import User from "./UserProfile.jsx";
import logo from "../assets/Navlogo.png";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile.jsx";

function Navbar() {
  return (
    <div className="h-17 w-full bg-black flex items-center text-white space-x-30">
      <img src={logo} alt="logo-image" className="h-11 w-auto ml-4" />
      <Link to="/">
        <Movies />
      </Link>
      <Link to="/watchlist">
        <WatchList />
      </Link>
      <Link to="/recommendations">
        <Recommendations />
      </Link>
     <Link to="/userprofile">
        <UserProfile/>
      </Link>
    </div>
  );
}

export default Navbar;
