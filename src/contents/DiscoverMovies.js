import React, { Component } from 'react'
import MovieList from './MovieList';
class DiscoverMovies extends Component {
    constructor(props){
        super(props);
        this.api_key = process.env.REACT_APP_API;
        //this.baseUrl = `/discover/${this.props.match.params.movieType}`;
        this.state ={
            movies:[],
            data:{},
            baseUrl:''
        }
    }
    componentDidMount(){
       // console.log(this.props)
        const movieType = this.props.match.params.movieType
        const page = this.props.location.search
        const baseUrl =`/discover/${this.props.match.params.movieType}`
        //console.log(movieType)
        // console.log(page.split('?')[1])
        fetch(`https://api.themoviedb.org/3/movie/${movieType}?api_key=${this.api_key}&language=en-US&${page.split('?')[1]}`)
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
        console.log(this.props.location.pathname)
       console.log('params ',this.props.match.params)
       //console.log()
        if(this.props.location.pathname!==prevProps.location.pathname){
            const movieType = this.props.match.params.movieType
            const page = this.props.location.search
            const baseUrl =`/discover/${this.props.match.params.movieType}`
            //console.log(movieType)
             //console.log(page.split('?')[1])
            fetch(`https://api.themoviedb.org/3/movie/${movieType}?api_key=${this.api_key}&language=en-US&${page.split('?')[1]}`)
            .then(data =>data.json())
            .then(data =>{
                //console.log(data)
                data.results &&
                this.setState({
                    movies:[...data.results],
                    data:{...data},
                    baseUrl:baseUrl
                })
            })
        }
    }
    render() {
       console.log('discover render',this.state.data.page)
        return (
            <MovieList 
                data={this.state.data}
                movies={this.state.movies} 
                baseUrl={this.state.baseUrl} 
                page ={this.state.data.page}
                total_pages ={this.state.data.total_pages}
            />
        )
    }
}
export default DiscoverMovies;