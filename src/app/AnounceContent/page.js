import React from "react";

const AnnounceContent = ({ announcementData }) => {
  if (!announcementData) return null;
  const backgroundImageUrl = announcementData?.
  bgimage?.fields?.file?.url;
  
  
  return (
    <div
      className="relative flex items-center justify-center min-h-[400px] bg-cover bg-center px-6 text-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div>
        <h2 className="text-white text-6xl font-semibold">
          {announcementData.title}
        </h2>
        <a href={announcementData.buttonLink} className="inline-block mt-10">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
            {announcementData.buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default AnnounceContent;
