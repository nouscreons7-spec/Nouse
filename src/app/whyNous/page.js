"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const WhyNous = ({ data }) => {
  const backgroundImageUrl = data?.backgroundImage?.fields?.file?.url
    ? `https:${data.backgroundImage.fields.file.url}`
    : "";

  const title = data?.title || "";
  const subTitle = data?.subTitle || "";
  const description = data?.description || null;

  return (
  <div
    className="relative flex flex-col justify-center items-center min-h-[500px] bg-cover bg-center text-center px-4"
    style={{ backgroundImage: `url(${backgroundImageUrl})` }}
  >
    {/* Optional dark overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

    {/* Content */}
    <div className="relative z-10 max-w-2xl py-12">
      <h3 className="text-gray-200 mb-4 text-xl sm:text-2xl md:text-3xl">
        {title}
      </h3>
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        {subTitle}
      </h1>
      <div className="text-gray-200 text-lg px-6 md:text-xl leading-relaxed">
        {description && documentToReactComponents(description)}
      </div>
    </div>
  </div>
);

};

export default WhyNous;
