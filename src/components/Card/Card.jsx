import React from 'react';
import './Card.css'

const Card = ({card}) => {
    //total set
    let total =0;
    let totalShipping =0;
    for(const product of card){
        total =total+ product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax= total*7/100;
    return (
        <div className='card'>
            <h4 style={{textAlign: 'center'}}>Order List</h4>
            <p>Seleted Items: {card.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: </h5>
        </div>
    );
};

export default Card;