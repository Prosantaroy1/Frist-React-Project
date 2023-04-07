import React, { useState } from 'react';
import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';
import ReviewProducts from '../ReviewProducts/ReviewProducts';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedcard = useLoaderData();
    //console.log(card);
    const [card, setCard] = useState(savedcard );
    const handleRemoveCard = (id) =>{
        const remaining = card.filter(product => product.id !==id);
        setCard(remaining);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='reviewProducts'>
                {
                    card.map(product => <ReviewProducts
                        key={product.id}
                        product={product}
                        handleRemoveCard={handleRemoveCard}
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