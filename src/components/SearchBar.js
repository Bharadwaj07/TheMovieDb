import React,{useState} from 'react';
import './SearchBar.css';
import {withRouter} from 'react-router-dom';
function SearchBar(props) {
    const [query,setSearch] = useState('');

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }
    const handleSubmit = (e) =>{
        setSearch(e.target.value);
        console.log(props)
        props.history.push(`/search/${query}/1`)
    }
    // const searchClass = search? "searchInput active":"searchInput" ;
        return (
               <header className='search-container' onSubmit={handleSubmit}>
                    <form  className='search'>
                        <i className="fa fa-search fa-lg search-icon" aria-hidden="true"></i>
                        <input type='text' className='search-input' placeholder='search...' onChange={handleChange}/>
                    </form>
                </header>
         
        )
   
}
export default  withRouter(SearchBar);
