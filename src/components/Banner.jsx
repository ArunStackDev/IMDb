import React from "react";

function Banner() {
  return (
    <div
      className="relative h-[65vh] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.themoviedb.org/t/p/original/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center px-12 text-white max-w-3xl">
        <div>
          {/* Rating */}
          <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold bg-amber-400 text-black rounded">
            ⭐ 8.6
          </span>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-3">
            Movie Title
          </h1>

          {/* Description */}
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            A gripping story of survival, sacrifice, and hope as a group of
            strangers face impossible odds in a world on the brink of collapse.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-red-700 text-white font-semibold rounded hover:bg-red-600 transition">
               Watch Now
            </button>

            <button className="px-6 py-2 bg-gray-700/80 text-white font-semibold rounded hover:bg-gray-600 transition">
              + Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
