import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const{SignIn}= useContext(AuthContext);
    //login to home page
    const navigate = useNavigate();
    ///location
    const location = useLocation();
    console.log(location)
    ///////
    const from = location.state?.from?.pathname || '/';
    console.log(from);


    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email, password);

        SignIn(email,password)
        .then(result=>{
            const logged= result.user;
            console.log(logged);
            form.reset('');
            navigate(from, { replace: true });
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Ema-zone Login</h2>
            <form onSubmit={handleLogIn}>
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