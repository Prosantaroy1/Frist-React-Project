import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header '>
            <img src={logo} alt=''/>
            <div className='navber'>
                <a href="/">Shop</a>
                <a href="/orders">orders</a>
                <a href="/inventory">inventory</a>
                <a href="/login">Login</a>
                <a href="/signup">SignUp</a>
            </div>
        </div>
    );
};

export default Header;