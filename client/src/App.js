import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import SearchBar from "./pages/booksPage/SearchBar";
import axios from "axios"
import CategoryFilter from "./pages/booksPage/CategoryFilter";





function App() {
  
  return(
    // <CategoryFilter/>
    <SearchBar/>
    )
  
}
export default App;
