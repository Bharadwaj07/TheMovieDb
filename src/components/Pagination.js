import React from 'react'
import { Link } from 'react-router-dom'

function Pagination(props) {
  const   renderPagination =(page,total_pages,baseUrl) =>{
    //console.log(baseUrl,page,total_pages)
        if(total_pages ==1){
            return null
        }
        if(page < total_pages && page ==1){
            //console.log(total_pages)
            return(
                <Link to={{pathname:`${baseUrl}?page=${parseInt(page) +1}`}}>
                    <button>Page {parseInt(page) + 1}</button>
                </Link>
            )
        }
        else if(page < total_pages){
           //console.log(baseUrl)
            return(
                <div>
                    <Link to={{pathname:`${baseUrl}?page=${parseInt(page) -1}`}}>
                        <button>Page {parseInt(page) - 1}</button></Link>
                    <Link to={{pathname:`${baseUrl}?page=${parseInt(page) +1}`}}><button>Page {parseInt(page) + 1}</button></Link>
                </div>
            )
        }
    }
    return (
        <div>
            {renderPagination(
                props.page,
                props.total_pages,
                props.baseUrl
            )}
        </div>
    )
}
export default Pagination;