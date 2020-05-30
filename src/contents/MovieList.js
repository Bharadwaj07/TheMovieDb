import React from 'react';
import MovieCard from '../components/MovieCard';
import './MovieList.css';
function MovieList(props) {
const movies = props.movies;
const movieList = movies.map(movie=>{
    return(
        <MovieCard movieInfo={movie} key={movie.id} />
    )
})

    return(
        <div className='movieList'>
            <div className='list-container'>
                {movieList}
            </div>
        </div>
    )

    
}
export default MovieList;