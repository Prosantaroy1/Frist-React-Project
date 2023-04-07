import React from 'react';
import './ReviewProducts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewProducts = ({product, handleRemoveCard}) => {
    //console.log(product);
    const {img,quantity,price,name, id} = product;
    return (
        <div className='review-item'>
            <img src={img} alt=''/>
            <div className='review-detalis'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='oranges-title'>${price}</span></p>
                <p>Orders Quantity: <span className='oranges-title'>{quantity}</span></p>
            </div>
            <button className='btn' onClick={()=> handleRemoveCard(id)}>
              <FontAwesomeIcon className='icon-btn' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewProducts;