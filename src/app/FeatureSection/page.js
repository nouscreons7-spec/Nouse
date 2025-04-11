"use client";

import React from "react";

const featuresData = [
  {
    title: "Flexibility",
    image: "/featured/art1.jpg",
    subtitle: "An inclusive model",
    description:
      "We are a team of creative architects who combine our skills along with practices to create beautiful and inspirational spaces.",
  },
  {
    title: "Simplicity",
    image: "/featured/art2.jpg",
    subtitle: "More time to do less",
    description:
      "It is important to us that you feel your home a place where you love to be. Therefore, we focus on creating timelessly elegant interiors which focus equally on quality and comfort.",
  },
  {
    title: "Adaptability",
    image: "/featured/art3.jpg",
    subtitle: "Evolves with you over time",
    description:
      "We handle all aspects of the construction process, from design conception to construction completion and provide unmatched construction project management.",
  },
];

const FeatureSection = () => {
  return (
    <div
      className="w-full py-16 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/img/grat.jpeg')" }} 
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 ">
        {featuresData.map((item, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 rounded-lg shadow-lg text-center px-8"
          >
            <h2 className="text-2xl font-semibold mb-8 mt-8">{item.title}</h2>
            <div className="flex justify-center items-center bg-red-400  rounded-4xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-contain bg-white p-4 rounded-lg bg-green-300"
              />
            </div>
            <h3 className="text-yellow-600 mt-4 mb-8 mt-8 text-md ">{item.subtitle}</h3>
            <p className="text-gray-300 text-md mb-8">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
