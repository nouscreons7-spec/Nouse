
"use client"

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const categories = {
  architecture: {
    id: 1,
    image: "/section2img/home1.jpg",
    title: "We build great architecture",
  },
  construction: {
    id: 2,
    image: "/section2img/home2.jpg",
    title: "Skyscraper build that empowers",
  },
  interior: {
    id: 3,
    image: "/section2img/home3.jpg",
    title: "Luxury living room with our best engineers",
  },
  "turnkey projects": {
    id: 4,
    image: "/section2img/home4.jpg",
    title: "Complete home project that empowers most",
  },
};

const SecondSection = () => {
  const categoryKeys = Object.keys(categories);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentCategory = categoryKeys[selectedIndex];
  const currentImage = categories[currentCategory];

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % categoryKeys.length);
  };

  const prevImage = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + categoryKeys.length) % categoryKeys.length
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
  
      <div
        className="relative w-full h-[550px] bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${currentImage.image})` }}
      >
        <div className="absolute inset-0 bg-opacity-30 flex items-start justify-start pt-10 pl-10 w-[67%]">
          <h2 className="text-white text-4xl font-bold ">
            {currentImage.title}
          </h2>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 cursor-pointer transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 cursor-pointer transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <FaArrowRight />
      </button>

      {/* Category Selection */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3  bg-opacity-30 p-2 rounded-lg">     
         {categoryKeys.map((category, index) => (
          <button
            key={category}
            onClick={() => setSelectedIndex(index)}
            className={`cursor-pointer px-4 py-2 rounded-lg text-white text-xs w-36 h-10 ${
              selectedIndex === index
                ? "bg-gray-900"
                : "bg-transparent-md backdrop-blur-md  hover:bg-gray-800"
            }`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
