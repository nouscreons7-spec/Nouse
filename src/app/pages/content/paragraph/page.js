"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSiteSettings } from "@/app/context/SiteSettingsContext";
const ParagraphSection = ({ paragraphSectionData }) => {
  if (!paragraphSectionData) return null;
   const { settings } = useSiteSettings() || {};
 return (
  <div
    className="relative w-full py-16 px-4 sm:px-8 md:px-16 lg:px-20 bg-cover bg-center"
   
    style={{
       backgroundImage: `url(https:${paragraphSectionData.backgroundImage.fields.file.url})`,
        fontFamily: settings?.fontFamily,
        color: settings?.fontColor,
      }}
  >
    <div className="mx-auto max-w-6xl">
      <div className=" text-lg sm:text-xl md:text-2xl tracking-widest mb-4 sm:mb-6 md:mb-8 uppercase">
        {paragraphSectionData.subTitle}
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug md:leading-tight mb-6 md:mb-10 font-bold  ">
        {paragraphSectionData.title}
      </div>
      <div className="text-base sm:text-lg md:text-xl ">
        {documentToReactComponents(paragraphSectionData.description)}
      </div>
    </div>
  </div>
);

};

export default ParagraphSection;
