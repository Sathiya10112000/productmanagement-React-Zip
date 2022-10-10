 import react, { useState } from 'react';

import { addCustomer} from '../Service/api';
import { NavLink, useNavigate } from 'react-router-dom';
import profile from "../login.png";


const initialValue = {
    
    username:'' ,
   email:'',
    password:'',
  mobileNumber:'',
    address:''
}



const Register = () => {
    const [user, setUser] = useState(initialValue);
    const {  username,email,password,address,mobileNumber } = user;
    const navigate=useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addCustomer(user)
        navigate('/')
       
    }

    return (
        <div className="main">
        <div className="sub-main">
        <div>
             <div className="imgs">
               <div className="container-image">
                 <img src={profile} alt="profile" className="profile"/>
    
               </div>
    
    
             </div>
    
    
             
        <form>
            <h1>Add User</h1>
            <div>
                <label htmlFor="my-input">Username</label>
                <input type="text"  onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
                
            </div>
            <div>
                <label htmlFor="my-input">Email</label>
                <input type="text"  onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
                
            </div>
            <div>
                <label htmlFor="my-input">Address</label>
                <input type="text" onChange={(e) => onValueChange(e)} name='address' value={address} id="my-input" />
                </div>
            <div>
                <label htmlFor="my-input">MobileNumber</label>
                <input type="text" onChange={(e) => onValueChange(e)} name='mobileNumber' value={mobileNumber} id="my-input"/>
            </div>
            <div>
                <label htmlFor="my-input">Password</label>
                <input type="text" onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input"/>
            </div>
           
           
            <NavLink to='/'>
            <div>
                <button  color="primary" onClick={() => addUserDetails()}>Register</button>
            </div>
            </NavLink>
            </form>
            </div>
            </div>
            </div>
    )
}

export default Register;