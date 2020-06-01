import React, { Component } from 'react'
import './SideMenu.css';
import Discover from './Discover';
import Genre from './Genre';


 class SideMenu extends Component {
    render() {
        return (
            <div className='sidemenu'>
                <img src={require('../assets/logo.svg')} className='logo'/>
                <div className='sidemenu-content'>
                    <Discover/>
                    <Genre/>
                </div>
            </div>
        )   
    }
}
export default SideMenu;