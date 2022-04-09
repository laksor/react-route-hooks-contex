import React from 'react';
import Cart from '../Cart/Cart';
import useTShirt from '../hooks/useTShirt';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirt();
    return (
        <div className="home-container">
            <div className="tShirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        ></TShirt>)
                }
            </div>

            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;