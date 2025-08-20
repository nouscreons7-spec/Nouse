"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSiteSettings } from "../context/SiteSettingsContext";

const WhyNous = ({ data }) => {
  const backgroundImageUrl = data?.backgroundImage?.fields?.file?.url
    ? `https:${data.backgroundImage.fields.file.url}`
    : "";

  const title = data?.title || "";
  const subTitle = data?.subTitle || "";
  const description = data?.description || null;
  const { settings } = useSiteSettings() || {};
  return (
  <div
    className="relative flex flex-col justify-center items-center min-h-[500px] bg-cover bg-center text-center px-4"
    style={{ backgroundImage: `url(${backgroundImageUrl})` }}
  >
    



    <div className="relative z-10 max-w-2xl"
     style={{
          fontFamily: settings?.fontFamily,
          color: settings?.fontColor,
        }}
    >
      <h3 className=" mb-4 text-xl sm:text-2xl md:text-3xl">
        {title}
      </h3>
      <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        {subTitle}
      </h1>
      <div className=" text-lg px-6 md:text-xl leading-relaxed">
        {description && documentToReactComponents(description)}
      </div>
    </div>
  </div>
);

};

export default WhyNous;
