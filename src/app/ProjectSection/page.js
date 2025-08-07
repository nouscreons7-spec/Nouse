"use client";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import ProjectCard from "../ProjectCard/page";

const ProjectSection = ({ data }) => {
  const carouselRef = useRef(null);
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

  const backgroundUrl = data?.backgroundImage?.fields?.file?.url
    ? `https:${data.backgroundImage.fields.file.url}`
    : "";

  return (
  <div
    className="relative bg-fixed bg-cover bg-center text-white"
     style={{ backgroundImage: `url(${backgroundUrl})` }}
  >
    <div className="flex flex-col justify-start py-16 px-4 sm:px-6 md:px-10 lg:px-20 max-w-full ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        {data.title}
      </h1>

      {data.description && (
        <div className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          {documentToReactComponents(data.description)}
        </div>
      )}

      <p className="text-lg sm:text-xl md:text-2xl mt-2 font-semibold">
        {data.subtitle}
      </p>
    </div>

    <ProjectCard />

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
