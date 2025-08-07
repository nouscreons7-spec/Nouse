"use client";
import React, { useEffect, useState } from "react";
import { getContent2 } from "@/contentful/page";
import { useRouter } from "next/navigation";
import LogoImage from "../logo/page";
import { useQuickLinks } from "../context/quickLinks";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const { setQuickLinks } = useQuickLinks();
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent2("footer");
        if (!entries || entries.length === 0) return;

        const fields = entries[0].fields;

        const logo = fields.logo?.fields?.file?.url
          ? `https:${fields.logo.fields.file.url}`
          : "";

        const bgImage = fields.bgImage?.fields?.file?.url
          ? `https:${fields.bgImage.fields.file.url}`
          : "";

        const quickLinks = (fields.quickLinks || []).map((group) => ({
          section: group.fields?.section || "",
          links: (group.fields?.pageLink || []).map((link) => ({
            platform: link.fields?.platform || "",
            url: link.fields?.url || "#",
          })),
        }));

        const address = (fields.address || []).map((loc) => ({
          label: loc.label || "",
          lines: loc.lines || [],
        }));

        const contactInfo = (fields.contactInfo || []).map((entry) => ({
          type: entry.fields?.type || "",
          value: entry.fields?.value || "",
          icon: entry.fields?.icon?.fields?.file?.url
            ? `https:${entry.fields.icon.fields.file.url}`
            : "",
        }));

        const socialLinks = (fields.socialLinks || []).map((link) => ({
          name: link.fields?.name || "",
          url: link.fields?.url || "#",
          icon: link.fields?.icon?.fields?.file?.url
            ? `https:${link.fields.icon.fields.file.url}`
            : "",
        }));

        const company = fields.companyInfo?.fields || {};
        const companyInfo = {
          year: company.year || "",
          name: company.name || "",
          privacyLink: company.privacyLink || "",
          madeBy: company.madeBy || "",
          label:company.label || "",
        };

        const structuredFooter = {
          logo,
          bgImage,
          quickLinks,
          address,
          contactInfo,
          socialLinks,
          companyInfo,
        };

        setFooterData(structuredFooter);
        setQuickLinks(quickLinks);
      } catch (err) {
        console.error("Error fetching footer data:", err.message);
      }
    }

    fetchData();
  }, []);

  if (!footerData) return null;
console.log(footerData.companyInfo,"dasd");

  return (
    <div
      className="bg-cover bg-center w-full text-black"
      style={{ backgroundImage: `url(${footerData.bgImage})` }}
    >
      <div className="w-full py-8 px-4">
        <div className="flex flex-col lg:flex-row">
          {/* === Logo and Socials === */}
          <div className="w-full lg:w-[25%] flex flex-col items-center mb-6">
            <LogoImage src={footerData.logo} />
            <div className="flex gap-4 mt-4">
              {footerData.socialLinks.map((social, idx) => (
                <a
                  href={social.url}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* === Quick Links === */}
          <div className="w-full lg:w-[25%] text-center mb-6">
            <h3 className="uppercase font-semibold mb-4 text-sm">
              {footerData.quickLinks[0]?.section}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {footerData.quickLinks[0]?.links.map((link, i) => (
                <a key={i} href={link.url} className="hover:underline text-sm">
                  {link.platform}
                </a>
              ))}
            </div>
          </div>

          {/* === Address === */}
          <div className="w-full lg:w-[25%] text-center mb-6">
            <h3 className="uppercase font-semibold mb-4 text-sm">Our Address</h3>
      
      <div className="flex flex-row lg:flex-col justify-evenly">


            {footerData.address.map((location, i) => (
              <div key={i} className="mb-4">
                <p className="font-bold text-md">{location.label}</p>
                {location.lines.map((line, j) => (
                  <p key={j} className="text-sm">
                    {line}
                  </p>
                ))}
              </div>
            ))}</div>
          </div>

          {/* === Contact Info === */}
          <div className="w-full lg:w-[25%] text-center mb-6">
            <h3 className="uppercase font-semibold mb-4 text-sm">Contact Us</h3>
            {footerData.contactInfo.map((contact, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 text-sm mb-2"
              >
                <img
                  src={contact.icon}
                  alt={contact.type}
                  className="w-4 h-4"
                />
                <span>{contact.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* === Bottom Bar === */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-xs text-center border-t pt-4 border-gray-300">
          <p>
          {footerData.companyInfo.year} {footerData.companyInfo.name}
          </p>
          <p >
            <a href={footerData.companyInfo.privacyLink}>{footerData.companyInfo.label}</a>
          </p>
          <p>
           
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
