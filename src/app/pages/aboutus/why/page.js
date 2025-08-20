"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSiteSettings } from "@/app/context/SiteSettingsContext";
const Why = ({ data }) => {
  const backgroundImageUrl = data?.backgroundImage?.fields?.file?.url
    ? `https:${data.backgroundImage.fields.file.url}`
    : "";

  const title = data?.title || "";
  const subTitle = data?.subTitle || "";
  const description = data?.description || null;
 const { settings } = useSiteSettings() || {};

  return (
    <div
      className="relative  flex flex-col justify-center items-center min-h-[500px] bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="relative z-10 max-w-2xl px-4  bg-opacity-40 py-12 rounded-md"
       style={{
          fontFamily: settings?.fontFamily,
          color: settings?.fontColor,
        }}>
        <h3 className=" mb-6 text-3xl">{title}</h3>
        <h1 className=" text-4xl md:text-5xl font-bold mb-6">
          {subTitle}
        </h1>
        <div className=" text-base md:text-lg leading-relaxed">
          {description && documentToReactComponents(description)}
        </div>
      </div>
    </div>
  );
};

export default Why;
