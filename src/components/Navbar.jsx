import { FilmIcon, SearchIcon, User } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-[rgb(37,35,35)] text-white flex items-center justify-between ">
      <nav className="flex justify-center items-center py-6 px-20 text-white brightness-200 font-bold gap-4 hover:cursor-pointer">
        <FilmIcon size={20} />
        <p className="text-2xl ">NoirFlux</p>
      </nav>
      <nav>
        <ul className="flex justify-center py-6 px-40 gap-12 items-center font-semibold text-neutral-200">
            <li className="hover:text-white hover:cursor-pointer hover:transition-colors duration-300">Discover</li>
            <li className="hover:text-white hover:cursor-pointer hover:transition-colors duration-300">Genres</li>
            <li className="hover:text-white hover:cursor-pointer hover:transition-colors duration-300">Watchlist</li>
            <li className="hover:text-white hover:cursor-pointer hover:transition-colors duration-300">Profile</li>
            <li className="bg-neutral-400 hover:cursor-pointer rounded-2xl px-1 py-1"><SearchIcon/></li>
            <li className="bg-neutral-400 hover:cursor-pointer rounded-2xl px-1 py-1"><User/></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
