import React from 'react'
import { useContext } from 'react';
import { MoviesContext } from '../MoviesContext'
import Movie from '../komponents/Movie'

function Movies({page,changePage,searchMovies}) {

  const movies =useContext(MoviesContext);

    const handleSearch = (e)=>{
      switch(e.keyCode){
        case 13:searchMovies(e.target.value)
        break;
        default:
      }
      
    }

    const handlePageChange= (e)=> {
      changePage(e.target.innerText)
    }


  return (
    <>
    <div className='search'>

        <input type='search' placeholder='search movie' onKeyUp={handleSearch} />

    </div>
    <div className='pages'> 
    <button onClick={handlePageChange}>Prev</button> 
    <span>{page}</span>
    <button onClick={handlePageChange}>Next</button>
    </div>

    <div className='movies'>
    {movies && movies.map(movie=> <Movie movie={movie}/> )}
    </div>
     
    </>
  )
}

export default Movies