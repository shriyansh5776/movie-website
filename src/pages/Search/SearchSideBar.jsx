import React from "react";

const SearchSideBar = () => {
  return (
    <div className="text-amber-50 bg-neutral-900 w-100 mx-12 my-10 rounded-2xl py-10 px-10 flex flex-col gap-4">
      <div className="flex justify-between ">
        <h1 className="text-2xl font-semibold">Filters</h1>
        <button className="font-semibold bg-neutral-700 px-4 rounded-xl">
          Reset
        </button>
      </div>
      <h2>Year</h2>
      <form className="flex  text-neutral-500 gap-6" action="">
        <input
          className="w-20 bg-black py-1 px-4 rounded-xl gap-4"
          type="number"
          min={1900}
          max={2026}
        />
        <input
          className="w-20 bg-black py-1 px-4 rounded-xl gap-4"
          type="number"
          min={1901}
          max={2026}
        />
      </form>
      <p className="text-neutral-200">Select a range to narrow results</p>
      <div className="flex flex-col gap-2">
        <h2>Rating</h2>
        <div className="flex gap-3">
          <input className="bg-white" type="radio" />
          <p>Any </p>
        </div>
        <div className="flex gap-3">
          <input className="bg-white" type="radio" />
          <p>7.0+(Critics) </p>
        </div>
        <div className="flex gap-3">
          <input className="bg-white" type="radio" />
          <p>8.5+(Top Picks) </p>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col text-neutral-300 gap-4">
        <h2 className="text-xl  ">Genre</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between" action="">
            <label className="flex justify-between items-center gap-4" htmlFor="">
              <p>Neo-Noir</p>
              <input type="checkbox" />
            </label>
          </div>
          <div className="flex justify-between" action="">
            <label className="flex justify-between items-center gap-4" htmlFor="">
              <p>Psychological</p>
              <input type="checkbox" />
            </label>
          </div>
          <div className="flex justify-between" action="">
            <label className="flex justify-between items-center gap-4" htmlFor="">
              <p>Crime</p>
              <input type="checkbox" />
            </label>
          </div>
          <div className="flex justify-between" action="">
            <label className="flex justify-between items-center gap-4" htmlFor="">
              <p>Thriller</p>
              <input type="checkbox" />
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <button
          className="bg-black py-2 px-4 rounded-xl w-80 text-white font-semibold "
          type="submit"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default SearchSideBar;
