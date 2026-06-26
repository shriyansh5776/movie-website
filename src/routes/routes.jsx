import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/Search/SearchPage";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}
