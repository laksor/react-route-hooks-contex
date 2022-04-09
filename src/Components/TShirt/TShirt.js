import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
    const {name, picture, price} = props.tShirt;
    return (
        <div className="TShirt-t">
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <p>Price: ${price}</p>
            <button >Add to cart</button>
        </div>
    );
};

export default TShirt;