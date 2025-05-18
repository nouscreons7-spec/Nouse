"use client";
import { useState } from "react";

const ArchitectureShowcase = ({ architechData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % architechData.projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? architechData.projects.length - 1 : prev - 1
    );
  };

  const getNextIndex = (index) => {
    return (index + 1) % architechData.projects.length;
  };
  const backgroundImageUrl = architechData?.backgroundImage?.fields?.file?.url;

  return (
    <section
      className="bg-cover bg-center text-white py-20 "
      style={{
        backgroundImage: backgroundImageUrl
          ? `url(https:${backgroundImageUrl})`
          : "none",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          {architechData.title}
        </h2>
        <p className="text-lg max-w-xl mx-auto">{architechData.description}</p>
      </div>

      <div className="flex items-center mt-12 space-x-10">
        {/* Left Image - current */}
        <div className="relative w-[70%] h-[400px] pl-6">
          <img
            src={
              architechData.projects[currentIndex].fields.image?.fields?.file
                ?.url
            }
            alt={architechData.projects[currentIndex].fields.alt}
            className="rounded-xl w-full h-full object-cover shadow-lg transition duration-500"
          />
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 text-black p-2 rounded-r-md hover:bg-white z-10"
          >
            &#x276E;
          </button>
        </div>

        <div className="relative w-[30%] h-[400px]">
          <img
            src={
              architechData.projects[getNextIndex(currentIndex)].fields.image
                ?.fields?.file?.url
            }
            alt={architechData.projects[getNextIndex(currentIndex)].fields.alt}
            className="rounded-l-lg w-full h-full object-cover shadow-lg transition duration-500"
          />

          <button
            onClick={nextSlide}
            className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 text-black p-2 rounded-l-md hover:bg-white z-10"
          >
            &#x276F;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureShowcase;
