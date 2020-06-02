import React ,{Component}from 'react'
import { Link } from 'react-router-dom'

class Pagination extends Component {
constructor(props){
    super(props);
    
    this.renderPagination = this.renderPagination.bind(this)
}
componentDidMount(){
    console.log('mounts - ',this.props)

}
componentDidUpdate(){
    console.log('update - ',this.props)

}
   renderPagination =(page,total_pages,baseUrl) =>{
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
   render(){
       console.log('render - ',this.props)
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