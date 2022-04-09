import React from 'react';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="tShirt-container">

            </div>

            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;