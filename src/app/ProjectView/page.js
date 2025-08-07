"use client";
import { useState } from "react";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

const ProjectView = ({ images = [], info, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };
console.log(info,"info",images);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center overflow-y-auto px-2">
   
      <button className="cursor-pointer absolute top-4 right-4 text-white" onClick={onClose}>
        <IoClose size={30} />
      </button>


      <div className=" flex flex-col md:flex-row w-full max-w-7xl bg-white rounded-lg overflow-hidden shadow-lg relative">
      
        <div className="relative w-full md:w-2/3 bg-black flex items-center justify-center ">
         <img
  src={images[currentIndex]}
  alt={`Project ${currentIndex}`}
  className="object-cover w-full min-h-[40vh] max-h-[40vh] md:min-h-[90vh] md:max-h-[90vh]"
/>


      
         <button
  className="hidden md:block cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-1"
  onClick={goPrev}
>
  <IoChevronBack size={30} />
</button>

          <button
            className="hidden md:block cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50  rounded-full md:p-1"
            onClick={goNext}
          >
            <IoChevronForward size={30} />
          </button>
        </div>

       
        <div className="w-full md:w-1/3 bg-white text-black p-4 flex flex-col gap-4">
         
          <div>
            <h2 className="text-xl font-semibold">{info?.title}</h2>
            <p className="text-sm text-gray-600"> {info?.location}</p>
            <p className="text-sm text-gray-600"> {info?.floorArea}</p>
            <p className="text-sm text-gray-600">{info?.plotArea}</p>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-2 gap-2 max-h-[72vh] overflow-y-auto">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => selectImage(idx)}
                className={`border-2 ${
                  idx === currentIndex ? "border-red-500" : "border-transparent"
                } cursor-pointer rounded overflow-hidden`}
              >
              <img
  src={img}
  alt={`thumb-${idx}`}
  className="object-cover w-full min-h-[10vh] max-h-[10vh]"
  
/>


              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
