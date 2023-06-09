import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Card = ({card, handleClearcard, children}) => {
   // console.log(card)
    //total set
    let totalPrice =0;
    let totalShipping =0;
    let qunatity = 0;
    for(const product of card){
       //console.log(product);
        //product local
        //if(product.qunatity === 0){
            //product.qunatity= 1;
        //}
        totalPrice =totalPrice + product.price * product.qunatity;
        totalShipping = totalShipping + product.shipping;
        qunatity = qunatity + product.qunatity;
    }
    const tax= totalPrice*7/100;
    const GrandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='card'>
            <h4 style={{textAlign: 'center'}}>Order List</h4>
            <p>Seleted Items: {qunatity}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {GrandTotal.toFixed(2)}</h5>
            <button className='clear-btn' onClick={handleClearcard}>
                <span>Crear card</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Card;