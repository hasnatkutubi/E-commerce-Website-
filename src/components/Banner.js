// src/components/Banner.js
import React, { useState, useEffect } from 'react';
import './Banner.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const Banner = () => {
    const images = [banner1, banner2, banner3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="banner">
            {images.map((image, index) => (
                <img 
                    key={index} 
                    src={image} 
                    alt={`Banner ${index + 1}`} 
                    className={index === currentImageIndex ? 'active' : ''} 
                />
            ))}
        </div>
    );
}

export default Banner;
