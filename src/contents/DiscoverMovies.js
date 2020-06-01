import React, { Component } from 'react'
import MovieList from './MovieList';
class DiscoverMovies extends Component {
    constructor(props){
        super(props);
        this.api_key = process.env.REACT_APP_API;
        this.state ={
            movies:[],
        }
    }
    componentDidMount(){
       // console.log(this.props.match.params.movieType)
        const movieType = this.props.match.params.movieType
        console.log(movieType)
        fetch(`https://api.themoviedb.org/3/movie/${movieType}?api_key=${this.api_key}`)
        .then(data =>data.json())
        .then(data =>{
            console.log(data)
            this.setState({
                movies:[...data.results]
            })
        })
    }
    componentDidUpdate(prevProps){
        if(this.props.location.pathname!==prevProps.location.pathname){
            const movieType = this.props.match.params.movieType
            console.log(movieType)
            fetch(`https://api.themoviedb.org/3/movie/${movieType}?api_key=${this.api_key}&language=en-US`)
            .then(data =>data.json())
            .then(data =>{
                console.log(data)
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
export default DiscoverMovies;