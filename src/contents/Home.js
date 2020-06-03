import React, { Component } from 'react';
import SideMenu from '../components/SideMenu';
import {Switch,Route, Redirect} from 'react-router-dom';
import './Home.css';
import DiscoverMovies from './DiscoverMovies';
import GenreMovies from './GenreMovies';
import SearchMovies from './SearchMovies';
import MovieDetails from './MovieDetails';
import SearchBar from '../components/SearchBar';
// import {library} from '@fortawesome/fontawesome-svg-core';
// import {faChartBar,faHeart,faCalendar,faDotCircle,faSearch,fas,far} from '@fortawesome/free-solid-svg-icons'
// library.add(faChartBar,faHeart,faCalendar,faDotCircle,faSearch)
class Home extends Component {
    render() {
        // console.log(this.state.movies)
        return (
            <div>
             <div className='conatiner'>
                <SideMenu/> 
                
               <div className='movie-container'>
                <SearchBar/>
                    <Switch>
                        
                        <Route
                        path='/discover/:movieType/:page'
                        component={DiscoverMovies}
                        />
                        <Route
                            path='/genre/:genreId/:page'
                            component={GenreMovies}
                        />
                        <Route
                            path='/search/:query/:page'
                            component={SearchMovies}
                        />
                        <Route
                            path='/movie/:movieid/:page'
                            component={MovieDetails}
                        />
                        <Route
                            exact
                            path='/'
                            render={() => <Redirect
                                to='/discover/popular/1'
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