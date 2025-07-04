"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ParagraphSection = ({ paragraphSectionData }) => {
  if (!paragraphSectionData) return null;
  return (
    <div
      className="relative w-full py-20 px-4 md:px-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(https:${paragraphSectionData.backgroundImage.fields.file.url})`,
      }}
    >
      <div className=" mx-auto  max-w-[80%]">
        <div className="text-gray-500 text-3xl tracking-widest mb-8 uppercase">
          {paragraphSectionData.subTitle}
        </div>
        <div className="text-6xl  leading-tight mb-10">
          {paragraphSectionData.title}
        </div>
        <div className="text-xl text-gray-700">
        {documentToReactComponents(paragraphSectionData.description)}
        </div>
      </div>
    </div>
  );
};

export default ParagraphSection;
