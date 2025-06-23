"use client";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const services = [
  "Architecture",
  "Construction",
  "Interior",
  "Turnkey projects",
];

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      "Home",
      "Happenings",
      "Customer Reviews",
      "Blogs",
      "Terms & conditions",
      "Videos",
    ],
  },
  {
    title: "Company",
    links: [
      "About us",
      "Factory",
      "Our projects",
      "Careers",
      "Privacy policy",
      "Contact us",
    ],
  },
];

const contactInfo = {
  phone: "9645899951",
  email: "info@creohomes.in",
};

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div>
      <div
        className={`fixed inset-y-0 right-0 bg-black text-white shadow-md z-20 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform ease-in-out duration-300 p-8 flex flex-col min-h-screen w-[350px] sm:w-[650px] `}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <RxCross2
            className="h-7 w-7 cursor-pointer text-gray-400 hover:text-white"
            onClick={onClose}
          />
        </div>

        {/* Drawer Content */}
        <div className="mt-4">
          {/* Services Section */}
          <h2 className="text-2xl font-semibold uppercase mb-4">
            Our Services
          </h2>
          <div className="flex  items-center grid grid-cols-4 gap-x-16 gap-y-4 text-lg text-gray-400 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="cursor-pointer hover:text-white transition"
              >
                {service}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-600 my-6"></div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-6 text-gray-400 text-sm">
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-white mb-2">
                  {section.title}
                </h3>
                {section.links.map((link, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="p-2 block hover:text-white transition"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-8 text-gray-400 text-sm ">
            <h3 className="font-semibold text-white">
              Get in contact with our team
            </h3>
            <div className="flex items-center space-x-3 mt-2 p-2">
              <span>📞</span>
              <p>{contactInfo.phone}</p>
            </div>
            <div className="flex items-center space-x-3 mt-1 p-2">
              <span>📧</span>
              <p>{contactInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
