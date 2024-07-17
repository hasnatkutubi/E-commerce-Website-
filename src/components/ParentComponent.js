import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ParentComponent = ({ products }) => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        // Optionally, you could show a confirmation message or update UI for cart
    };

    return (
        <div>
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    onAddToCart={handleAddToCart} // Ensure onAddToCart is passed correctly
                />
            ))}
        </div>
    );
}

export default ParentComponent;
