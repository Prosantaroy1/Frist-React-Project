import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
     //local storages
     useEffect(()=>{
        const storedCard = getShoppingCart();
        const savedCart = [];
        //console.log(storedCard);
        //step 1
        for(const id in storedCard){
            //step 2
            const addedProduct = products.find(product => product.id===id);
            //step 3
            if(addedProduct){
                const qunatity = storedCard[id];
                addedProduct.qunatity = qunatity;
                //step 4
                savedCart.push(addedProduct);
            }
        }
     },[products])
     
    const handleAddCard = (product)=>{
        const newCard =[...card, product];
        setCard(newCard);
        //console.log(newCard)
        addToDb(product.id)
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