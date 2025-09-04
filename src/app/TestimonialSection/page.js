"use client";

import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useSiteSettings } from "../context/SiteSettingsContext";
import AnimationWrapper from "../AnimationWrapper/page";

const TestimonialSection = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const { settings } = useSiteSettings() || {};
  const items = data?.items || [];
  const bgUrl = data?.bgImage?.fields?.file?.url
    ? `https:${data.bgImage.fields.file.url}`
    : "";

  // Detect screen size (for 1 vs 2 testimonials)
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - (isDesktop ? 2 : 1) + items.length) % items.length
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + (isDesktop ? 2 : 1)) % items.length);
  };

  // Show 2 items on desktop, 1 on mobile
  const visibleTestimonials = isDesktop
    ? [items[startIndex], items[(startIndex + 1) % items.length]]
    : [items[startIndex]];

  return (
    <div
      className="w-full py-10 md:py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      {/* Title & Subtitle */}
      <div
        className="flex flex-col items-center justify-center w-full text-center mb-12"
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
        <div className="flex flex-row gap-6 justify-center overflow-hidden w-full">
          {visibleTestimonials.map((item, idx) => {
            if (!item) return null;

            const name = item?.fields?.name || `Client ${idx + 1}`;
            const review = item?.fields?.review || "";
            const image = item?.fields?.bgimage?.fields?.file?.url
              ? `https:${item.fields.bgimage.fields.file.url}`
              : "";
            const famImg = item?.fields?.famImg?.fields?.file?.url
              ? `https:${item.fields.famImg.fields.file.url}`
              : "";

            return (
              <AnimationWrapper key={idx} type="fadeInRight">
                <div
                  className="
    bg-white 
    w-full 
h-[400px]
    md:min-w-[380px] md:max-w-[380px] 
    lg:min-w-[480px] lg:max-w-[480px] 
    xl:min-w-[620px] xl:max-w-[620px] 
    h-[500px] 
    p-8 rounded-xl shadow-md 
    flex flex-row gap-4
  "
                >
                  {/* Left Image */}
                  <div className="w-1/2 h-full relative">
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
                          className="rounded-xl h-[250px] md:h-[200px] object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Content */}
                  <div className="w-1/2 text-gray-600 flex flex-col justify-center">
                    <h3 className="font-semibold text-lg md:text-xl mb-2">
                      {name}
                    </h3>
                    <div className="flex text-yellow-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                   <p
  className="text-base md:text-lg overflow-hidden w-full"
  style={{
    display: "-webkit-box",
    WebkitLineClamp: 14, // limit to 5 lines
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  
  }}
>
  {review}
</p>


                  </div>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="flex text-black cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="flex text-black cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
