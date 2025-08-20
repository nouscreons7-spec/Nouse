




import ContactUs from "./contactcomponent/page";
export const metadata = {
  title: "Contact Nouse Homes | Luxury Home Builders in Kerala",
  description:
    "Get in touch with Nouse Homes today. Contact our team of expert architects and builders for consultations, project inquiries, and collaborations across Kerala.",
  keywords: [
    "Contact Nouse Homes",
    "Luxury home builders Kerala",
    "Architects Kerala",
    "Home construction Kerala",
    "Contact builders Kerala",
    "Luxury house design Kerala",
  ],
  openGraph: {
    title: "Contact Nouse Homes | Luxury Builders in Kerala",
    description:
      "Reach out to Nouse Homes for expert guidance on your dream home. Available for consultations, inquiries, and collaborations.",
    url: "https://www.nousehomes.com/contact",
    siteName: "Nouse Homes",
    images: [
      {
        url: "https://www.nousehomes.com/og-contact.jpg", // Replace with actual contact page banner
        width: 1200,
        height: 630,
        alt: "Contact Nouse Homes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Nouse Homes | Luxury Home Builders in Kerala",
    description:
      "Talk to our architects and builders for luxury home projects in Kerala. Let’s create your dream home together.",
    images: ["https://www.nousehomes.com/og-contact.jpg"], // Same image as OG
  },
};


export default function Page() {
  return <ContactUs />;
}
