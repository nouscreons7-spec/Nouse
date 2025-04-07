"use client"
import React, { useRef, useState } from "react";
import { FaChevronLeft ,FaChevronRight} from "react-icons/fa";

const initialContent = {
  title: "Our Projects",
  subtitle: "Explore our newest project",
  description: "From vision to reality, on time and with unwavering commitment.",
  buttonText: "VIEW PROJECT"
};

const projects = [
  { id: 1, name: "Mr. Aby and family, Kalady", image: "/banner/shade3.jpg" },
  { id: 2, name: "Mr. Anil and family, Arayankavu", image: "/banner/shade3.jpg" },
  { id: 3, name: "Mr. Joseph and family, Kochi", image: "/banner/shade3.jpg" },
  { id: 4, name: "Mr. Rajeev and family, Trivandrum", image: "/banner/shade3.jpg" },
];

const ThirdSection = () => {
  const [content] = useState(initialContent);
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 1.5;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center px-8"
      style={{ backgroundImage: "url('/banner/shade3.jpg')" }}
    >
      <div className="flex-col justify-start text-white  py-20 max-w-[50%]">
        <h1 className="text-4xl font-bold">{content.title}</h1>
        <p className="text-xl mt-4">{content.description}</p>
        <p className="text-xl mt-2 font-semibold">{content.subtitle}</p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-10"
          onClick={() => scroll("left")}
        >
      <FaChevronLeft />
        </button>
        
        {/* Project Cards Container */}
        <div 
          ref={carouselRef} 
          className="flex overflow-x-auto scroll-smooth gap-6 px-6 py-4"
          style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* IE and Edge */
          }}
        >
          {/* Hide scrollbar for Chrome, Safari and Opera */}
          <style jsx>{`
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {projects.map((project) => (
            <div key={project.id} className="min-w-[300px] flex-shrink-0 bg-black bg-opacity-80 p-4 rounded-lg">
              <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-lg" />
              <h3 className="text-xl text-white mt-4">{project.name}</h3>
              <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300">
                {content.buttonText}
              </button>
            </div>
          ))}
        </div>
        
        {/* Right Arrow */}
        <button
          className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-10"
          onClick={() => scroll("right")}
        >
        <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ThirdSection;