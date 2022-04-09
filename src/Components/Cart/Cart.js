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
        </div>
    );
};

export default Cart;