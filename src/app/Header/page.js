"use client"

import React from "react";
import { FiMenu } from "react-icons/fi"; // Importing menu icon
import { useState } from "react";
import Drawer from "../Drawer/page";
const Header = ({ navItems, contactNumber, quoteText }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const onClose = () => setShowDrawer(false);
  return (
    <header className="absolute top-0 left-0 w-full h-[20%] z-10 bg-gradient-to-b from-black/80 to-transparent text-white p-4 flex w-full items-center">
       <Drawer isOpen={showDrawer} onClose={onClose} />
      <div className="text-2xl font-bold flex items-center w-[25%]">
        <img src="/logo.png" alt="Creo Homes" className="h-10" />
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex justify-evenly w-full items-center font-bold">
        {navItems.map((item, index) => (
          <a key={index} href={item.link} className="hover:text-gray-300 transition">
            {item.label}
          </a>
        ))}
        <button className="cursor bg-yellow-100 text-black px-4 py-2 rounded-lg font-semibold">
          {contactNumber}
        </button>
        <button className="bg-yellow-100 text-black px-4 py-2 rounded-lg font-semibold">
          {quoteText}
        </button>
        {/* Menu Icon for Mobile */}
        <FiMenu className=" text-white   text-2xl  cursor-pointer" onClick={() => setShowDrawer(true)}/>
      </nav>

      {/* Contact & Quote Section */}
      <div className="flex items-center space-x-4">
      
      </div>
    </header>
  );
};

export default Header;
