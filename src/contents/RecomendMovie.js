import React, { Component } from 'react'
import MovieList from './MovieList';
class RecomendMovie extends Component {
    constructor(props){
        super(props)
        this.api_key = process.env.REACT_APP_API;
        this.state ={
            movies:[],
            data:{},
            baseUrl:''
        }
    }
    componentDidMount(){
        console.log(this.props)
        const baseUrl = `/movie/${this.props.movieId}`
        fetch(`https://api.themoviedb.org/3/movie/${this.props.movieId}/similar?api_key=${this.api_key}&page=${this.props.page}`)
        .then(data => data.json())
        .then(data =>{
            this.setState({
                movies:[...data.results],
                data:{...data},
                baseUrl:baseUrl

            })
        })
    }
    componentDidUpdate(prevProps){
        if(this.props!==prevProps){  
            const baseUrl = `/movie/${this.props.movieId}`
            fetch(`https://api.themoviedb.org/3/movie/${this.props.movieId}/similar?api_key=${this.api_key}&page=${this.props.page}`)
            .then(data => data.json())
            .then(data =>{
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

export default RecomendMovie;