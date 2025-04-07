import React from "react";

const AnnounceContent = ({ backgroundImage, title, buttonText, buttonLink }) => {
  return (
    <div
      className="relative flex items-center justify-center min-h-[400px] bg-cover bg-center px-6 text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="">
        <h2 className="text-white text-6xl font-semibold">{title}</h2>
        <a href={buttonLink} className="inline-block mt-10">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default AnnounceContent;
