// src/pages/Shop.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';
import './Shop.css';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';

const Shop = () => {
    const products = [
        { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 },
        { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 }, { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 }, { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 }, { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 }, { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 }, { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 }, { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 }, { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 },
    ];

    return (
        <div className="shop">
            <Banner />
            <h1>Shop</h1>
            <section className="products">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </section>
        </div>
    );
}

export default Shop;
