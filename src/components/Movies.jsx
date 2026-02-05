import React, { useState, useEffect } from "react";
import Banner from "./Banner.jsx";
import MovieCart from "./MovieCart.jsx";
import axios from "axios";
import { data } from "react-router-dom";
import Pages from "./Pages.jsx";
// https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1

function Movies() {
  const [movies, setMovies] = useState([]);
  const [currPage, setcurrPage] = useState(1);

function pagedecrement(){
  if(currPage>1){
    setcurrPage(currPage-1);
  }
}
function pageincrement(){
  setcurrPage(currPage+1);
}

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=48498188740fff63e2567b71fb163e44&language=en-US&page=${currPage}`,
      );

      setMovies(response.data.results);
    }
    fetchMovies();
  }, [currPage]);
console.log(movies);

  return (
    <div>
      <Banner />
      <h3 className="mx-6 my-4 text-xl font-semibold text-gray-900 border-l-6 border-amber-400 pl-3">
        Trending Movies
      </h3>

      <div className="flex flex-wrap justify-center gap-20">
        {movies.map((movie) => (
          <MovieCart
            movieRatings={movie.vote_average}
            moviePoster={movie.poster_path}
          />
        ))}
      </div>
      <Pages currPage={currPage} pagedecrement={pagedecrement} pageincrement={pageincrement} />
    </div>
  );
}

export default Movies;
