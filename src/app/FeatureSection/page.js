"use client";

import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSiteSettings } from "../context/SiteSettingsContext";
import AnimationWrapper from "../AnimationWrapper/page";

const FeatureSection = ({ data }) => {
  if (!data || !data.items) {
    return null; 

  }
  


  const backgroundImage = `https:${data.bgimage.fields.file.url}`;
 const { settings } = useSiteSettings() || {};
  return (
  <div
    className="w-full py-16 px-4 bg-cover bg-center"
    style={{ backgroundImage: `url('${backgroundImage}')` }}
  > 
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-6"
     style={{
          fontFamily: settings?.fontFamily,
          color: settings?.fontColor,
        }}>
      {data?.items.map((item, index) => {
        const { title, description, image } = item.fields;
        const imageUrl = image?.fields?.file?.url
          ? `https:${image.fields.file.url}`
          : "";

        return (
          
          <div
            key={index}
            className="  p-6 rounded-lg shadow-lg text-center"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">{title}</h2>

            <div className="flex justify-center items-center">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full max-h-48 object-contain bg-white p-4 rounded-lg"
                />
              )}
            </div>

            <div className="text-base sm:text-lg mt-4">
              {description && documentToReactComponents(description)}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

};

export default FeatureSection;
