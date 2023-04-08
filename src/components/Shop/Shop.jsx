import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

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
        const savedCard = [];
        //console.log(storedCard);
        //step 1
        for(const id in storedCard){
            //step 2
            const addedProduct = products.find(product => product.id === id);
            //step 3
            if(addedProduct){
                const qunatity = storedCard[id];
                addedProduct.qunatity = qunatity;
                //step 4
                savedCard.push(addedProduct);
            }
            //step 5
            setCard(savedCard);
        }
     }, [products])

    const handleAddCard = (product)=>{
       // const newCard =[...card, product];
       let newCard = 0;
       const exists = card.find(pd => pd.id === product.id);
       if(!exists){
         product.qunatity = 1;
         newCard = [...card, product]
       }
       else{
         exists.qunatity = exists.qunatity + 1;
         const remaining = card.filter(pd => pd.id !== product.id);
         newCard = [...remaining, exists]
       }
        setCard(newCard);
        //console.log(newCard)
        addToDb(product.id)
    }
    const handleClearcard =()=>{
        setCard([]);
        deleteShoppingCart()
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
                <Card
                 card={card}
                 handleClearcard={handleClearcard}
                 >
                    <Link  className='proceed-link' to='/orders'>
                        <button className='btn-proceed'>
                            Orders Review
                        </button>
                    </Link>
                 </Card>
            </div>
        </div>
    );
};

export default Shop;