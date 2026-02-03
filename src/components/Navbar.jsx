import React from "react";
import logo from "../assets/Navlogo.png";
import { Link } from "react-router-dom";
import userlogo from "../assets/user-profile.png";
function Navbar() {
  return (
    <div className="h-17 w-full bg-black flex items-center text-white space-x-30">
      <img src={logo} alt="logo-image" className="h-11 w-auto ml-4" />
      <Link to="/">Movies</Link>
      <Link to="/watchlist">WatchList</Link>
      <Link to="/recommendations">Recommendations</Link>
      <Link to="/userprofile" className="ml-150 bg-amber-200 rounded-full p-1">
        <img src={userlogo} alt="User-profile-image" className="h-6 w-6 "/>
      </Link>
    </div>
  );
}

export default Navbar;
