import React, { Component } from 'react';
import MovieList from './MovieList';
class GenreMovies extends Component {
    constructor(props){
        super(props);
        this.api_key = process.env.REACT_APP_API;
        this.state ={
            movies:[]
        }
    }
    componentDidMount(){
        const genreId = this.props.match.params.genreId
       // console.log(genreId)
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&with_genres=${genreId}`)
        .then(data =>data.json())
        .then(data =>{
            //console.log(data)
            this.setState({
                movies:[...data.results]
            })
        })
    }
    componentDidUpdate(prevProps){
        if(this.props.location.pathname!==prevProps.location.pathname){
            const genreId = this.props.match.params.genreId
            // console.log(genreId)
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&with_genres=${genreId}&language=en-US`)
            .then(data =>data.json())
            .then(data =>{
                //console.log(data)
                this.setState({
                    movies:[...data.results]
                })
            })
        }
    }
    render() {
        return (
            <div>
                <MovieList movies={this.state.movies}/>
            </div>
        )
    }
}
export default GenreMovies;