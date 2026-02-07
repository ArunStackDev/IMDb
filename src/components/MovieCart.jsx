import React from "react";

function MovieCart({ movie, addToWatchlist }) {
  const formattedRatings =
    typeof movie?.vote_average === "number" ? movie.vote_average.toFixed(1) : "N/A";
  const moviePoster = movie?.poster_path;

  return (
    <div
      className="relative flex items-end justify-center h-70 w-45 rounded-lg m-2 bg-cover bg-center hover:scale-110 transition-transform duration-300"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500${moviePoster}')`,
      }}
    >
      <h5 className="text-black bg-gradient-to-r from-yellow-400 to-red-500 w-full text-center">
        Ratings: {formattedRatings} &#9733;
      </h5>
      <div
        className="absolute top-2 right-2 bg-white rounded-sm p-1 cursor-pointer hover:bg-gray-200"
        onClick={() => addToWatchlist(movie)}
      >
        &#128525;
      </div>
    </div>
  );
}

export default MovieCart;
