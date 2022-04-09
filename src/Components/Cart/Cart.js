import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemove}) => {
    return (
        <div>
            <h1>This is Cart</h1>
            {
                cart.map(tShirt => <p> 
                    {tShirt.name} 
                    <button onClick={() => handleRemove(tShirt)}>x</button>
                    </p> )
            }
            
            {cart.length === 0 ? <p>please add item </p> : <p>Thank you for shopping</p>}
        </div>
    );
};

export default Cart;