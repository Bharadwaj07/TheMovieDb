import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import './NavBar.css';
class NavBar extends Component {
    constructor(props){
        super(props);
        this.state ={
            query:''
        }
        this.api_key = process.env.REACT_APP_API;
        this.handleSubmit =this.handleSubmit.bind(this)
        this.handleChange =this.handleChange.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            query:e.target.value
        })
       // console.log(this.props)
        this.props.history.push(`/search/${this.state.query}`)
         
        this.setState({
            query:''
        })
        
    }

    handleChange(e){

        this.setState({
            query:e.target.value
        })
        //console.log(this.state.searchItem)
    }
    render() {
        return (
            <header>
                <div className="navbar">
                    <div className='logo'>
                        <h2><Link to='/'>MovieDb</Link></h2>
                    </div>
                    <nav>
                        <div>
                            <form className='searchbar' onSubmit={this.handleSubmit}>
                                
                                <input type='text' placeholder='Search' onChange={this.handleChange}/>
                            </form>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default withRouter(NavBar);