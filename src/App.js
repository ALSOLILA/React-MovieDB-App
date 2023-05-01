import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./komponents/Nav";
import Movies from "./pagess/Movies";
import Home from "./pagess/Home";
import About from "./pagess/About";
import MovieDetails from "./pagess/MovieDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { MoviesContext } from "./MoviesContext";
import aboutphoto from './images/react-movie.avif'

function App() {

  const[movies,setMovies]=useState([])
  const[page,setPage]=useState(1)
  const [search ,setSearch]=useState()

  useEffect(() =>{
   
    if(search && search.length > 3) {

      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=662ef8ffb6d218ee610a62f51308afe9&page=1&query=${search}`)
      .then(response => setMovies(response.data.results))
    }else {

      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=662ef8ffb6d218ee610a62f51308afe9&language=en-US&page=${page}`)
  .then(response => setMovies(response.data.results))
    }
  
  },[page,search])

  const searchMovies =(query)=>{
    setSearch(query)
  }

  const changePage = (action) =>{
    switch(action){
      case 'Prev':
        if (page > 1) setPage(page => page -=1)
        break;
        case 'Next':
          setPage(page => page +=1)
          break;
        default:
    }
  }


  return (
    <>
    <BrowserRouter>
    <Nav/>
    <MoviesContext.Provider value={movies} >
    <Routes>

    <Route exact  path='/' element={<Home />} />
    <Route exact path='/movies'  element={<Movies page={page} searchMovies={searchMovies} changePage={changePage} />} />
    <Route  path='/movies/:id'  element={<MovieDetails/>} />
    <Route exact path='/about'  element={<About aboutphoto ={aboutphoto }/>} />

    </Routes>
    </MoviesContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
