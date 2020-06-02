import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import './MovieList.css';
import Pagination from '../components/Pagination';



export default class MovieList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        //console.log(this.props.baseUrl)
        const movies = this.props.movies;
        const movieList = movies.map(movie=>{
                    return(
                        <MovieCard movieInfo={movie} key={movie.id} />
                    )
                })
        return (
            <div className='movieList'>
                <div className='list-container'>
                    {movieList}
                </div>
                 <Pagination
                    baseUrl={this.props.baseUrl}
                    page={this.props.page}
                    total_pages ={this.props.total_pages}

                />
            </div>
        )
    }
}