import React from 'react';
import './TShirt.css';

const TShirt = ({handleAddToCart, tShirt}) => {
    const {name, picture, price} = tShirt;
    return (
        <div className="TShirt-t">
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <p>Price: $ {price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Add to cart</button>
        </div>
    );
};

export default TShirt;