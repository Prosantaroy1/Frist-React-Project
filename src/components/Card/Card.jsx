import React from 'react';
import './Card.css'

const Card = ({card}) => {
    //total set
    let totalPrice =0;
    let totalShipping =0;
    for(const product of card){
        totalPrice =totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax= totalPrice*7/100;
    const GrandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='card'>
            <h4 style={{textAlign: 'center'}}>Order List</h4>
            <p>Seleted Items: {card.length}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {GrandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Card;