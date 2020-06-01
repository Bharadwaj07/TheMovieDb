import React,{useState} from 'react';
import './SearchBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function SearchBar(props) {
    const submitSearch =(e)=>{
        e.preventDefault();
        alert("searched..!")
    }
    const [search,setSearch] = useState(false);

    const openSearch = ()=>{
        setSearch(true);
    } 
    // const searchClass = search? "searchInput active":"searchInput" ;
        return (
            <div className='search'>
                <form onSubmit={submitSearch}>
                    <input type='text' className='search-input' placeholder='search...'/>
                    <i className="fa fa-search fa-lg" aria-hidden="true"></i>
                </form>
            </div>
        )
   
}
export default  SearchBar;
