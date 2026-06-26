import { FilmIcon, SearchIcon, User } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-[rgb(37,35,35)] text-white flex-container justify-between ">
      <nav className="flex-container items-center py-6 px-20 font-bold gap-4">
        <FilmIcon size={20} />
        <p className="text-2xl">NoirFlux</p>
      </nav>
      <nav>
        <ul className="flex-container py-6 px-40 gap-12 justify-center items-center font-semibold text-neutral-200">
            <li>Discover</li>
            <li>Genres</li>
            <li>Watchlist</li>
            <li>Profile</li>
            <li className="navbar-icon"><SearchIcon/></li>
            <li className="navbar-icon"><User/></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
