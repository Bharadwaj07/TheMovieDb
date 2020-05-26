import React,{Component} from 'react'
import './MovieDetails.css'
import RecomendMovie from './RecomendMovie';
class MovieDetails extends Component {
    constructor(props){
        super(props);
        this.movieId = this.props.match.params.movieid
        this.api_key = process.env.REACT_APP_API;
        this.state ={
            movieDetails:{}
        }
    }
    componentDidMount(){
       fetch(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=e3d78b587cd1b3ff9240b60629168fa9&append_to_response=credits`)
       .then(data => data.json())
       .then(data =>{
           //console.log(data)
           this.setState({
               movieDetails:{...data}
           })
           console.log(this.state.movieDetails)
       })
    }
    render(){
        
        return (
            <div>
                <div className='detail-container'>
                    <div className='detail-img'>
                    {this.state.movieDetails.poster_path == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg` } alt='movie card image' style={{width:"100%",height:"100%"}}/>
                    :<img src={`http://image.tmdb.org/t/p/w185${this.state.movieDetails.poster_path}`} alt='movie card image' style={{width:"100%",height:"100%"}}/>}
                    </div>
                    <div className='detail-info'>
                        <div className='movie-title'>
                            <h1>{this.state.movieDetails.original_title}</h1>
                            <h2>{this.state.movieDetails.tagline}</h2>
                        </div>
                        <div className='movie-rantingsAndruntime'>
                            <div className='ratings'>
                                <span>
                                    Ratings: {this.state.movieDetails.vote_average}
                                </span>
                            </div>
                            <div className='runtimeDetails'>
                            {this.state.movieDetails.runtime} min 
                            </div>
                        </div>
                        <p>
                            Overview: {this.state.movieDetails.overview}
                        </p>
                        <h4>Release date: {this.state.movieDetails.release_date}</h4>

                        <div>
                            <h3>The Cast .</h3>
                            <div>
                                cast here..
                            </div>
                        </div>
                    </div>
                </div>
                <div className='recomendation'>
                    <h3>Recocmended .</h3>
                    <RecomendMovie movieId={this.movieId}/>
                </div>
            </div>
        )
    }
}

export default  MovieDetails;
