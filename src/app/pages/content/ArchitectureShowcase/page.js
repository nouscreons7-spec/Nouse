"use client";
import { useState } from "react";
import { useSiteSettings } from "@/app/context/SiteSettingsContext";
const ArchitectureShowcase = ({ architechData }) => {
  if (!architechData) return null;
  const { settings } = useSiteSettings() || {};
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
      className="bg-cover bg-center  py-20"
      style={{
        backgroundImage: backgroundImageUrl
          ? `url(https:${backgroundImageUrl})`
          : "none",
           fontFamily: settings?.fontFamily,
        color: settings?.fontColor,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          {architechData.title}
        </h2>
        <p className="text-lg max-w-xl mx-auto">
          {architechData.description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-12 space-y-6 md:space-y-0 md:space-x-10">
        {/* Left Image - always visible */}
        <div className="relative w-full md:w-[70%] h-[400px] pl-6 md:pl-0">
          <img
            src={
              architechData.projects[currentIndex].fields.image?.fields?.file
                ?.url
            }
            alt={architechData.projects[currentIndex].fields.alt}
            className="rounded-xl w-full h-full object-cover shadow-lg transition duration-500"
          />
          <button
            onClick={prevSlide}
            className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 text-black p-2 rounded-r-md hover:bg-white z-10"
          >
            &#x276E;
          </button>
          
        </div>

        {/* Right Image - hidden on small screens */}
        <div className="relative w-[30%] h-[400px] hidden md:block">
          <img
            src={
              architechData.projects[getNextIndex(currentIndex)].fields.image
                ?.fields?.file?.url
            }
            alt={
              architechData.projects[getNextIndex(currentIndex)].fields.alt
            }
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
