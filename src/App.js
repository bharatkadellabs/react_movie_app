import React from "react";
import Header from "./shareFIle/Header.js";
import "./App.css";
import MainNav from "./shareFIle/MainNav.js";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { Container } from "@mui/system";
import Trending from "./pages/Trending/Trending.js";
import Series from "./pages/Series/Series.js";
import Search from "./pages/Search/Search.js";
import Movies from "./pages/Movies/Movies.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path='/' element={<Trending />} exact/>
            <Route path='/movies' element={<Movies />} />
            <Route path='/series' element={<Series />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Container>
      </div>
      <MainNav />
    </BrowserRouter>
  );
}

export default App;
