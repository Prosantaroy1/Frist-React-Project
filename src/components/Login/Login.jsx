import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Ema-zone Login</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <button className='btn-submit' type="submit">Login</button>
            </form>
            <p><small>New Ama-Zone User?? <Link to="/signup">SignUp</Link> </small></p>
        </div>
    );
};

export default Login;