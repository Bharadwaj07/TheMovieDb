import React, { Component } from 'react';
import './NavBar.css';
class NavBar extends Component {
    render() {
        return (
            <header>
                <div className="navbar">
                    <div className='logo'>
                        <h2><a href='#'>MovieDb</a></h2>
                    </div>
                    <nav>
                        <div>
                            <form className='searchbar' onSubmit={this.props.handleSubmit}>
                                {/* <label>Search</label> */}
                                <input type='text' placeholder='Search' onChange={this.props.handleChange}/>
                            </form>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default NavBar;