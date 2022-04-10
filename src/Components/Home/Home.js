import React, { createContext, useState, toLowerCase } from "react";
import Cart from "../Cart/Cart";
import useTShirt from "../hooks/useTShirt";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

export const RingContext = createContext("Ring");

const Home = () => {
  const [tShirts] = useTShirt();
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

  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = event => {
    const searchText =  event.target.value;
    const match = tShirts.filter(t => t.name.includes(searchText));
    setSearchResult(match);
  }

  return (
    <RingContext.Provider value="lur ring">
      <div>
        <input onChange={handleSearch} type="text" placeholder="Search" className="mt-5 rounded "></input>
      </div>

      <div className="home-container">
        <div className="tShirt-container">
          {searchResult.map((tShirt) => (
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
