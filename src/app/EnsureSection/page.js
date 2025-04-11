"use client";

import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaShieldAlt } from "react-icons/fa";
import { FaRulerCombined, FaPeopleCarryBox, FaIndustry } from "react-icons/fa6";

const ensureData = [
  {
    title: "We Ensure",
    bgimage: "/img/grat.jpeg",
    items: [
      {
        icon: CiClock2,
        title: "Timely Delivery",
      },
      {
        icon: FaRulerCombined,
        title: "Using German Technology",
      },
      {
        icon: FaShieldAlt,
        title: "15 Years Warranty",
      },
      {
        icon: FaPeopleCarryBox,
        title: "Assured Lifetime Service",
      },
      {
        icon: FaIndustry,
        title: "Delivery Directly From Our Own Factories",
      },
     
      // Add more items here if needed
    ],
  },
];

const EnsureSection = () => {
  const data = ensureData[0];

  return (
    <div
      className="flex items-center relative w-full px-10 bg-cover bg-center py-16 min-h-[500px]"
      style={{
        backgroundImage: `url(${data.bgimage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <h2 className="text-white text-5xl font-medium text-center mb-24">
          {data.title}
        </h2>

        <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {data.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <item.icon className="text-yellow-600 text-5xl mb-4" />
              <p className="text-white text-md font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnsureSection;
