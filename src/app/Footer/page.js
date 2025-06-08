import React from "react";
import { FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const footerData = {
  logo: "/logo.png",
  quickLinks: [
    ["Home", "About us", "Happenings", "Factory", "Customer Reviews", "Our Projects"],
    ["Blogs", "Careers", "Reels", "Privacy Policy", "Terms & Conditions", "Contact Us"],
  ],
  address: [
    "Kizhavana Road,", 
    "Panampilly Nagar, Kochi", 
    "Kadungalloor,", 
    "Valanjambalam Junction, Aluva"
  ],
  contactInfo: [
    { type: "email", value: "info@creohomes.in" },
    { type: "phone", value: "+91 9645 899 951" },
    { type: "phone", value: "+91 9645 899 952" },
    { type: "phone", value: "+91 9645 899 953" },
    { type: "social", value: "Instagram" },
  ],
  companyInfo: {
    year: 2025,
    name: "Creo Homes",
    privacyLink: "/privacy-policy",
    madeBy: "KENPRIMO",
  },
};

const Footer = () => {
  return (
    <footer 
    className="bg-cover bg-center py-10 w-full"
    style={{ backgroundImage: `url("/img/grat.jpeg")` }} 
  >
  
      <div className="container mx-auto px-6">
        <div className="flex">
          {/* Logo Section */}
          <div className="w-[20%]  flex flex-col items-center md:items-start p-4">
          <img src="/logo/lgo.png" alt="Creo Homes" className="h-32 w-40 color-black" />

          </div>
      
          {/* Main Content */}
          <div className="flex justify-evenly  bg-opacity-50 w-[80%] p-6 rounded-lg">
            {/* Quick Links */}
            <div className="col-span-2 flex gap-24">
              {footerData.quickLinks.map((column, i) => (
                <ul key={i} className="space-y-2 text-sm">
                  {column.map((item, index) => (
                    <li key={index} className="hover:underline cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            {/* Address Section */}
            <div className="flex flex-col">
              <h3 className=" font-semibold uppercase mb-2">Our Address</h3>
              {footerData.address.map((line, i) => (
                <p key={i} className="text-sm">{line}</p>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col">
              <h3 className=" font-semibold uppercase mb-2">Contact Us</h3>
              {footerData.contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  {contact.type === "email" && <FaEnvelope className="text-gray-400" />}
                  {contact.type === "phone" && <FaPhone className="text-gray-400" />}
                  {contact.type === "social" && <FaInstagram className="text-gray-400" />}
                  <span>{contact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

       
        <div className="flex justify-evenly mt-10 text-sm ">
          <p>© {footerData.companyInfo.year} {footerData.companyInfo.name}. All Rights Reserved</p>
          <p className="mt-1">
            <a href={footerData.companyInfo.privacyLink} className="underline">
              Privacy Policy
            </a>
          </p>
          <p className="mt-1">
            Made by <span className="font-semibold">{footerData.companyInfo.madeBy}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
