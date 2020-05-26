import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import MovieList from './MovieList';

class Home extends Component {
    constructor(){
        super();
        this.state ={
            movies:[],
            searchItem:''
        }
        this.api_key = process.env.REACT_APP_API;
        this.handleSubmit =this.handleSubmit.bind(this)
        this.handleChange =this.handleChange.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${this.state.searchItem}`)
        .then(data => data.json())
    .then(data => {
        //console.log(data)
      this.setState({ movies: [...data.results]})
    })
    }

    handleChange(e){
        this.setState({
            searchItem:e.target.value
        })
    }
    render() {
        return (
            <div>
              <NavBar
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
              
              <MovieList movies={this.state.movies}/>
            </div>
        )
    }
}
export default  Home;