import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth';
import profile from "../login.png";
import error from './Style.css';


const Login = () => {
    const navigate=useNavigate('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const [errmsg,seterrmsg]=useState('')
    const [erremail,seterremail]=useState('')
    const [errpassword,seterrpassword]=useState('')
    const auth=useAuth()
    const handlesubmit=(e)=>{
        e.preventDefault()
        if(email.trim()===''){
        seterremail('please enter a username')}
        else if(password===''){
        seterrpassword('please enter a password')
    }
    else{
        axios.post('https://localhost:7032/api/Authenticate/Authenticate',{
        "email":email,
        "password":password
    })
        .then((res)=>{
            
           localStorage.setItem('token',res.data.token)
           auth.login(email)
           navigate('/customerproducts')
            })
            .catch((res)=>{
                seterrmsg('Bad Credentials')
                auth.user=null
        })
    }
}
    
    const changeemail=(e)=>{
        setemail(e.target.value)
        seterremail('')
        seterrmsg('')
        
    }
    const changepassword=(e)=>{
        setpassword(e.target.value)
        seterrpassword('')
        seterrmsg('')
    
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
    
        <form onSubmit={handlesubmit}>
            <p className="error">{errmsg}</p>
            <h2>Sign in</h2>
            <div>
                <label htmlFor='username'>Username</label>
                <input id='email' type='text' value={email} onChange={changeemail}></input>
                <p  className="error">{erremail}</p>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input id='password' type='Password' value={password} onChange={changepassword}></input>
                <p className="error">{errpassword}</p>
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
              
        
    
    <hr></hr>
    <div>
               New user?click to sign up!! <button href='#' onClick={()=>{navigate('/register')}}>Register</button>
           </div>
           <br />
           </form>
           </div>
           </div>
           </div>
    
   
  )
  }

export default Login

