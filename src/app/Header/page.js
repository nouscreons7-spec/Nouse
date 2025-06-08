"use client";

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Drawer from "../Drawer/page";

const Header = ({ quoteText, navItems }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const onClose = () => setShowDrawer(false);

const router = useRouter()
const viewContentPage = (page) => {
  router.push(`/pages/content?keyword=${page}`);
};
  return (
    <header className="absolute top-0 left-0 w-full h-[20%] z-10 bg-gradient-to-b from-black/80 to-transparent text-white p-4 flex items-center">
      <Drawer isOpen={showDrawer} onClose={onClose} />

      <div onClick={()=> router.push("/")} className=" cursor-pointer flex justify-center text-2xl font-bold items-center w-[20%]">
        <img src="/logo/lgo.png" alt="Creo Homes" className="h-32 w-40" />
      </div>

     
      <nav className="hidden md:flex justify-evenly w-full items-center font-bold">
        {navItems?.map((item, index) => (
          <div
            key={index}
            // href={item.link}
            className="hover:text-gray-300 transition cursor-pointer"
            onClick={() => viewContentPage(item.label)}
          >
            {item.label}
          </div>
        ))}

        

        <button className="bg-yellow-100 text-black px-4 py-2 rounded-lg font-semibold cursor-pointer">
          {quoteText}
        </button>

        <FiMenu
          className="text-white text-2xl cursor-pointer"
          onClick={() => setShowDrawer(true)}
        />
      </nav>
    </header>
  );
};

export default Header;
