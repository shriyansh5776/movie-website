import { FilmIcon, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home";
const SearchNavbar = () => {
  return (
    <div className="flex justify-between items-center py-4  bg-black px-12">
      <nav className="flex text-white flex-row gap-12  ">
        <Link to={"/"} className="flex justify-center items-center">
          <FilmIcon size={40}/>
          <p className="text-2xl">NoirFlux</p>
        </Link>
        <nav className="flex justify-center items-center gap-6"> 

        <Link>Home</Link>
        <Link>Discover</Link>
        <Link>Search</Link>
        <Link>Genres</Link>
        <Link>Watchlist</Link>
        </nav>
      </nav>
      <nav className="flex gap-6">
        <Link className="text-white bg-neutral-500 rounded-xl py-2 px-4">Sign in</Link>
        <Link className="text-white text-xl bg-neutral-500 rounded-3xl py-2 px-2"><User/></Link>
      </nav>
    </div>
  );
};

export default SearchNavbar;
