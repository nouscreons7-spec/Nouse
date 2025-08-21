import AnimationWrapper from "../AnimationWrapper/page";
import { useSiteSettings } from "../context/SiteSettingsContext";

const BanenerComponent = ({ data }) => {
  if (!data) return null;
  const { settings } = useSiteSettings() || {};
  return (
    <AnimationWrapper  type = "fadeInUp" delay =" 0.2">
    <div
      className="relative w-full h-[50vh] md:h-screen overflow-hidden"
      style={{
        fontFamily: settings?.fontFamily,
        color: settings?.fontColor,
        
      }}
    >
      <div className="absolute inset-0 transition-all duration-[5000ms] scale-100 animate-zoom">
        <img
          src={data.image}
          alt="Home Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-6 left-4 sm:bottom-10 sm:left-10  flex flex-col gap-2 sm:gap-4 max-w-[90%] sm:max-w-[600px]">
        <h1 className="text-2xl sm:text-4xl font-bold">{data.title}</h1>
        <h4 className="text-lg sm:text-2xl font-medium">{data.subtitle}</h4>
      </div>
    </div></AnimationWrapper>
  );
};

export default BanenerComponent;
