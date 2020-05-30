import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SideMenu from '../components/SideMenu';
import {Switch,Route, Redirect} from 'react-router-dom';
import './Home.css';
import DiscoverMovies from './DiscoverMovies';
import GenreMovies from './GenreMovies';
import SearchMovies from './SearchMovies';
import MovieDetails from './MovieDetails';
class Home extends Component {
    render() {
        // console.log(this.state.movies)
        return (
            <div>
              <NavBar/>
             <div className='conatiner'>
                <SideMenu/> 
                
               <div className='movie-container'>
                    <Switch>
                        
                        <Route
                        path='/discover/:movieType'
                        component={DiscoverMovies}
                        />
                        <Route
                            path='/genre/:genreId'
                            component={GenreMovies}
                        />
                        <Route
                            path='/search/:query'
                            component={SearchMovies}
                        />
                        <Route
                            path='/movie/:movieid'
                            component={MovieDetails}
                        />
                        <Route
                            exact
                            path='/'
                            render={() => <Redirect
                                to='/discover/popular'
                            />}
                        />
                    </Switch>
               </div>

             </div>
            </div>
        )
    }
}
export default  Home;