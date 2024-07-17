// src/pages/Home.js
import React from 'react';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import './Home.css';


const Home = () => {
    const products = [
        { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 },
        { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 },
        { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 },
        { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 },
        { image: product1, title: 'Product 1', price: 10.00 },
        { image: product2, title: 'Product 2', price: 15.00 },
        { image: product3, title: 'Product 3', price: 20.00 },
        { image: product4, title: 'Product 4', price: 20.00 },
       ];

    return (
        <div className="home">
            <Banner />
            <section className="products-section">
                <h2>Featured Products</h2>
                <div className="products">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;
