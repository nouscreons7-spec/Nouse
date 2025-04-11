"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const categories = {
  bgimage:"/img/grat.jpeg",
  title:
    "Our dedicated team works seamlessly in our state-of-the-art office and factory, ensuring top-notch quality and innovation at every step.",
  items: [
    {
      id: 1,
      image: "/section2img/home1.jpg",
      buttontext: "life@creo",
    },
    {
      id: 2,
      image: "/section2img/home2.jpg",
      buttontext: "workspace",
    },
    {
      id: 3,
      image: "/section2img/home3.jpg",
      buttontext: "our factory",
    },
    
  ],
};

const SecondSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = categories.items.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full">
      <div
        className="w-full h-[700px] bg-cover bg-center flex flex-col justify-center px-10 relative"
        style={{
          backgroundImage: `url(${categories.bgimage})`,
        }}
      >
        <h2 className=" text-xl font-bold mb-6  max-w-[40%] ">
          {categories.title}
        </h2>

        <div className="relative w-full h-[500px] ">
          <img
            src={categories.items[currentIndex].image}
            alt="category"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="cursor-pointer  absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/40 p-2 rounded-full"
          >
            <FaArrowLeft />
          </button>

          
          <button
            onClick={nextSlide}
            className="cursor-pointer  absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/40 p-2 rounded-full"
          >
            <FaArrowRight />
          </button>

         
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
            {categories.items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => selectSlide(index)}
                className={`px-3 py-1 text-sm border cursor-pointer ${
                  index === currentIndex
                    ? "bg-white text-black"
                    : "bg-white/20 text-white"
                } rounded`}
              >
                {item.buttontext.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
