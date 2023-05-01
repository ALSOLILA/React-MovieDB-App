import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

function MovieDetails() {

  const {id}=useParams()
  const [movie,setMovie]=useState([])

  useEffect (() =>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=662ef8ffb6d218ee610a62f51308afe9`)
    .then(response =>setMovie(response.data))
  },[id])

  return (
    <div className='moviedetails'>
      {movie && <div key={movie.id}> <h1>{movie.original_title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
        <p>{movie.overview}</p>
      </div>}

    </div>
  )
}

export default MovieDetails