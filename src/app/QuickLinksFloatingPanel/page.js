"use client";

import React, { useState } from "react";
import { useQuickLinks } from "../context/quickLinks";
import { FaLink } from "react-icons/fa";
import { useRouter } from "next/navigation";

const QuickLinksFloatingPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useQuickLinks();
  const quickLinks = data?.quickLinks || [];

  const router = useRouter();

  return (
    <div
      className="hidden md:flex fixed right-3 top-1/3 -translate-y-1/2 z-20"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className="bg-gradient-to-b from-grey-600 to-blue-500 text-white
       w-8 h-32 shadow-md cursor-pointer flex flex-col items-center justify-center
       border-l-2 border-r-2 border-yellow-300
       hover:shadow-xl transition-all duration-300 ease-in-out
       hover:scale-105 space-y-2 rounded-l-full"
      >
        <FaLink className="text-xl animate-bounce" />
        <span className="text-[10px] leading-tight">Quick</span>
        <span className="text-[10px] leading-tight">Links</span>
      </div>

      <div
        className={`absolute top-0 right-full w-80 max-h-[80vh] overflow-y-auto
                    text-gray-800 shadow-2xl rounded-l-2xl border-l-4 border-indigo-500
                    transition-all duration-500 ease-in-out
                    ${
                      isOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4 pointer-events-none"
                    }`}
      >
        <div className=" p-5 space-y-4 bg-white/70 rounded-l-2xl backdrop-blur-md">
          <div className="space-y-5">
            {quickLinks.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-semibold uppercase text-gray-700 mb-2 tracking-wide">
                  {section.section}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        onClick={() => router.push(link.url)}
                        // href={link.url}
                        className="cursor-pointer flex items-center gap-2 text-sm text-indigo-700 hover:text-indigo-900 transition-all duration-200"
                      >
                        <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full"></span>
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
