import React from "react";
import AddedWatchlist from "./AddedWatchlist";

function WatchList() {
  return (
    <div>
      <div className="flex items-center justify-center  h-30 gap-2 mt-2">
        <input
          type="text"
          placeholder="Search your movie here..."
          className="h-10 w-80 border border-black rounded pl-5 "
        />
        <i className="fa-solid fa-magnifying-glass text-2xl text-center pt-3 bg-gray-700 h-10 w-10 text-white rounded-t-sm text-xl hover:text-amber-500 duration-500"></i>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <AddedWatchlist />
      <AddedWatchlist />
      <AddedWatchlist />
      <AddedWatchlist />
      <AddedWatchlist />
      <AddedWatchlist />
      <AddedWatchlist />
      <AddedWatchlist />
      <AddedWatchlist />
      <AddedWatchlist />
      <AddedWatchlist />
      <AddedWatchlist />
      </div>
      
    </div>
  );
}

export default WatchList;
