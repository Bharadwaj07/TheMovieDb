import React, { Component } from 'react'
import MovieList from './MovieList';
class RecomendMovie extends Component {
    constructor(props){
        super(props)
        this.api_key = process.env.REACT_APP_API;
        this.state ={
            movies:[]
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.movieId}/similar?api_key=${this.api_key}`)
        .then(data => data.json())
        .then(data =>{
            this.setState({
                movies:[...data.results]
            })
        })
    }
    render() {
        return (
            <div>
                <MovieList movies={this.state.movies} />
            </div>
        )
    }
}

export default RecomendMovie;