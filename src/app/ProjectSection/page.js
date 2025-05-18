"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getContent } from "../../contentful/page";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ProjectSection = () => {
  const carouselRef = useRef(null);
  const [projectsData, setProjectsData] = useState({
    title: "",
    subtitle: "",
    description: null,
    buttonText: "",
    bgImage: "",
    projects: [],
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent("projectsSection");

        if (entries && entries.length > 0) {
          const section = entries[0].fields;
          setProjectsData({
            title: section.title || "",
            subtitle: section.subtitle || "",
            description: section.description || null, // store RichText object
            buttonText: section.buttonText || "",
            bgImage: section.backgroundImage
              ? `url(${section.backgroundImage.fields.file.url})`
              : "",
            projects: section.projects
              ? section.projects.map((item) => ({
                  id: item.sys.id,
                  name: item.fields.projectName || "",
                  image: item.fields.projectImage?.fields?.file?.url || "",
                }))
              : [],
          });
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err);
      }
    }

    fetchData();
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 1.5;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (error) {
    return <div className="text-white">Error loading content: {error}</div>;
  }

  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center px-8"
      style={{ backgroundImage: "url('/banner/shade3.jpg')" }}
    >
      <div className="flex-col justify-start text-white  py-20 max-w-[50%]">
        <h1 className="text-4xl font-bold">{projectsData.title}</h1>
        {projectsData.description &&
          documentToReactComponents(projectsData.description)}
        <p className="text-xl mt-2 font-semibold">{projectsData.subtitle}</p>
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
          
          {projectsData.projects.map((project) => (
            <div key={project.id} className="min-w-[300px] flex-shrink-0 bg-black bg-opacity-80 p-4 rounded-lg">
              <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-lg" />
              <h3 className="text-xl text-white mt-4">{project.name}</h3>
              <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300">
                {projectsData.buttonText}
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

export default ProjectSection;
