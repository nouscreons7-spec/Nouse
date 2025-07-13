"use client";

import React from "react";

const EnsureSection = ({ data }) => {
  if (!data || !data.items) return null;

  const backgroundUrl = data?.bgimage?.fields?.file?.url
    ? `https:${data.bgimage.fields.file.url}`
    : "";

  return (
    <div
      className="flex items-center justify-center w-full  bg-cover bg-center py-16 "
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
    

      <div className=" z-10 flex flex-col items-center justify-center px-4">
        <h2 className="text-white text-5xl font-medium text-center mb-24">
          {data.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  ">
          {data.items.map((item, index) => {
            const fields = item.fields;
            const imageUrl = fields?.projectImage?.fields?.file?.url
              ? `https:${fields.projectImage.fields.file.url}`
              : "";

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center justify-center"
              >
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={fields.projectItem}
                    className="w-16 h-16 object-contain mb-4"
                  />
                )}
                <p className="text-white text-md font-medium">
                  {fields.projectItem}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EnsureSection;
