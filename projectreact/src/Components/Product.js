import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useThemeHook } from '../Components/Theme';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { navigate } from '@reach/router';
import { NavLink } from 'react-router-dom';


const Product = (props) => {
    let {productId ,productImage,productName,price,brand} = props.data;
    const [theme] = useThemeHook();
    const {addItem}=useCart();
    const addToCart = () =>{
        addItem(props.data);
    }
    

   
    return (
        <Card 
            style={{ width: '18rem', height: 'auto' }}
            className={`${theme? 'bg-light-black text-light':'bg-lihgt text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}>
            <div style={{ background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
            justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
                <div style={{ width: '9rem'}}>
                    <img variant="top" src={productImage} className="img-fluid" />
                </div>
            </div>
            <Card.Body>
            <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                   Id: {productId}
                </Card.Title>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                    Name : {productName}
                </Card.Title>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                    Brand: {brand}
                </Card.Title>
                <Card.Title>
                   Price:  Rs. <span className="h3">{price}</span>
                </Card.Title>
                <Button
                    onClick={()=> addToCart()}
                    className={`${theme? 'bg-dark-primary text-black':'bg-light-primary' } d-flex align-item-center m-auto border-0`}
                >
                    <BsCartPlus size="1.8rem" /> 
                    Add to cart
                </Button>
                <br></br>
                <NavLink to='/payment'>
                <Button
                    
                    className={`${theme? 'bg-dark-primary text-black':'btn btn-success' } d-flex align-item-center m-auto border-0`}
                    id="buy" 
                >
                    Buy now
                </Button>
                </NavLink>
            </Card.Body>
        </Card>
    );
};

export default Product;