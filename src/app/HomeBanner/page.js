"use client";
import React, { useState, useEffect } from "react";
import { getContent } from "../../contentful/page";

const Banner = ({ interval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bannerData, setBannerData] = useState({ text: "", images: [] });
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent("homebanner"); 
        
        if (entries.length > 0) {
          const fields = entries[0].fields;
          setBannerData({
            text: fields.Bannertext || "",
            images: fields.bannerimages.map((img) => img.fields.file.url) || [],
          });
        }
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (bannerData.images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerData.images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [bannerData.images, interval]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (bannerData.images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 transition-all duration-[5000ms] scale-100 animate-zoom">
        <img
          src={bannerData.images[currentImageIndex]}
          alt="Home Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="absolute bottom-10 left-10 text-white text-4xl font-bold">
        {bannerData.text || "We build your dream home"}
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
