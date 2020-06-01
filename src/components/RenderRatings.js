import React from 'react';
import Stars from 'react-rating';
import './RenderRatings.css';
function RenderRatings(props) {
    const number = props.ratings/2;

    return (
        <div className='starRatings'>
           <Stars
                emptySymbol={<i className="fa fa-star-o emptystar" aria-hidden="true"></i>}
                fullSymbol={<i className="fa fa-star fullstar" aria-hidden="true"></i>}
                initialRating={number}
                readonly
           />
          <span>   {props.ratings}</span>
        </div>
    )
}
export default  RenderRatings;