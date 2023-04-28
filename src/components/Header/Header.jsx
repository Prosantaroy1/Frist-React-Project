
import './Header.css';
import logo from '../../images/Logo.svg';
import { useContext } from 'react';
import  { AuthContext } from '../Provider/AuthProvider';


const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    const handleLogout=()=>{
        logOut()
        .then(result=>{})
        .catch(error=>{})
    }
    return (
        <div className='header '>
            <img src={logo} alt=''/>
            <div className='navber'>
                <a href="/">Shop</a>
                <a href="/orders">orders</a>
                <a href="/inventory">inventory</a>
                <a href="/login">Login</a>
                <a href="/signup">SignUp</a>
                {
                    user && 
                    <span style={{color: 'green', paddingLeft: '12px'}}>WelCome {user.email}
                    <button onClick={handleLogout}>SignOut</button></span>
                }
            </div>
        </div>
    );
};
/*
  {
                    user&& <span style={{color: 'green', paddingLeft: '12px'}}>WelCome {user.email}</span>
                }*/
export default Header;