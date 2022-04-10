import React from 'react';
import './TShirt.css';

const TShirt = ({handleAddToCart, tShirt}) => {
    const {name, picture, price} = tShirt;
    return (
        <div className="TShirt-t mt-5">
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <p>Price: $ {price}</p>
            <button className="btn btn-danger rounded-pill px-3"onClick={() => handleAddToCart(tShirt)}>Add to cart</button>
        </div>
    );
};

export default TShirt;