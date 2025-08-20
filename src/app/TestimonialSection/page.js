"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useSiteSettings } from "../context/SiteSettingsContext";



const TestimonialSection = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);
  const { settings } = useSiteSettings() || {};
  const items = data?.items || [];
  const bgUrl = data?.bgImage?.fields?.file?.url
    ? `https:${data.bgImage.fields.file.url}`
    : "";

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % items.length);
  };

  const visibleTestimonials = [
    items[startIndex],
    items[(startIndex + 1) % items.length],
  ];
  console.log(data, bgUrl);
  return (
   
    <div
      className="w-full py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      {/* Title & Subtitle */}
      <div
        className="flex flex-col items-center justify-center w-full text-center  mb-12"
        style={{
          fontFamily: settings?.fontFamily,
          color: settings?.fontColor,
        }}
      >
        <p className="text-4xl font-bold mb-4">{data?.title}</p>
        <p className="text-xl">{data?.subtitle}</p>
      </div>

      {/* Testimonials Section */}
      <div
        className="max-w-7xl mx-auto relative"
        style={{
          fontFamily: settings?.fontFamily,
          color: settings?.fontColor,
        }}
      >
        <div className="flex gap-6 overflow-x-auto md:overflow-hidden flex-nowrap scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {visibleTestimonials.map((item, idx) => {
            const name = item?.fields?.name || `Client ${idx + 1}`;
            const review = item?.fields?.review || "";
            const image = item?.fields?.bgimage?.fields?.file?.url
              ? `https:${item.fields.bgimage.fields.file.url}`
              : "";
            const famImg = item?.fields?.famImg?.fields?.file?.url
              ? `https:${item.fields.famImg.fields.file.url}`
              : "";

            return (
              <div
                key={idx}
                className="bg-white min-w-full md:min-w-[50%] p-8 rounded-xl shadow-md flex flex-col md:flex-row gap-4"
              >
                {/* Left Image */}
                <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
                  {image && (
                    <img
                      src={image}
                      alt={name}
                      className="rounded-xl h-full object-cover w-full"
                    />
                  )}
                  {famImg && (
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end h-full">
                      <img
                        src={famImg}
                        alt="Family"
                        className="rounded-xl  h-[200px]  md:h-[250px] object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 h-auto md:h-[500px] flex flex-col justify-center">
                  <h3 className="font-semibold text-lg md:text-xl max-w-[90%]">
                    {name}
                  </h3>
                  <div className="flex text-yellow-500 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className=" text-base md:text-lg mt-2 max-w-[90%]">
                    {review}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrows - only show on desktop */}
        <button
          onClick={handlePrev}
          className=" md:flex cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className=" md:flex cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
