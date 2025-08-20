"use client";
import { createContext, useContext, useState } from "react";

// Default values (can be overridden)
const SiteSettingsContext = createContext();

export const SiteSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    buttonColor: "#ff5722",
    primaryColor: "#1e293b",
    secondaryColor: "#64748b",
    fontFamily: "Inter, sans-serif",
    phoneNumber: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    quote: "Building your dreams, one brick at a time.",
    fontColor: "#26292dff",
  });

  // Function to update specific setting
  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <SiteSettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SiteSettingsContext.Provider>
  );
};

// Hook for easier usage
export const useSiteSettings = () => useContext(SiteSettingsContext);
