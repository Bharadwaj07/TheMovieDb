import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import './Discover.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
class Discover extends Component {
    render() {
        return (
            <div className='discover'>
                <h2>Discover</h2>
                <div className='item'>
                    <FontAwesomeIcon icon='heart' className='faicon'/>
                    <Link to={{pathname:`/discover/popular`}}><h4>Popular</h4></Link>
                </div>
               <div className='item'>
                    <FontAwesomeIcon icon='chart-bar' className='faicon'/>
                    <Link to={{pathname:`/discover/upcoming`}}><h4>Upcomming</h4></Link>
               </div>
               <div className='item'>
                    <FontAwesomeIcon icon='calendar' className='faicon'/>
                    <Link to={{pathname:`/discover/top_rated`}}><h4>Top Rated</h4></Link>
               </div>
               
                
            </div>
        )
    }
}

export default  withRouter(Discover);