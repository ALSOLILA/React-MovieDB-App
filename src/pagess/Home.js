import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Movie from '../komponents/Movie'
import { MoviesContext } from '../MoviesContext'

function Home() {
  let movies =useContext(MoviesContext);
  movies = movies.slice(0,6)
  return (
    <>
    <div className='homecontent'>  <h1>Welcome to the Movie React App </h1>
    <Link to="/movies">Go to all the movies</Link>
    </div>

    <div className='home'>

        {movies && movies.map(movie=> <Movie movie={movie}/> )}
    </div>

    </>
  )
}

export default Home