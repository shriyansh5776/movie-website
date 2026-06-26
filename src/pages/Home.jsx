import React from "react";
import Navbar from "../components/Navbar";
import ShowcaseMovie from "../components/ShowcaseMovie";
import avengers from "../assets/avengers.webp";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import intersteller from "../assets/intrsteller.jpg";
import endgame from "../assets/endgame.jpg";
import darkknight from "../assets/darkknight.jpg";
const movies = [
  {
    movie_name: "Avengers: Infinity War",
    year: "2018",
    poster: avengers,
  },
  {
    movie_name: "Avengers: Endgame",
    year: "2019",
    poster: endgame,
  },
  {
    movie_name: "The Dark Knight",
    year: "2008",
    poster: darkknight,
  },
  {
    movie_name: "Interstellar",
    year: "2014",
    poster: intersteller,
  },
];
const Home = () => {
  return (
    <div className="h-screen ">
      <Navbar />
      <ShowcaseMovie
        image={avengers}
        movie_name="Avengers: Infinity War"
        year="2018"
        description="The Avengers and their allies unite to stop the powerful Titan Thanos from collecting all six Infinity Stones. As Earth's mightiest heroes battle across the universe, the fate of half of all life hangs in the balance."
        pg_rating="13"
        length="149"
        rating="8.4"
        director="Anthony Russo, Joe Russo"
        cast="Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Tom Holland, Chadwick Boseman, Josh Brolin"
      />
      <div className="flex  flex-col justify-between mx-20 my-10  py-2  px-6 ">
        <div className="flex justify-between px-20 ">
          <p className="text-2xl text font-semibold">Curated Picks</p>
          <button className="text-neutral-600">See all</button>
        </div>
        <div className="flex justify-between mx-20 my-20">
          {movies.map((movie) => (
            <MovieCard
              key={movie.movie_name}
              movie_name={movie.movie_name}
              year={movie.year}
              poster={movie.poster}
            />
          ))}
        </div>
      </div>
      <div className="flex  flex-col justify-between mx-20 my-10  py-2  px-6 ">
        <div className="flex justify-between px-20 ">
          <p className="text-2xl text font-semibold">New & Notable</p>
          <button className="text-neutral-600">See all</button>
        </div>
        <div className="flex justify-between mx-20 my-20">
          {movies.map((movie) => (
            <MovieCard
              key={movie.movie_name}
              movie_name={movie.movie_name}
              year={movie.year}
              poster={movie.poster}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
