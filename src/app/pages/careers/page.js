
import Careers from "./careercomponent/page";

export const metadata = {
  title: "Careers | Nouse Homes",
  description:
    "Join Nouse Homes – a leading luxury builder and architect in Kerala. Explore career opportunities, grow your skills, and build dream homes with us.",
  keywords: [
    "Nouse Homes careers",
    "jobs at Nouse Homes",
    "luxury builder jobs Kerala",
    "architect careers Kerala",
    "construction jobs Kerala",
    "work with Nouse Homes",
  ],
  openGraph: {
    title: "Careers | Nouse Homes",
    description:
      "Be part of Nouse Homes. Explore exciting career opportunities in architecture, engineering, and construction across Kerala.",
    url: "https://www.nousehomes.com/career",
    siteName: "Nouse Homes",
    images: [
      {
        url: "https://www.nousehomes.com/og-career.jpg", // Replace with career/team image
        width: 1200,
        height: 630,
        alt: "Careers at Nouse Homes – Join our team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Nouse Homes",
    description:
      "Discover career opportunities at Nouse Homes – luxury builders and architects in Kerala.",
    images: ["https://www.nousehomes.com/og-career.jpg"], // Replace same as OG
  },
};

export default function Page() {
  return <Careers />;
}
