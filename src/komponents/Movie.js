import React from 'react'
import { Link } from 'react-router-dom'

function Movie({movie}) {
  return (
    <div className='movie'>
   <div key={movie.id}>   
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
        <h4>{movie.original_title}</h4>
        <Link to={`/movies/${movie.id}`} style={{color :'white', 'text-decoration':'none'}}>Movie Details</Link>
       
    </div>
    </div>
  )
}

export default Movie