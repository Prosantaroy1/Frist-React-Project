import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
     //btn ar data
     const [card, setCard] = useState([])
    const handleAddCard = (product)=>{
        const newCard =[...card, product];
        setCard(newCard);
        console.log(newCard)
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                
                {
                    products.map(product =><Product
                     key={product.id}
                     product={product}
                     handleAddCard={handleAddCard}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;