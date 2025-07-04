"use client";

import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Drawer from "../Drawer/page";
import { getContent } from "@/contentful/page";
import LoadingSpinner from "../LoadingSpinner/page";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [navData, setNavData] = useState({
    text: "",
    navItems: [],
    logoUrl: "",
  });
  const router = useRouter();

  const onClose = () => setShowDrawer(false);
  // const backgroundImageUrl = status[0]?.backgroundImage?.fields?.file?.url;
  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent("navItemGroup");

        if (entries.length > 0) {
          const fields = entries[0].fields;

          // LOG to understand the structure
          

          setNavData({
            text: fields.quoteText || "",
            navItems:
              fields.items?.map((item) => ({
                label: item.fields.label || item.fields.title || "Unnamed",
              })) || [],
            logoUrl: fields.logo?.fields?.file?.url || "",
          });
        }
      } catch (err) {
        console.error("Error fetching nav data:", err.message);
      }
    }

    fetchData();
  }, []);

  const viewContentPage = (page) => {
    router.push(`/pages/content?keyword=${page}`);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[20%] z-10 bg-gradient-to-b from-black/80 to-transparent text-white p-4 flex items-center justify-between">
      <Drawer isOpen={showDrawer} onClose={onClose} />

      <div
        onClick={() => router.push("/")}
        className="cursor-pointer flex items-center md:justify-start text-2xl font-bold w-auto md:w-[20%]"
      >
        {navData.logoUrl ? (
          <img src={`https:${navData.logoUrl}`} alt="" className="h-40 w-40" />
        ) : (
          <LoadingSpinner />
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-evenly items-center w-full font-bold space-x-6">
        {navData.navItems.map((item, index) => (
          <div
            key={index}
            className="hover:text-gray-300 transition cursor-pointer"
            onClick={() => viewContentPage(item.label)}
          >
            {item.label.toUpperCase()}
          </div>
        ))}

        <button className="bg-yellow-100 text-black px-4 py-2 rounded-lg font-semibold cursor-pointer">
          {navData.text}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <FiMenu
          className="text-white text-3xl cursor-pointer"
          onClick={() => setShowDrawer(true)}
        />
      </div>
    </header>
  );
};

export default Header;
