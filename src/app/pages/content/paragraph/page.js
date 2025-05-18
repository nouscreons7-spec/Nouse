"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ParagraphSection = ({ paragraphSectionData }) => {
  return (
    <div
      className="relative w-full py-20 px-4 md:px-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(https:${paragraphSectionData.backgroundImage.fields.file.url})`,
      }}
    >
      <div className=" mx-auto  max-w-[80%]">
        <h4 className="text-gray-500 text-3xl tracking-widest mb-8 uppercase">
          {paragraphSectionData.subTitle}
        </h4>
        <h1 className="text-6xl  leading-tight mb-10">
          {paragraphSectionData.title}
        </h1>
        <h5 className="text-xl text-gray-700">
        {documentToReactComponents(paragraphSectionData.description)}
        </h5>
      </div>
    </div>
  );
};

export default ParagraphSection;
