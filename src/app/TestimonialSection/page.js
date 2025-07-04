"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const TestimonialSection = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);

  const items = data?.items || [];
  const bgUrl = data?.bgImage?.fields?.file?.url
    ? `https:${data.bgImage.fields.file.url}`
    : "/img/grat.jpeg";

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

  return (
    <div
      className="w-full py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="flex flex-col items-center justify-center w-full text-center text-white mb-12">
        <p className="text-4xl font-bold mb-4">{data?.title}</p>
        <p className="text-xl">{data?.subtitle}</p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex gap-6 overflow-hidden">
          {visibleTestimonials.map((item, idx) => {
            const name = item?.fields?.name || `Client ${idx + 1}`;
            const review = item?.fields?.review || "";
            const image =
              item?.fields?.image?.fields?.file?.url
                ? `https:${item.fields.image.fields.file.url}`
                : "";
            const famImg =
              item?.fields?.famImg?.fields?.file?.url
                ? `https:${item.fields.famImg.fields.file.url}`
                : "";

            return (
              <div
                key={idx}
                className="bg-white w-[50%] p-8 rounded-xl shadow-md flex gap-4"
              >
                {/* Left Image */}
                <div className="w-1/2 h-[500px] relative">
                  {image && (
                    <img
                      src={image}
                      alt={name}
                      className="rounded-xl h-full object-cover w-full"
                    />
                  )}
                  {famImg && (
                    <div className="absolute bottom-0 left-0 right-0">
                      <img
                        src={famImg}
                        alt="Family"
                        className="rounded-xl h-[250px] object-cover w-full"
                      />
                    </div>
                  )}
                </div>

                {/* Right Content */}
                <div className="w-1/2 h-[500px] flex flex-col justify-center">
                  <h3 className="font-semibold text-lg max-w-[70%] text-xl">
                    {name}
                  </h3>

                  <div className="flex text-yellow-500 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="text-gray-600 text-lg mt-2 max-w-[80%]">
                    {review}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
