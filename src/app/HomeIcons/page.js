"use client";

import { useSiteSettings } from "../context/SiteSettingsContext";
import { SiteSettingsProvider } from "../context/SiteSettingsContext";

const HomeIcons = () => {
 const { settings } = useSiteSettings() || {};
const formatNumber = (num) => {
  if (!num) return "";
  return num.replace(/\D/g, ""); 
};
 
  
  return (
    <SiteSettingsProvider>
    <div className="relative">
      <div className="z-20 fixed bottom-5 right-3 flex flex-col items-end space-y-3 ">
        <a
          href={`https://wa.me/${formatNumber(settings?.number)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={settings?.whatsapp}
            alt="WhatsApp"
            className="w-12 h-12 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href={`tel:${settings?.number}`}
          className="md:hidden"
        >
         <img
            src={settings?.quote}
            alt="WhatsApp"
            className="w-12 h-12 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
    </div>
    </SiteSettingsProvider>
  );
};

export default HomeIcons;
