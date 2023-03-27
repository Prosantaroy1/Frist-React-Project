import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img ? img: 'product-img'} alt='' />
            <div className='card-details'>
                <h2 className='title-name'>Name: {name}</h2>
                <p className='price-title'>Price: ${price}</p>
                <p className='company-title price-title'>Company: {seller}</p>
                <p className='price-title'>Rating: {ratings} star</p>
            </div>
            <button className='btn-add'>Add Card</button>
        </div>
    );
};

export default Product;