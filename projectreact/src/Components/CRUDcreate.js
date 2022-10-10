import react, { useState } from 'react';

import { addUser } from '../Service/api';
import { NavLink, useNavigate } from 'react-router-dom';
import style from "../StylesRoute/Create.module.css";



const initialValue = {

    productImage: '',
    productName: '',
    brand: '',
    description: '',
    availableCount: '',
    price: ''

}



const CRUDcreate = () => {
    const [user, setUser] = useState(initialValue);
    const { id, productName, brand, availableCount, description, price, productImage } = user;
    const [file, setFile] = useState();
    const navigate = useNavigate();

    function handleChange(event) {
        setFile(event.target.files[0])
      }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/adminproducts')

    }

    return (
        <form>
            <div className={style.crudcreateh1}>
                <h1>Add product</h1>

            </div>
            <table>
                <tr>
                    {/* <div className={style.label}>
                        <label htmlFor="my-input">productImage</label>
                        <input className={style.textfield} onChange={(e) => onValueChange(e)} name='productImage' value={productImage} id="my-input" />
                    </div> */}
                    <div>
                    <input type="file" onChange={(e) => onValueChange(e)} name='productImage' value={productImage} id="my-input"/>
                    </div>
                </tr>
                <tr>

                    <div className={style.label}>
                        <label htmlFor="my-input">ProductName</label>
                        <input className={style.textfield} onChange={(e) => onValueChange(e)} name='productName' value={productName} id="my-input" />
                    </div>
                </tr>



                <tr>
                    <div className={style.label}>
                        <label htmlFor="my-input">Brand</label>
                        <input className={style.textfield} onChange={(e) => onValueChange(e)} name='brand' value={brand} id="my-input" />
                    </div>
                </tr>

                <tr>
                    <div className={style.label}>
                        <label htmlFor="my-input">Description</label>
                        <input className={style.textfield} onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" />
                    </div>
                </tr>

                <tr>
                    <div className={style.label}>
                        <label htmlFor="my-input">AvailableCount</label>
                        <input className={style.textfield} onChange={(e) => onValueChange(e)} name='availableCount' value={availableCount} id="my-input" />
                    </div>
                </tr>
                <div className={style.label}>
                    <label htmlFor="my-input">Price</label>
                    <input className={style.textfield} onChange={(e) => onValueChange(e)} name='price' value={price} id="my-input" />
                </div>
            </table>
            <NavLink to="/adminproducts">
                <div className={style.label}>
                    <button color="primary" onClick={() => addUserDetails()}>Add Product</button>

                </div>


            </NavLink>
        </form>
    )
}

export default CRUDcreate;