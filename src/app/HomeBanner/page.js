"use client";
import React, { useState, useEffect } from "react";

const Banner = ({ data, interval = 5000 }) => {
  if (!data) return null;
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
 <div className="relative w-full h-[50vh]  lg:h-screen overflow-hidden">
    <div className="absolute inset-0 transition-all duration-[5000ms] scale-100 animate-zoom">
      <img
        src={imageUrl}
        alt="Home Banner"
        className="w-full h-full object-cover"
      />
    </div>

    <h1 className="absolute bottom-6 left-4 text-white text-xl font-bold md:text-4xl md:bottom-10 md:left-10">
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
