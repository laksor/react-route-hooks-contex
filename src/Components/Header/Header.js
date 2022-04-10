import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1 className="fw-bold py-5 shadow-sm mb-4">T-Shirt Shop</h1>
            <nav className="py-4 fw-bold bg-success">
            <Link to='/home'>Home</Link>
            <Link to='/orderReview'>OrderReview</Link>
            </nav>
        </div>
    );
};

export default Header;