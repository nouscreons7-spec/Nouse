
import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.nousehomes.com"),
  title: {
    default: "Nouse creons Homes | Luxury Builders & Architects in Kerala",
    template: "%s | Nouse creons Homes",
  },
  description:
    "Nouse Homes are leading luxury builders and architects in Kerala, specializing in custom homes that combine modern design with timeless craftsmanship.",
  keywords: [
    "Luxury Homes Kerala",
    "Home Builders Kerala",
    "Architects Kerala",
    "Custom Homes",
    "Nouse Homes",
  ],
  openGraph: {
    title: "Nouse creonsHomes | Luxury Builders & Architects in Kerala",
    description:
      "Discover Nouse creons Homes – premium builders and architects in Kerala. We create bespoke homes with elegance, quality, and innovation.",
    url: "https://www.nousehomes.com",
    siteName: "Nouse creons Homes",
    images: [
      {
        url: "https://www.nousehomes.com/shade1.jpg", // 👉 update with real OG image
        width: 1200,
        height: 630,
        alt: "Nouse creons Homes",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nouse Homes | Luxury Builders & Architects in Kerala",
    description:
      "Luxury builders & architects in Kerala creating dream homes with timeless design.",
    images: ["https://www.nousehomes.com/shade1.jpg"], 
  },
  alternates: {
    canonical: "https://www.nousehomes.com",
  },
};

export default function RootLayout({ children }) {
  // ✅ Schema.org JSON-LD for the website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nouse Homes",
    url: "https://www.nousehomes.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.nousehomes.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Inject JSON-LD structured data */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
