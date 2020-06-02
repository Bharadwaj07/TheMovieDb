import React, { Component } from 'react'
import './SideMenu.css';
import Discover from './Discover';
import Genre from './Genre';
import StickyBox from 'react-sticky-box';

 class SideMenu extends Component {
    render() {
        return (
            <StickyBox>
                <div className='sidemenu'>
                    <img src={require('../assets/logo.svg')} className='logo'/>
                    <div className='sidemenu-content'>
                        <Discover/>
                        <Genre/>
                    </div>
                </div>
            </StickyBox>
        )   
    }
}
export default SideMenu;