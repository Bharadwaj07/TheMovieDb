import React, { Component } from 'react'
import './SideMenu.css';
import Discover from './Discover';
import Genre from './Genre';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faChartBar,faHeart,faCalendar,faDotCircle} from '@fortawesome/free-solid-svg-icons'
library.add(faChartBar,faHeart,faCalendar,faDotCircle)

 class SideMenu extends Component {
    render() {
        return (
            <div className='sidemenu'>
                <div className='sidemenu-content'>
                    <Discover/>
                    <Genre/>
                </div>
            </div>
        )   
    }
}
export default SideMenu;