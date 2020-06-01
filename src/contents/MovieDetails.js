import React,{Component} from 'react';
import './MovieDetails.css';
import RecomendMovie from './RecomendMovie';

import RenderRatings from '../components/RenderRatings';
import Trailer from '../components/Trailer';
class MovieDetails extends Component {
    constructor(props){
        super(props);
        this.movieId = this.props.match.params.movieid
        this.api_key = process.env.REACT_APP_API;
        
        this.state ={
            movieDetails:{},
            ytResults:[],
            language:'',
            genres:[],
            modalOpened:false
        }
        this.setModalopened = this.setModalopened.bind(this);
    }
    componentDidMount(){
        //fetching data
       fetch(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${this.api_key}&append_to_response=credits,videos`)
       .then(data => data.json())
       .then(data =>{
            this.setState({
               movieDetails:{...data},
               ytResults:[...data.videos.results],
               language:data.spoken_languages[0].name,
               genres:[...data.genres]
           })
       })
       
    }
    componentDidUpdate(prevProps){
       if(this.props.location.pathname!==prevProps.location.pathname){
       
           this.movieId = this.props.match.params.movieid
      
           fetch(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${this.api_key}&append_to_response=credits,videos`)
            .then(data => data.json())
            .then(data =>{
                
                this.setState({
                    movieDetails:{...data},
                    ytResults:[...data.videos.results],
                    languages:data.spoken_languages[0].name,
                    genres:[...data.genres]
                })
               
            })
       }    
      
}
setModalopened(modalStatus){
    //console.log(modalStatus)
    this.setState({
        modalOpened:modalStatus
    })
}


    render(){
       // console.log(this.state.ytResults)
        return (
            <div>
                <div className='detail-container'>
                    <div className='detail-img'>
                    {this.state.movieDetails.poster_path == null ? <img src={require('../assets/logo.svg')} alt='movie card' style={{width:"100%",height:"100%"}}/>
                    :<img src={`http://image.tmdb.org/t/p/w185${this.state.movieDetails.poster_path}`} alt='movie card' style={{width:"100%",height:"100%"}}/>}
                    </div>
                    <div className='detail-info'>
                        <div className='movietitle'>
                            <h3>{this.state.movieDetails.original_title}</h3>
                            <h4>{this.state.movieDetails.tagline}</h4>
                        </div>
                        <div className='movie-rantingsAndruntime'>
                            <div className='ratings'>
                                <RenderRatings
                                    ratings={this.state.movieDetails.vote_average}
                                />
                                
                            </div>
                            <div className='info'>
                                {Info(
                                    this.state.language,
                                    this.state.movieDetails.runtime,
                                    splitYear(this.state.movieDetails.release_date)
                                )}
                            </div>
                        </div>
                        <div className='genreDetails'>
                                <h3>The Genres</h3>
                                <div>
                                    {renderGenre(this.state.genres)}
                                </div>
                                   
                                
                        </div>
                        <div className='overview'>
                            <h3>The Synopsys</h3>
                            <p>
                                {this.state.movieDetails.overview}
                            </p>
                        </div>

                        <div>
                            
                            <div className='connect'>
                                <button><a href={`https://www.imdb.com/title/${this.state.movieDetails.imdb_id}/`}>IMDB</a>
                                    <i className="fa fa-imdb" aria-hidden="true"></i>
                                </button>
                                <button><a href={this.state.movieDetails.homepage}>Website</a>
                                <i className="fa fa-link" aria-hidden="true"></i></button>
                                <Trailer
                                    videos={this.state.ytResults}
                                />
                            </div>     
                        </div>
                    </div>
                </div>
             
                <div>
                    <h4 className='recomendation'>Recocmended</h4>
                    <h4 className='recomend'>Movies</h4>
                    <RecomendMovie movieId={this.movieId} />
                </div>
                
            </div>
        )
    }
}

export default  MovieDetails;

function Info(languages,runtime,date){
    return(
        <div>
            <span>{languages}</span>
            <span>/</span>
            <span>{runtime} MIN.</span>
            <span>/</span>
            <span>{date}</span>
        </div>
    )
}
function splitYear(date){
    if (!date) {
        return;
      }
      const [year] = date.split('-');
      return year;
}

function renderGenre(genres){
    return genres.map(genre =>
        <span key={genre.id}>
           <i className="fa fa-bullseye genreicon" aria-hidden="true"></i>
             {genre.name} 
        </span>);

}