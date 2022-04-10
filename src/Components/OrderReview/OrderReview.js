import React, { useContext } from 'react';
import { RingContext } from '../Home/Home';

const OrderReview = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h1>Order review</h1>
            <p>context : {ring}</p>
        </div>
    );
};

export default OrderReview;