import React, { useRef, useState } from "react";

function AddedWatchlistCard({ movie }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
    }
    setMuted(!muted);
  };

  const togglePlay = () => {
    if (!videoRef.current) {
      return;
    }
    if (paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPaused(!paused);
  };

  return (
    <div className="w-80 rounded-2xl overflow-hidden shadow-lg m-5">
      <div className="h-40 w-full bg-gray-300 flex items-center justify-center mb-1 relative">
        <video
          ref={videoRef}
          src="/sample video.mp4"
          autoPlay
          unmuted
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-2 right-2 flex gap-2">
          <button
            onClick={toggleMute}
            className="bg-black/70 text-white px-2 rounded"
          >
            {muted ? "Unmute" : "Mute"}
          </button>
          <button
            onClick={togglePlay}
            className="bg-black/70 text-white px-2 rounded"
          >
            {paused ? "Play" : "Pause"}
          </button>
        </div>
      </div>

      <div className="flex justify-between px-3 py-2">
        <button className="flex-1 mr-2 h-9 bg-black text-white rounded-lg hover:bg-gray-800">
          Watch Now
        </button>
        <button className="w-10 h-9 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
          -
        </button>
      </div>

      <div className="flex gap-3 px-3 text-sm font-medium">
        <span>&#9733; {movie?.vote_average?.toFixed(1) ?? "N/A"}</span>
        <span>{movie?.release_date?.substring(0, 4) ?? "N/A"}</span>
        <span>{movie?.genre_ids?.length ?? "N/A"}</span>
      </div>

      <p className="px-3 py-2 text-xs text-gray-700 line-clamp-3">
        {movie?.overview ?? "No movie added to watchlist yet."}
      </p>
    </div>
  );
}

function AddedWatchlist({ watchlistdata = [] }) {
  if (watchlistdata.length === 0) {
    return (
      <div className="w-full text-center text-sm text-gray-600 mt-6">
        No movie added to watchlist yet.
      </div>
    );
  }

  return watchlistdata.map((movie, index) => (
    <AddedWatchlistCard
      key={movie?.id ?? `${movie?.title ?? "movie"}-${index}`}
      movie={movie}
    />
  ));
}

export default AddedWatchlist;
