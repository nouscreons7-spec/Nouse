"use client";
import { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Slider = ({ images,title,description}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images?.length]);
  const getImageUrl = (index) => {
    if (!Array.isArray(images) || !images[index])
      return "";
    const url = images[index].fields?.file?.url;
    return url ? `https:${url}` : "";
  };

 return (
  <div className="relative w-full h-[50vh] md:h-screen overflow-hidden">
    {getImageUrl(current) && (
      <img
        src={getImageUrl(current)}
        alt={title || "Slider Image"}
        className="object-cover w-full h-[50vh] md:h-full transition-all duration-700"
      />
    )}

    <div className="absolute bottom-2 left-3">
      <div className="p-8 bg-opacity-50 text-white max-w-[100%] md:max-w-[80%]">
        <h2 className="text-3xl md:text-6xl font-bold">{title}</h2>
        <div className="mt-2 text-base md:text-xl">
          {documentToReactComponents(description)}
        </div>

        <div className="absolute bottom-2 left-8 flex gap-3">
          {Array.isArray(images) &&
            images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === index ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
        </div>
      </div>
    </div>
  </div>
);

};

export default Slider;
