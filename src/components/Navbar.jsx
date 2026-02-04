// import React from "react";
// import logo from "../assets/Navlogo.png";
// import { Link } from "react-router-dom";
// import userlogo from "../assets/user-profile.png";
// function Navbar() {
//   return (
//     <div className="h-17 w-full bg-black flex items-center text-white px-4 gap-6">
//       <img src={logo} alt="logo-image" className="h-11 w-auto ml-4" />
//       <Link to="/">Movies</Link>
//       <Link to="/watchlist">WatchList</Link>
//       <Link to="/recommendations">Recommendations</Link>
//       <Link to="/userprofile" className="ml-auto bg-amber-200 rounded-full p-1">
//         <img src={userlogo} alt="User-profile-image" className="h-6 w-6 "/>
//       </Link>
//     </div>
//   );
// }

// export default Navbar;
import React from "react";
import logo from "../assets/Navlogo.png";
import { Link, NavLink } from "react-router-dom";
import userlogo from "../assets/user-profile.png";

function Navbar() {
  return (
    <nav className="w-full h-16 bg-black flex items-center px-8 shadow-md">
      
      {/* Logo */}
      <img src={logo} alt="logo" className="h-10 w-auto mr-8" />

      {/* Links */}
      <div className="flex gap-6 text-sm font-medium text-gray-300">
        <NavLink to="/" className="hover:text-white transition">
          Movies
        </NavLink>
        <NavLink to="/watchlist" className="hover:text-white transition">
          WatchList
        </NavLink>
        <NavLink to="/recommendations" className="hover:text-white transition">
          Recommendations
        </NavLink>
      </div>

      {/* User Profile */}
      <Link
        to="/userprofile"
        className="ml-auto rounded-full p-1 hover:ring-2 hover:ring-amber-400 transition"
      >
        <img
          src={userlogo}
          alt="user"
          className="h-8 w-8 rounded-full"
        />
      </Link>
    </nav>
  );
}

export default Navbar;
