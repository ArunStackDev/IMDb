import React from "react";
import Navbar from "./components/Navbar.jsx";
import Movies from "./components/Movies.jsx";
import WatchList from "./components/WatchList.jsx";
import Recommendations from "./components/Recommendations.jsx";
import UserProfile from "./components/UserProfile.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AddedWatchlist from "./components/AddedWatchlist.jsx";

function App() {
  const [watchlistdata, setWatchlistData] = useState([]);

  function addToWatchlist(movie) {
    setWatchlistData((prev) => [...prev, movie]);
  }

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Movies addToWatchlist={addToWatchlist} />} />
            <Route path="/watchlist" element={<WatchList watchlistdata={watchlistdata} />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/userprofile" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
