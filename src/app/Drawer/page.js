"use client";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";

const Drawer = ({ isOpen, onClose, navData, quickLinks }) => {

  const router = useRouter();

  const viewContentPage = (page) => {
    router.push(`/pages/content?keyword=${page}`);
    onClose();
  };

  return (
    <div
      className={`z-50 fixed inset-y-0 right-0 bg-black text-white shadow-md z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform ease-in-out duration-300 p-8 flex flex-col min-h-screen w-[350px] sm:w-[650px]`}
    >
      {/* Close Button */}
      <div className="flex justify-end">
        <RxCross2
          className="h-7 w-7 cursor-pointer text-gray-400 hover:text-white"
          onClick={onClose}
        />
      </div>

      {/* Drawer Content */}
      <div className="mt-6 space-y-10">
        {/* Navigation Links */}
        <div>
          <h2 className="text-2xl font-semibold uppercase mb-4">Navigation</h2>
          <div className="grid grid-cols-2 gap-4 text-lg text-gray-400">
            {navData && Array.isArray(navData) ? (
              navData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => viewContentPage(item.label)}
                  className="cursor-pointer hover:text-white transition"
                >
                  {item.label}
                </div>
              ))
            ) : (
              <div className="text-gray-400 italic">
                No navigation items available
              </div>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
         
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-400">
          {Array.isArray(quickLinks) && quickLinks.length > 0 ? (
  quickLinks.map((section, idx) => (
    <div key={idx}>
        <h2 className="text-2xl font-semibold uppercase mb-4 text-white">
        {section.section || "Untitled Section"}
      </h2>
      {Array.isArray(section.links) && section.links.length > 0 ? (
        section.links.map((link, index) => (
          <div
            key={index}
            onClick={() => {
              if (link?.url) router.push(link.url);
              onClose?.();
            }}
            className="cursor-pointer hover:text-white p-1 transition"
          >
            {link?.platform || "Unnamed Link"}
          </div>
        ))
      ) : (
        <div className="text-gray-400 italic text-sm">No links available</div>
      )}
    </div>
  ))
) : (
  <div className="text-gray-400 italic">No quick links to display</div>
)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
