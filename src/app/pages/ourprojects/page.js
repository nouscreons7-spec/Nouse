import OurProjects from "./projectscomponent/page";



export const metadata = {
  title: "Our Projects | Nouse Homes – Luxury Builders & Architects in Kerala",
  description:
    "Explore Nouse Homes’ portfolio of luxury residences, premium villas, and architectural projects across Kerala. Discover craftsmanship, innovation, and timeless design.",
  keywords: [
    "Nouse Homes projects",
    "Luxury homes Kerala",
    "Premium villas Kerala",
    "Architectural design Kerala",
    "Kerala home builders",
    "Luxury house projects Kerala",
    "Modern home architecture Kerala",
  ],
  openGraph: {
    title: "Our Projects | Nouse Homes – Luxury Builders in Kerala",
    description:
      "Showcasing our finest work: luxury homes, premium villas, and architectural masterpieces across Kerala.",
    url: "https://www.nousehomes.com/projects",
    siteName: "Nouse Homes",
    images: [
      {
        url: "https://www.nousehomes.com/og-projects.jpg", // Replace with real banner/project image
        width: 1200,
        height: 630,
        alt: "Nouse Homes Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Nouse Homes – Luxury Homes in Kerala",
    description:
      "Discover Nouse Homes’ signature projects – luxury villas and premium homes across Kerala.",
    images: ["https://www.nousehomes.com/og-projects.jpg"],
  },
};


export default function Page() {
  return <OurProjects />;
}
