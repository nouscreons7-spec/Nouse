"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SlidingProjects = ({ categories }) => {
  if (!categories || categories.length === 0) return null;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = categories[selectedIndex];

  // Safely access image URL and content
  const imageUrl = current?.fields?.image?.fields?.file?.url
    ? `https:${current.fields.image.fields.file.url}`
    : "";

  const title = current?.fields?.title || "Untitled";
  const keyLabel = current?.fields?.key || `Category ${selectedIndex + 1}`;

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % categories.length);
  };

  const prevImage = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

  return (
    <div className="relative w-full p-2 mx-auto md:px-10">
      {/* Main Image Display */}
      <div
        className="relative w-full h-[550px] bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0  bg-opacity-30 flex items-start justify-center pt-10 ">
          <h2 className="text-white text-2xl font-bold max-w-[60%] md:text-4xl md:max-w-[40%]">
            {title}
          </h2>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer"
      >
        <FaArrowRight />
      </button>

      {/* Category Buttons */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 max-w-2xl  bg-opacity-30 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-[80%] bottom-8">
        {categories.map((cat, index) => (
          <button
            key={cat.fields?.key || index}
            onClick={() => setSelectedIndex(index)}
            className={`cursor-pointer px-4 py-2 rounded-lg text-white text-xs w-full h-10 ${
              selectedIndex === index
                ? "bg-gray-900"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {(cat.fields?.key || `Category ${index + 1}`).toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlidingProjects;
