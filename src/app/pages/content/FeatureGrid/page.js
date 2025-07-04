import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const FeatureGrid = ({ features }) => {
  if (!features) return null;
  const backgroundImageUrl = features?.bgimage?.fields?.file?.url;
  return (
    <div
      className="relative w-full py-12 px-4 md:px-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {features.items.map((feature, index) => (
            <div key={index} className="flex flex-col items-start ">
              <img
                src={feature.fields.image.fields?.file?.url}
                alt="image not available"
                className=" rounded-l-lg w-[50px] object-cover transition duration-500"
              />
              <h3 className="text-xl font-semibold mb-2 leading-normal max-w-[50%] mt-4 mb-4">
                {feature.fields.title}
              </h3>
              <p className="text-gray-600 text-md leading-relaxed max-w-[60%]">
                {documentToReactComponents(feature.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeatureGrid;
