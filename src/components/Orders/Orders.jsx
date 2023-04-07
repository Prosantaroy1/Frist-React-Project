import React from 'react';
import Card from '../Card/Card';

const Orders = () => {
    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h1>this is orders pages</h1>
            </div>
            <div className='cart-container'>
              <Card card={[]}></Card>
            </div>
        </div>
    );
};

export default Orders;