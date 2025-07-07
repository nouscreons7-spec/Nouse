"use client";
import React, { useState, useEffect } from "react";

const Banner = ({ data, interval = 5000 }) => {
  if (!data || !data.items) {
    return null; 
  }
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!data?.bannerimages || data.bannerimages.length === 0) return;

    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % data.bannerimages.length
      );
    }, interval);

    return () => clearInterval(timer);
  }, [data?.bannerimages, interval]);

  const currentImageObj = data.bannerimages[currentImageIndex];
  const imageUrl = currentImageObj?.fields?.file?.url
    ? `https:${currentImageObj.fields.file.url}`
    : "";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 transition-all duration-[5000ms] scale-100 animate-zoom">
        <img
          src={imageUrl}
          alt="Home Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="absolute bottom-10 left-10 text-white text-4xl font-bold">
        {data.Bannertext || "We build your dream home"}
      </h1>

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
