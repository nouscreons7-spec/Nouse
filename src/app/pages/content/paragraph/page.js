"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ParagraphSection = ({ paragraphSectionData }) => {
  if (!paragraphSectionData) return null;
 return (
  <div
    className="relative w-full py-16 px-4 sm:px-8 md:px-16 lg:px-20 bg-cover bg-center"
    style={{
      backgroundImage: `url(https:${paragraphSectionData.backgroundImage.fields.file.url})`,
    }}
  >
    <div className="mx-auto max-w-6xl">
      <div className="text-gray-500 text-lg sm:text-xl md:text-2xl tracking-widest mb-4 sm:mb-6 md:mb-8 uppercase">
        {paragraphSectionData.subTitle}
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug md:leading-tight mb-6 md:mb-10 font-bold text-white ">
        {paragraphSectionData.title}
      </div>
      <div className="text-base sm:text-lg md:text-xl text-gray-700">
        {documentToReactComponents(paragraphSectionData.description)}
      </div>
    </div>
  </div>
);

};

export default ParagraphSection;
