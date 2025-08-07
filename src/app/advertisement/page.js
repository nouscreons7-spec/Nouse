"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Advertisement = ({ data }) => {
  if (!data || !data.items) return null;
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = data?.items?.length || 0;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  const backgroundUrl = data?.bgimage?.fields?.file?.url
    ? `https:${data.bgimage.fields.file.url}`
    : "";

  return (
    <section className="relative w-full">
      <div
        className="w-full h-[700px] bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-10 text-center"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
        <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-6 max-w-2xl">
          {data.title}
        </h2>

        <div className="relative w-full  h-[500px]">
          {/* Slide Image */}
          <img
            src={`https:${data.items[currentIndex].fields.projectImage.fields.file.url}`}
            alt={data.items[currentIndex].fields.projectItem}
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="cursor-pointer absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/40 p-2 rounded-full"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/40 p-2 rounded-full"
          >
            <FaArrowRight />
          </button>

          {/* Buttons */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-4 justify-center">
            {data.items.map((item, index) => (
              <button
                key={index}
                onClick={() => selectSlide(index)}
                className={`px-3 py-1 text-sm border transition ${
                  index === currentIndex
                    ? "bg-white text-black"
                    : "bg-white/20 text-white"
                } rounded`}
              >
                {item.fields.projectItem?.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
