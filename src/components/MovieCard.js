import React,{Component}from 'react';
import './MovieCard.css';
import {Link} from 'react-router-dom';
import RenderRatings from './RenderRatings';
class MovieCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie :{},
            ratings:Number
        } 
        
        //this.changePage = this.changePage.bind(this);
    }
    componentDidMount(){
        //console.log(this.props)
        this.setState({
            movie:{...this.props.movieInfo},
            
        })
    }
    render(){
        //console.log(this.state.movie.vote_average)
        return (
                
            <Link to={`/movie/${this.state.movie.id}`} >
                <div className='card-container'>
                    <div className='card-img'>
                        {this.state.movie.poster_path == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg` } alt='movie card' style={{width:"100%",height:"100%"}}/>
                        :<img src={`http://image.tmdb.org/t/p/w185${this.state.movie.poster_path}`} alt='movie card' style={{width:"100%",height:"100%"}}/>}
                    </div>
                    <div className='card-info'>
                        <h4>{this.state.movie.title}</h4>
                        <RenderRatings
                            ratings={this.state.movie.vote_average}
                        />
                        {/* <span className='vote-details'>
                             {this.state.movie.vote_average} average rating on {this.state.movie.vote_count} votes
                        </span> */}
                        
                    </div>
                </div>
            </Link>
           
       

)
    }
}

export default MovieCard;
