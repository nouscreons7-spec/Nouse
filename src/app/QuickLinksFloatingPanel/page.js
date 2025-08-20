"use client";

import React, { useState } from "react";
import { useQuickLinks } from "../context/quickLinks";
import { FaLink } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useSiteSettings } from "../context/SiteSettingsContext";

const QuickLinksFloatingPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useQuickLinks();
  const quickLinks = data?.quickLinks || [];

  const router = useRouter();
 const siteSettings = useSiteSettings();
const settings = siteSettings?.settings || {};

  return (
    
    <div
      className="hidden md:flex fixed right-3 top-1/3 -translate-y-1/2 z-20"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className="text-white w-8 h-32 shadow-md cursor-pointer flex flex-col items-center justify-center
             hover:shadow-xl transition-all duration-300 ease-in-out
             hover:scale-105 space-y-2 rounded-l-full"
        style={{
          backgroundImage: `linear-gradient(to bottom, #4b5563, ${settings.secondaryColor})`,
          borderLeft: `2px solid ${settings.primaryColor}`,
          borderRight: `2px solid ${settings.primaryColor}`,
        }}
      >
        <FaLink className="text-xl animate-bounce" />
        <span className="text-[10px] leading-tight">Quick</span>
        <span className="text-[10px] leading-tight">Links</span>
      </div>

      <div
        className={`absolute top-0 right-full w-80 max-h-[80vh] overflow-y-auto
              text-gray-800 shadow-2xl rounded-l-2xl border-l-4
              transition-all duration-500 ease-in-out
              ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4 pointer-events-none"
              }`}
        style={{ borderColor: settings.primaryColor }}
      >
        <div className=" p-5 space-y-4 bg-white/70 rounded-l-2xl backdrop-blur-md">
          <div className="space-y-5">
            {quickLinks.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-semibold uppercase mb-2 tracking-wide">
                  {section.section}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        onClick={() => router.push(link.url)}
                        className="cursor-pointer flex items-center gap-2 text-sm transition-all duration-200"
                        style={{
                          color: settings.secondaryColor,
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = settings.primaryColor)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color =
                            settings.secondaryColor)
                        }
                      >
                        <span
                          className="inline-block w-2 h-2 rounded-full"
                          style={{ backgroundColor: settings.primaryColor }}
                        ></span>
                        {link.platform}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinksFloatingPanel;
