
import AboutUs from "./aboutComponent/page";

export const metadata = {
  title: "About Us | Nouse Homes",
  description:
    "Discover Nouse Homes – luxury home builders and architects in Kerala. Learn about our vision, core team, and commitment to crafting premium living spaces.",
  keywords: [
    "Nouse Homes",
    "about Nouse Homes",
    "luxury builders Kerala",
    "architects Kerala",
    "premium homes Kerala",
    "home construction Kerala",
  ],
  openGraph: {
    title: "About Us | Nouse Homes",
    description:
      "Meet the Nouse Homes team – blending creativity and engineering to build luxury homes across Kerala.",
    url: "https://www.nousehomes.com/about",
    siteName: "Nouse Homes",
    images: [
      {
        url: "https://www.nousehomes.com/shade1.jpg",
        width: 1200,
        height: 630,
        alt: "Nouse Homes team – Luxury builders in Kerala",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Nouse Homes",
    description:
      "Discover the Nouse Homes vision and meet our team of architects and builders crafting premium homes in Kerala.",
    images: ["https://www.nousehomes.com/shade1.jpg"],
  },
};

export default function Page() {
  return <AboutUs />;
}
