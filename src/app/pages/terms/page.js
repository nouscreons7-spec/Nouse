import Terms from "./termscomponent/page";
export const metadata = {
  title: "Terms & Conditions | Nouse Homes",
  description:
    "Review the Terms and Conditions of Nouse Homes. Learn about our policies, disclaimers, and user agreements for accessing our premium homebuilding and architectural services.",
  keywords: [
    "Nouse Homes terms and conditions",
    "Kerala builders user agreement",
    "Nouse Homes policies",
    "terms of service Nouse Homes",
    "Kerala architects legal terms",
  ],
  openGraph: {
    title: "Terms & Conditions | Nouse Homes",
    description:
      "Read Nouse Homes’ Terms & Conditions to understand our policies and service agreements.",
    url: "https://www.nousehomes.com/terms",
    siteName: "Nouse Homes",
    images: [
      {
        url: "https://www.nousehomes.com/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "Terms and Conditions - Nouse Homes",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Nouse Homes",
    description:
      "Read the Terms & Conditions for Nouse Homes’ homebuilding and architectural services.",
    images: ["https://www.nousehomes.com/og-terms.jpg"], // same OG image
  },
};


export default function Page() {
  return <Terms />;
}