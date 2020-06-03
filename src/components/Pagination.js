import React ,{Component}from 'react'
import { Link } from 'react-router-dom'
import './Pagination.css';
class Pagination extends Component {
constructor(props){
    super(props);
    
    this.renderPagination = this.renderPagination.bind(this)
}
   renderPagination =(page,total_pages,baseUrl) =>{
    //console.log(typeof(page))
        if(total_pages ===1){
            return null
        }
        if(page < total_pages && page ===1){
            //console.log(total_pages)
            return(
                <Link to={{pathname:`${baseUrl}/${parseInt(page)+1}`}}>
                    <button className='nextPage'>
                        Page {parseInt(page) + 1}
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </Link>
            )
        }
        else if(page < total_pages){
           //console.log(baseUrl)
            return(
                <div>
                    <Link to={{pathname:`${baseUrl}/${parseInt(page)-1}`}}>
                        <button className='prevPage'>
                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                            Page {parseInt(page) - 1}
                        </button>
                    </Link>
                    <Link to={{pathname:`${baseUrl}/${parseInt(page)+1}`}}>
                        <button className='nextPage'>
                            Page {parseInt(page) + 1}
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </button>
                    </Link>
                </div>
            )
        }
    }
   render(){
       //console.log('render - ',this.props)
    return (
        <div>
            {this.renderPagination(
                this.props.page,
                this.props.total_pages,
                this.props.baseUrl
            )}
        </div>
    )
   }
}
export default Pagination;