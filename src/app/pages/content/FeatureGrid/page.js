import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSiteSettings } from "@/app/context/SiteSettingsContext";
const FeatureGrid = ({ features }) => {
  if (!features) return null;
  const backgroundImageUrl = features?.bgimage?.fields?.file?.url;
    const { settings } = useSiteSettings() || {};

  return (
    <div
      className="relative w-full py-12 px-4 md:px-20 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})`,
       fontFamily: settings?.fontFamily,
        color: settings?.fontColor,
    
    }}
    >
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-2 gap-12 justify-items-center">
          {features.items.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={feature.fields.image.fields?.file?.url}
                alt="Feature icon"
                className="w-[50px] object-cover transition duration-500"
              />
              <h3 className="text-md sm:text-xl md:text-xl font-semibold mt-4 mb-2 max-w-xs leading-snug">
                {feature.fields.title}
              </h3>

              <p className=" text-md leading-relaxed max-w-sm">
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
