import React, { Component } from 'react'
import MovieList from './MovieList';
class SearchMovies extends Component {
    constructor(props){
        super(props);
        this.api_key = process.env.REACT_APP_API;
        this.state ={
            movies:[]
        }
    }
    componentDidMount(){
        const query = this.props.match.params.query;
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${query}&language=en-US`)
        .then(data => data.json())
        .then(data => {
            //console.log(data)
        this.setState({ movies: [...data.results]})
        })
    }
    componentDidUpdate(prevProps){
        if(this.props.location.pathname !== prevProps.location.pathname){
            const query = this.props.match.params.query;
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${query}`)
            .then(data => data.json())
            .then(data => {
                //console.log(data)
            this.setState({ movies: [...data.results]})
            })
        }
    }
    render() {
        console.log(this.props.match.params.query)
        return (
            <div>
              <MovieList movies={this.state.movies}/>  
            </div>
        )
    }
}
export default SearchMovies;