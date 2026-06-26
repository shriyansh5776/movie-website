import React from "react";
import Navbar from "./components/Navbar";
import ShowcaseMovie from "./components/ShowcaseMovie";
import avengers from "./assets/avengers.webp";
import Footer from "./components/Footer";
import MovieCard from "./components/MovieCard";
const Home = () => {
  return (
    <div className="h-screen bg-black">
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
      <div className="flex justify-between mx-20 border py-4 px-6">
        <MovieCard className="" />
        <MovieCard className="" />
        <MovieCard className="" />
        <MovieCard className="" />
      </div>
    <Footer/>
    </div>
  );
};

export default Home;
