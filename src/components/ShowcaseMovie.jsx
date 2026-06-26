import React from "react";

import { Dot, InfoIcon, PlayCircle, Plus, Star } from "lucide-react";
const ShowcaseMovie = ({
  image,
  movie_name,
  year,
  description,
  pg_rating,
  length,
  rating,
  director,
  cast,
}) => {
  return (
    <div className=" mx-40 my-10 h-auto  bg-black text-white font-semibold">
      <div className="flex justify-center py-2 gap-12">
        <div>
          <img
            src={image}
            alt={movie_name}
            className="rounded-2xl h-auto w-100"
          />
        </div>
        <div className="flex flex-col  justify-center gap-4 px-12">
          <div className="flex gap-12 items-center ">
            <p className="text-3xl  font-bold">{movie_name}</p>
            <li>{year}</li>
          </div>
          <p>{description}</p>
          <div className="flex gap-2 ">
            <div className="bg-neutral-800 flex justify-center text-sm items-center px-4 py-2 rounded-2xl">
              PG-{pg_rating}
            </div>
            <div className="bg-neutral-800 flex justify-center text-sm items-center px-4 py-2 rounded-2xl">
              {length}min
            </div>
            <div className="bg-neutral-800 flex justify-center text-sm items-center px-4 py-2 rounded-2xl gap-2">
              {rating}
              <Star fill="white" size={14} />
            </div>
          </div>
          <div className=" gap-6 flex">
            <button className="flex gap-2 bg-neutral-600 py-2 rounded-2xl px-4 justify-center items-center">
              <PlayCircle />
              play
            </button>
            <button className="flex gap-2 bg-neutral-600 py-2 rounded-2xl px-4 justify-center items-center">
              <Plus /> Add to Watchlist
            </button>
            <button className="flex gap-2 bg-neutral-600 py-2 rounded-2xl px-4 justify-center items-center">
              <InfoIcon /> Details
            </button>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold text-neutral-600 ">{director}</p>
            <div className="flex">
              <Dot />
              <p className="">{cast}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseMovie;
