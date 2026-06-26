import React from "react";
import Navbar from "../../components/Navbar";
import SearchNavbar from "./SearchNavbar";

import SearchSideBar from "./SearchSideBar";
import SearchBar from "./SearchBar";
import SearchBarFooter from "./SearchBarFooter";


const SearchPage = () => {
  return <div className="bg-black h-screen">
    <SearchNavbar/>
    <SearchSideBar/>
    <SearchBar/>
    <SearchBarFooter/>
  </div>;
};

export default SearchPage;
