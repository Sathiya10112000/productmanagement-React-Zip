import react, { useState } from 'react';

import { addOrder, addUser } from '../Service/api';
import { NavLink, useNavigate } from 'react-router-dom';
import style from "../StylesRoute/Create.module.css" ;



const initialValue = {
    
   
   userId:'',
   cartId:'',
   orderDate:''  
}



const OrderDetails = () => {
    const [user, setUser] = useState(initialValue);
    const { orderid, userId, cartId,orderDate } = user;
    const navigate=useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addOrderDetails = async() => {
        await addOrder(user);
        navigate('/payment')
       
    }

    return (
        <form>
            <div className={style.crudcreateh1}>
            <h1>Order Details</h1>
            
            </div>
            <table>
            <tr>
            <div className={style.label}>
            <label  htmlFor="my-input">UserId</label> 
              <input className={style.textfield} onChange={(e) => onValueChange(e)} name='userId' value={userId} id="my-input" /> 
            </div>
            </tr>
                <tr>
                    
            <div className={style.label}>
              <label  htmlFor="my-input">CartId</label> 
                <input className={style.textfield} onChange={(e) => onValueChange(e)} name='cartId' value={cartId} id="my-input" /> 
            </div>
            </tr>
            
           

            <tr>
            <div className={style.label}>
               <label htmlFor="my-input">OrderDate</label> 
                <input className={style.textfield} onChange={(e) => onValueChange(e)} name='orderDate' value={orderDate} id="my-input" /> 
                </div>
                </tr>

              
            </table>
            <NavLink to="/payment">
            <div className={style.label}>
                <button  color="primary" onClick={() => addOrderDetails()}>Add OrderDetails</button>
               
            </div>
            
           
            </NavLink>
            </form>
    )
}

export default OrderDetails;