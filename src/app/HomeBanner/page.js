"use client";
import React, { useState, useEffect } from "react";

const Banner = ({ images, interval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-full h-screen  overflow-hidden">
      <div className="absolute inset-0 transition-all duration-[5000ms] scale-100 animate-zoom">
        <img
          src={images[currentImageIndex]}
          alt="Home Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="absolute bottom-10 left-10 text-white text-4xl font-bold">
        We build your dream home
      </h1>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes zoomEffect {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          .animate-zoom {
            animation: zoomEffect 5s ease-in-out infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
