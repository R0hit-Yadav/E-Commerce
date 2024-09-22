import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const images = [
    '/static/images/Coursel1.jpg',
    '/static/images/Coursel2.jpg',
    '/static/images/airpods.jpg',
    '/static/images/airtag.jpg',
    '/static/images/apple-watch.jpg',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <div
                className="carousel-images"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} />
                ))}
            </div>
            <button className="carousel-control prev" onClick={goToPrev}>
                &#10094;
            </button>
            <button className="carousel-control next" onClick={goToNext}>
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;

