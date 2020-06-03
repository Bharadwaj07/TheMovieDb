import React, { Component } from 'react'
import MovieList from './MovieList';
class SearchMovies extends Component {
    constructor(props){
        super(props);
        this.api_key = process.env.REACT_APP_API;
        this.state ={
            movies:[],
            data:{},
            baseUrl:''
        }
    }
    componentDidMount(){
        //console.log(this.props.match.params.page)
        const query = this.props.match.params.query;
        const page = this.props.match.params.page
        const baseUrl =`/search/${query}`;
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${query}&language=en-US&page=${page}`)
        .then(data => data.json())
        .then(data => {
            //console.log(data)
        this.setState({ 
            movies: [...data.results],
            data:{...data},
            baseUrl:baseUrl
        })
        })
    }
    componentDidUpdate(prevProps){
        if(this.props.location.pathname !== prevProps.location.pathname){
            const query = this.props.match.params.query;
            const page = this.props.match.params.page
            const baseUrl =`/search/${query}`;
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${query}&page=${page}`)
            .then(data => data.json())
            .then(data => {
                //console.log(data)
            this.setState({ 
                movies: [...data.results],
                data:{...data},
                baseUrl:baseUrl
            })
            })
        }
    }
    render() {
       // console.log(this.state.data)
        return (
            <div>
              <MovieList 
                data={this.state.data}
                movies={this.state.movies} 
                baseUrl={this.state.baseUrl} 
                page ={this.state.data.page}
                total_pages ={this.state.data.total_pages}
            /> 
            </div>
        )
    }
}
export default SearchMovies;