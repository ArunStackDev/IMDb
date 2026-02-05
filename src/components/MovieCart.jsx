import React from "react";

function MovieCart({movieRatings, moviePoster}) {
  
      let formattedRatings = movieRatings.toFixed(1);
  return (
    <div className="flex items-end justify-center h-70 w-45 rounded-lg m-2 bg-cover bg-center hover:scale-110 transition-transform duration-300"
    
      style={{
        backgroundImage:
          `url('https://image.tmdb.org/t/p/w500${moviePoster}')`,
      }}
    >
      <h5 className="text-black bg-gradient-to-r from-yellow-400 to-red-500 w-full text-center">Ratings : {formattedRatings}⭐</h5>
    </div>
  );
}

export default MovieCart;
