import React from 'react';
import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';
import ReviewProducts from '../ReviewProducts/ReviewProducts';
import './Orders.css'

const Orders = () => {
    const card = useLoaderData();
    console.log(card);
    return (
        <div className='shop-container'>
            <div className='reviewProducts'>
                {
                    card.map(product => <ReviewProducts
                        key={product.id}
                        product={product}
                    ></ReviewProducts>)
                }
            </div>
            <div className='cart-container'>
              <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Orders;