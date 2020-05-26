import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import './MovieList.css'
function MovieList(props){
const movies = props.movies;
const movieList = movies.map(movie=>{
    return(
        <MovieCard movieInfo={movie} key={movie.id}/>
    )
})

    return(
        <div className='list-container'>
            {movieList}
        </div>
    )
}
export default MovieList;