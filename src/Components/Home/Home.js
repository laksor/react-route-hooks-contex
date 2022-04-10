import React, { createContext, useState } from "react";
import Cart from "../Cart/Cart";
import useTShirt from "../hooks/useTShirt";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

export  const RingContext = createContext('Ring');

const Home = () => {
  const [tShirts, setTShirts] = useTShirt();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedItem) => {
    const exist = cart.find((tShirt) => tShirt._id === selectedItem._id);
    if (!exist) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("item already added");
    }
  };

  const handleRemove = (selectedItem) => {
    const rest = cart.filter((tShirt) => tShirt._id !== selectedItem._id);
    setCart(rest);
  };
  return (
    <RingContext.Provider value='alur ring'>
      <div className="home-container">
        <div className="tShirt-container">
          {tShirts.map((tShirt) => (
            <TShirt
              key={tShirt._id}
              tShirt={tShirt}
              handleAddToCart={handleAddToCart}
            ></TShirt>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart} handleRemove={handleRemove}></Cart>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Home;
