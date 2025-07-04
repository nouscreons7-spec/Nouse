"use client";

import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const FeatureSection = ({ data }) => {
  if (!data || !data.items) {
    return null; // Or loading/fallback UI
  }

  const backgroundImage = `https:${data.bgimage.fields.file.url}`;

  return (
    <div
      className="w-full py-16 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {data.items.map((item, index) => {
          const { title, description, image } = item.fields;
          const imageUrl = image?.fields?.file?.url
            ? `https:${image.fields.file.url}`
            : "";

          return (
            <div
              key={index}
              className="bg-black text-white p-6 rounded-lg shadow-lg text-center px-8"
            >
              <h2 className="text-2xl font-semibold mb-8 mt-8">{title}</h2>
              <div className="flex justify-center items-center rounded-4xl">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full object-contain bg-white p-4 rounded-lg"
                  />
                )}
              </div>
           
              <div className="text-gray-300 text-md mt-4 mb-8">
             { documentToReactComponents( description)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
