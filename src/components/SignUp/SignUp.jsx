import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    //error state
    const[error, setError]= useState('');
    const {createUser}= useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email=form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)

        if(password !==confirm){
           setError('Your passsword did not match??') ;
            return
        }
        else if(password.length < 6){
            setError('your password must be 6 char??');
            return
        }
        setError('');

        createUser(email, password)
        .then(result=>{
            const logged= result.user;
            console.log(logged);
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Ema-zone Login</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">confirm Password</label>
                    <input type="password" name="confirm" id=""/>
                </div>
                <button className='btn-submit' type="submit">SignUp</button>
            </form>
            <p><small>Already have a account?? <Link to="/login">Login</Link> </small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;