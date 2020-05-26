import React from 'react';
import './MovieCard.css';
import {Link} from 'react-router-dom';
function MovieCard(props) {
    //console.log(props.movieInfo)
    const movie = props.movieInfo;
    return (
                
                    <Link to={`/${movie.id}`}>
                        <div className='card-container'>
                            <div className='card-img'>
                                {movie.poster_path == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg` } alt='movie card image' style={{width:"100%",height:"100%"}}/>
                                :<img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt='movie card image' style={{width:"100%",height:"100%"}}/>}
                            </div>
                            <div className='card-info'>
                                <h2>{movie.title}</h2>
                            </div>
                        </div>
                    </Link>
               
        
    )
}

export default MovieCard;
