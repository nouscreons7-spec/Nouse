import React from "react";
import { FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const footerData = {
  logo: "/logo.png",
  quickLinks: [
    [
      "Home",
      "About us",
      "Happenings",
      "Factory",
      "Customer Reviews",
      "Our Projects",
    ],
    [
      "Blogs",
      "Careers",
      "Reels",
      "Privacy Policy",
      "Terms & Conditions",
      "Contact Us",
    ],
  ],
  address: [
    "Kizhavana Road,",
    "Panampilly Nagar, Kochi",
    "Kadungalloor,",
    "Valanjambalam Junction, Aluva",
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
    <div
      className="bg-cover bg-center w-full"
       style={{ backgroundImage: `url("/img/grat.jpeg")` }}
    >
      <div className="container  mx-auto px-4">
        <div className="flex flex-col lg:flex-row ">
          {/* Logo Section */}
          <div className="w-full lg:w-[15%] flex flex-col items-center md:items-start p-4">
            <img
              src="/logo/lgo.png"
              alt="Creo Homes"
              className="h-32 w-40"
            />
          </div>

          {/* Links + Address + Contact */}
          <div className="w-[100%] flex-row justify-evenly items-center  lg:w-4/5 flex flex-col md:flex-row justify-evenly items-center bg-opacity-50 rounded-lg p-4 gap-6">
            
            {/* Quick Links */}
            <div className=" w-[50%] flex flex-col justify-evenly md:flex-row gap-6">
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

            {/* Address + Contact */}
            <div className=" w-[50%] flex flex-col md:flex-row justify-evenly gap-20 mt-6 md:mt-0">
              {/* Address Section */}
              <div className="flex flex-col text-center md:text-left">
                <h3 className="font-semibold uppercase mb-2">Our Address</h3>
                {footerData.address.map((line, i) => (
                  <p key={i} className="text-sm">
                    {line}
                  </p>
                ))}
              </div>

              {/* Contact Info */}
              <div className="flex flex-col text-center md:text-left">
                <h3 className="font-semibold uppercase mb-2">Contact Us</h3>
                {footerData.contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center justify-center md:justify-start gap-2 text-sm">
                    {contact.type === "email" && <FaEnvelope className="text-gray-400" />}
                    {contact.type === "phone" && <FaPhone className="text-gray-400" />}
                    {contact.type === "social" && <FaInstagram className="text-gray-400" />}
                    <span>{contact.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-around  text-sm text-center p-5">
          <p>
            © {footerData.companyInfo.year} {footerData.companyInfo.name}. All Rights Reserved
          </p>
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
    </div>
  );
};


export default Footer;
