"use client";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ProjectSection = ({ data }) => {
  const carouselRef = useRef(null);
  const [error, setError] = useState(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 1.5;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!data) return null;

  const backgroundUrl =
    data?.backgroundImage?.fields?.file?.url
      ? `https:${data.backgroundImage.fields.file.url}`
      : "/banner/shade3.jpg";

  const projects = data.projects || [];

  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center px-8"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="flex-col justify-start text-white py-20 max-w-[50%]">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        {data.description &&
          <div className="mt-4">{documentToReactComponents(data.description)}</div>}
        <p className="text-xl mt-2 font-semibold">{data.subtitle}</p>
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

        {/* Project Cards */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth gap-6 px-6 py-4 hide-scrollbar"
        >
          {projects.map((project, idx) => {
            const imageUrl =
              project?.fields?.
              projectImage
              ?.fields?.file?.url
                ? `https:${project.fields.projectImage.fields.file.url}`
                : "/placeholder.jpg";
            const name = project?.fields?.projectItem || `Project ${idx + 1}`;

            return (
              <div
                key={project.sys?.id || idx}
                className="min-w-[300px] flex-shrink-0  bg-opacity-80 p-4 rounded-lg"
              >
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h3 className="text-xl text-white mt-4">{name}</h3>
                {data.buttonText && (
                  <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300">
                    {data.buttonText}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-10"
          onClick={() => scroll("right")}
        >
          <FaChevronRight />
        </button>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProjectSection;
