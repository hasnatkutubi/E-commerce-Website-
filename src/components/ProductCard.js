// src/components/ProductCard.js
import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = ({ image, title, price }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h3 className="product-title">{title}</h3>
            <p className="product-price">${price.toFixed(2)}</p>
            <button>Buy Now</button> <button>Add to Cart</button>
            
        </div>
    );
}

ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default ProductCard;
