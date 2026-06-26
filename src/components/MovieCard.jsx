import React from "react";

const MovieCard = ({movie_name,year,poster}) => {
  return (
    <div className=" w-70 h-90 py-4 px-4 rounded-2xl bg-neutral-600 flex flex-col gap-4  ">
      <img src={poster} alt={movie_name} className="w-80 h-60 rounded-2xl" />
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold">{movie_name}</p>
        <p className="text-sm text-neutral-600">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
