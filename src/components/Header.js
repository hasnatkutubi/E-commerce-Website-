import React from 'react';
import './Header.css';
import logoImage from '../assets/logo.png'; // Adjust the path based on your actual file location

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logoImage} alt="Website Logo" />
            </div>
            
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/account">Account</a></li>
                </ul>
            </nav>

            {/* Search Bar Component */}
            <div className="search-bar">
            <form>
                    <input type="text" placeholder="Search..." /> 
                    <button type="submit">Search</button>
                     </form>
            </div>

            {/* Cart Section */}
            <div className="cart-logo">
                <a href="/cart">
                    <span className="cart-icon">🛒</span> 
                </a>
            </div>
        </header>
    );
}

export default Header;
