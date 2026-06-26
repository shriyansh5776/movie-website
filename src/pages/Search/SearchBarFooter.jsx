import { Copyright, Film } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
const SearchBarFooter = () => {
  return (
    <footer className="text-white bg-black flex mx-10 justify-between py-6 px-12 ">
      <div className="flex flex-col max-w-sm gap-6  justify-center items-start px-4">
        <div className="flex gap-2 text-2xl justify-center items-center  ">
            
          <Film className="bg-neutral-500  " />
          <h2>NoirFlux</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          iste impedit laborum rerum. Fugit unde magnam molestiae, facilis nobis
          debitis odit!
        </p>
      </div>
      <nav className="flex flex-col gap-2 text-neutral-400">
        <Link className="text-white">Explore</Link>
        <Link>Discover</Link>
        <Link>Genres</Link>
        <Link>New Releases</Link>
        <Link>Top Rated</Link>
      </nav>
      <nav className="flex flex-col text-neutral-400 gap-2">
        <Link className="text-white">Support</Link>
        <Link>Help Center</Link>
        <Link>Terms & Privacy</Link>
        <Link>Contact</Link>
      </nav>
      <div className="flex flex-col gap-6">
        <p>Connect</p>
        <nav className="flex gap-2">
          <Link className="py-2 rounded-xl px-2 bg-neutral-500">
            <FaTwitter className="text-white text-xl" />
          </Link>
          <Link className="py-2 rounded-xl px-2 bg-neutral-500">
            <FaInstagram className="text-white text-xl" />
          </Link>
          <Link className="py-2 rounded-xl px-2 bg-neutral-500">
            <FaFacebook className="text-white text-xl" />
          </Link>
        </nav>
        <div className="flex">

        <Copyright/>
        <p>
             2026 NoirFlux. All rights reserved
        </p>
        </div>
      </div>
    </footer>
  );
};

export default SearchBarFooter;
