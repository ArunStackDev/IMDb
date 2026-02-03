import React from "react";

function Banner() {
  return (
    <div
      className="h-[65vh] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.themoviedb.org/t/p/original/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg')",
      }}
    >
      <div className="h-full flex items-end justify-center text-white text-3xl font-bold">
        <p>Movie Title</p>
      </div>
    </div>
  );
}

export default Banner;
