import React from "react";
import { useSiteSettings } from "../context/SiteSettingsContext";
const AnnounceContent = ({ announcementData }) => {
  if (!announcementData) return null;
  const backgroundImageUrl = announcementData?.bgimage?.fields?.file?.url;

  const { settings } = useSiteSettings() || {};
  return (
    <div
      className="relative flex items-center justify-center min-h-[300px] bg-cover bg-center px-4 sm:px-6 md:px-10 text-center min-h-[400px]"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div
        className="max-w-[90%]"
        style={{
          fontFamily: settings?.fontFamily,
          color: settings?.fontColor,
        }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          {announcementData.title}
        </h2>

        <a
          href={announcementData.buttonLink}
          className="inline-block mt-6 sm:mt-8 md:mt-10"
        >
          <button
            className="px-6 py-3 text-sm sm:text-base bg-black font-semibold rounded-lg hover:bg-gray-800 transition"
            style={{ background: settings?.buttonColor, color: settings?.fontColor, }}
          >
            {announcementData.buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default AnnounceContent;
