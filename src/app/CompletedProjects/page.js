"use client";

import SlidingProjects from "../secondSection/page";
import { useSiteSettings } from "../context/SiteSettingsContext";
const CompletedProjects = ({ data }) => {
  if (!data) return null;

  const backgroundUrl = data?.bgimage?.fields?.file?.url
    ? `https:${data.bgimage.fields.file.url}`
    : "";
 const { settings } = useSiteSettings() || {};
  return (
    <div
      className="py-16 bg-cover bg-center h-auto flex flex-col items-center justify-center text-center w-full"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div
        className="text-center w-[90%] md:w-[50%]"
        style={{
          fontFamily: settings?.fontFamily,
          color: settings?.fontColor,
        }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase">
          {data.title}
        </h2>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
          {data.subtitle}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 mb-12 px-2 sm:px-6">
          {data.description}
        </p>
      </div>

      {/* If categories should be displayed */}
      <SlidingProjects categories={data.categories} />
    </div>
  );
};

export default CompletedProjects;
