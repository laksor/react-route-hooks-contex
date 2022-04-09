import React from 'react';

const TShirt = (props) => {
    const {name, picture, price} = props.tShirt;
    return (
        <div>
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <p>Price: ${price}</p>
        </div>
    );
};

export default TShirt;