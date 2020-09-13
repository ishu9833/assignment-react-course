import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCreditCard} from "@fortawesome/free-solid-svg-icons"
import { Button} from 'react-bootstrap';


const CoursePurchase = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, crs) => total + crs.price, 0)
    return (
        <div className="Cart-area">
            <h5>Added to Cart</h5>
            <h6>Enrolled Course: {cart.length}</h6>
            <p><small>Price:${totalPrice} </small></p>
            <Button variant="success">
            <FontAwesomeIcon icon={faCreditCard}/> Purchase</Button>
        </div>
    );
};

export default CoursePurchase;