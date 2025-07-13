"use client";
import React, { useEffect, useState } from "react";
import { FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { getContent2 } from "@/contentful/page";
import { useRouter } from "next/navigation";
import LogoImage from "../logo/page";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent2("footer");
        if (!entries || entries.length === 0) return;

        const fields = entries[0].fields;

        // === LOGO ===
        const logo = fields.logo?.fields?.file?.url || "";

        // === BACKGROUND IMAGE ===
        const bgImage = fields.bgImage?.fields?.file?.url || "";

        // === QUICK LINKS ===
        const quickLinkData = fields.quickLinks?.fields?.pageLink || [];

        const quickLinks = [];

        for (const item of quickLinkData) {
          const linkFields = item.fields;

          // If it's a direct link (platform + url)
          if (linkFields?.platform && linkFields?.url) {
            // Push into a default section if no sectioning exists
            let defaultSection = quickLinks.find(
              (s) => s.section === "General"
            );
            if (!defaultSection) {
              defaultSection = { section: "General", links: [] };
              quickLinks.push(defaultSection);
            }
            defaultSection.links.push({
              platform: linkFields.platform,
              url: linkFields.url,
            });
          }

          // If it's a section with multiple links
          else if (linkFields?.section && Array.isArray(linkFields?.pageLink)) {
            quickLinks.push({
              section: linkFields.section,
              links: linkFields.pageLink.map((subLink) => ({
                platform: subLink.fields?.platform || "",
                url: subLink.fields?.url || "#",
              })),
            });
          }
        }

        // === CONTACT INFO ===
        const contactFields = fields.contactInfo?.fields || {};
        let contactInfo = [];

        if (contactFields.email) {
          contactInfo.push({ type: "email", value: contactFields.email });
        }

        (contactFields.phones || []).forEach((phone) => {
          contactInfo.push({ type: "phone", value: phone });
        });

        (contactFields.social || []).forEach((socialItem) => {
          if (socialItem.fields) {
            contactInfo.push({
              type: "social",
              value: socialItem.fields.url,
              label: socialItem.fields.platform,
            });
          }
        });

        // === FOOTER LOGOS ===
        const footerLogos = (fields.footerLogos || []).map((logo) => ({
          src: logo.fields?.src?.fields?.file?.url || "",
          alt: logo.fields?.alt || "",
        }));

        // === COMPANY INFO ===
        const company = fields.companyInfo?.fields || {};
        const companyInfo = {
          year: company.year || "",
          name: company.name || "",
          privacyLink: company.privacyLink || "",
          madeBy: company.madeBy || "",
        };

        // === ADDRESS ===
        const address = fields.address || [];

        setFooterData({
          logo,
          bgImage,
          quickLinks,
          address,
          contactInfo,
          footerLogos,
          companyInfo,
        });
      } catch (err) {
        console.error("Error fetching footer data:", err.message);
      }
    }

    fetchData();
  }, []);

  if (!footerData) return null;

  return (
    <div
      className="bg-cover bg-center w-full text-white "
      style={{
        backgroundImage: `url(${footerData.bgImage})`,
      }}
    >
      <div className="container ">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-full lg:w-[25%] flex flex-col items-center ">
            <LogoImage src={footerData.logo} />

            <div className="flex flex-wrap gap-2 justify-center ">
              {footerData.footerLogos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 object-contain"
                />
              ))}
            </div>
          </div>

          <div className=" mt-4  w-full flex flex-col justify-center items-center sm:flex-row justify-evenly bg-opacity-50 rounded-lg">
          <div className=" flex flex-col  text-center md:flex-row md:w-[50%] justify-evenly items-center gap-6">
          {footerData.quickLinks.map((section, i) => (
                <div
                  key={i}
                  className="   flex flex-col  justify-center items-center text-center"
                >
                  <ul>
                    {section.links.map((item, index) => (
                      <li
                        key={index}
                        className="w-full mb-6 text-center sm:hover:underline cursor-pointer mt-4 text-center"
                      >
                        <a href={item.url}>{item.platform}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className=" w-[50%] flex flex-col md:flex-row justify-evenly  md:mt-0">
              <div className="text-center md:text-left">
                <h3 className="font-semibold uppercase mt-6 mb-4">
                  Our Address
                </h3>

                <div className="grid grid-rows-2 grid-flow-col gap-2">
                  {footerData.address.map((line, i) => (
                    <p key={i} className="text-sm whitespace-pre-line">
                      {line}
                      {i !== footerData.address.length - 1 && ","}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col text-center md:text-left">
                <h3 className=" sm:font-semibold uppercase mt-6 ">
                  Contact Us
                </h3>
                {footerData.contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center md:justify-start gap-2 text-sm mt-4"
                  >
                    {contact.type === "email" && (
                      <FaEnvelope className="text-gray-400" />
                    )}
                    {contact.type === "phone" && (
                      <FaPhone className="text-gray-400" />
                    )}
                    {contact.type === "social" && (
                      <FaInstagram className="text-gray-400" />
                    )}
                    <span>
                      {contact.label ? `${contact.label}: ` : ""}
                      {contact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around text-sm text-center p-5">
          <p>
            © {footerData.companyInfo.year} {footerData.companyInfo.name}. All
            Rights Reserved
          </p>
          <p className="mt-1"></p>
          <p className="mt-1">
            Made by{" "}
            <span className="font-semibold">
              {footerData.companyInfo.madeBy}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
