import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
// import Auth from "./pages/Auth"
import AddMovie from "./pages/addMovie"
import EditMovie from "./pages/editMovie";
import MovieList from "./pages/MovieList"
import MovieInfo from "./pages/MovieInfo"

const Router = () => {
   return(
       <BrowserRouter>
          <Routes>
           <Route element = {< Home/>}  path="/" exact />
           {/* <Route component = { Auth }  path="/auth" /> */}
           <Route element = { <AddMovie/> }  path="/movie/add" />
           <Route element = { <EditMovie/> }  path="/movie/edit" />
           <Route element = { <MovieList/> } path="/movies" />
           <Route element = { <MovieInfo/> } path="/movie/:id" />
           </Routes>
       </BrowserRouter>
   )
}

export default Router;