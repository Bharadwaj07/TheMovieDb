import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom'; 
import './Genre.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
class Genre extends Component {
    constructor(props){
        super()
        this.state ={
            genreList:[]
        }
        this.api_key = process.env.REACT_APP_API;

    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}`)
        .then(data => data.json())
        .then(data =>{
            console.log(data)
            this.setState({
                genreList:[...data.genres]
            })
        })
    }
    render() {
        const genre = this.state.genreList.map(genre =>
            {
               return(
                    <div className='item' key={genre.id}>
                        <FontAwesomeIcon icon='dot-circle' className='faicon'/>
                       <Link to={{pathname:`/genre/${genre.id}`}}> <h4>{genre.name}</h4></Link>
                    </div>
               )
            }
        )
        console.log(genre.id)
        return (
            <div className='genre'>
                <h2>Genre</h2>
                {genre}
                
           </div>
        )
    }
}
export default withRouter(Genre);