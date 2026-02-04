import React, { useState, useEffect } from "react";
import Banner from "./Banner.jsx";
import MovieCart from "./MovieCart.jsx";
import axios from 'axios'
// https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1

function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
   const data = axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`)
  },[])

  return (
    <div>
      <Banner />
      <h3 className="mx-6 my-4 text-xl font-semibold text-gray-900 border-l-6 border-amber-400 pl-3">
        Trending Movies
      </h3>

      <div className="flex flex-wrap justify-center gap-20">
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
      </div>
    </div>
  );
}

export default Movies;
