import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import './Discover.css';
class Discover extends Component {
    render() {
        return (
            <div className='discover'>
                <h2>Discover</h2>
                <div className='item'>
                    <i className="fa fa-heart faicon" aria-hidden="true"></i>
                    <Link to={{pathname:`/discover/popular/1`}}><h4>Popular</h4></Link>
                </div>
               <div className='item'>
                    <i className="fa fa-bar-chart faicon" aria-hidden="true"></i>
                    <Link to={{pathname:`/discover/upcoming/1`}}><h4>Upcomming</h4></Link>
               </div>
               <div className='item'>
                    <i className="fa fa-calendar-o faicon" aria-hidden="true"></i>
                    <Link to={{pathname:`/discover/top_rated/1`}}><h4>Top Rated</h4></Link>
               </div>
               
                
            </div>
        )
    }
}

export default  withRouter(Discover);