import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header '>
            <img src={logo} alt=''/>
            <div className='navber'>
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/inventory">inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;