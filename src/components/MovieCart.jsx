import React from "react";

function MovieCart() {
  return (
    <div className="flex items-center justify-center h-60 w-40 rounded-lg m-5 bg-cover bg-center"
    
      style={{
        backgroundImage:
          "url('https://preview.redd.it/a-few-of-the-prettiest-posters-from-recent-malayalam-movies-v0-l2zcca6lbre91.jpg?width=493&format=pjpg&auto=webp&s=07e11aac02f8968682e12a34df534fb1bc671f7f')",
      }}
    >
      <h5 className="text-black bg-indigo-100 w-full text-center">Movie name</h5>
    </div>
  );
}

export default MovieCart;
