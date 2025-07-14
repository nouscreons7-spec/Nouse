"use client";

import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Drawer from "../Drawer/page";
import { getContent } from "@/contentful/page";
import LoadingSpinner from "../LoadingSpinner/page";
import LogoImage from "../logo/page";
import { useNav } from "../context/NavContext";
import { NavProvider } from "@/app/context/NavContext";
import { QuickLinksProvider } from "@/app/context/quickLinks";
const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navData, setNavData] = useState({
    text: "",
    navItems: [],
    logoUrl: "",
  });
  const router = useRouter();
  const { setNavItems } = useNav();
 
 console.log(navData.navItems, "navItems");
  const onClose = () => setShowDrawer(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent("navItemGroup");

        if (entries.length > 0) {
          const fields = entries[0].fields;
          setNavItems(
            fields.items?.map((item) => ({
              label: item.fields.label || item.fields.title || "Unnamed",
            })) || []
          );
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const viewContentPage = (page) => {
    router.push(`/pages/content?keyword=${page}`);
  };

  return (
    <NavProvider>
        <QuickLinksProvider>
    <header
      className={`fixed top-0 left-0 w-full h-[17%] z-30 p-4 flex items-center justify-between transition-colors duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-sm text-yellow-500 shadow-md"
          : "bg-gradient-to-b from-black/80 to-transparent text-white"
      }`}
    >
      <Drawer isOpen={showDrawer} onClose={onClose} />

      <div
        onClick={() => router.push("/")}
        className="cursor-pointer flex items-center md:justify-start text-2xl font-bold w-auto md:w-[20%]"
      >
        {navData.logoUrl ? (
          <LogoImage src={navData.logoUrl} />
        ) : (
          <LoadingSpinner />
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-evenly items-center w-full font-bold space-x-6">
        {navData.navItems.map((item, index) => (
          <div
            key={index}
            className="hover:text-gray-500 transition cursor-pointer"
            onClick={() => viewContentPage(item.label)}
          >
            {item.label.toUpperCase()}
          </div>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <FiMenu
          className={`text-3xl cursor-pointer transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setShowDrawer(true)}
        />
      </div>
    </header>
    </QuickLinksProvider>
    </NavProvider>
  );
};

export default Header;
