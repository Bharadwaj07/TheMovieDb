import React, { Component } from 'react';
import MovieList from './MovieList';
class GenreMovies extends Component {
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
        const genreId = this.props.match.params.genreId
        const page = this.props.location.search
        const baseUrl = `/genre/${this.props.match.params.genreId}`;
       // console.log(genreId)
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&with_genres=${genreId}&${page.split('?')[1]}`)
        .then(data =>data.json())
        .then(data =>{
            //console.log(data)
            this.setState({
                movies:[...data.results],
                data:{...data},
                baseUrl:baseUrl
            })
        })
    }
    componentDidUpdate(prevProps){
        if(this.props.location.pathname!==prevProps.location.pathname){
            const genreId = this.props.match.params.genreId
            const page = this.props.location.search
            const baseUrl = `/genre/${this.props.match.params.genreId}`;
            // console.log(genreId)
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&with_genres=${genreId}&language=en-US&${page.split('?')[1]}`)
            .then(data =>data.json())
            .then(data =>{
                //console.log(data)
                this.setState({
                    movies:[...data.results],
                    data:{...data},
                    baseUrl:baseUrl
                })
            })
        }
    }
    render() {
        return (
            <MovieList 
                movies={this.state.movies} 
                baseUrl={this.state.baseUrl} 
                page ={this.state.data.page}
                total_pages ={this.state.data.total_pages}
            />
        )
    }
}
export default GenreMovies;