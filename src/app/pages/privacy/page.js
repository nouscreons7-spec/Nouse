import Privacy from "./privacycomponent/page";




export const metadata = {
  title: "Privacy Policy | Nouse Homes",
  description:
    "Read Nouse Homes’ Privacy Policy to understand how we collect, use, and protect your personal information while delivering premium homebuilding and architectural services.",
  keywords: [
    "Nouse Homes privacy policy",
    "data protection Kerala builders",
    "privacy and security Nouse Homes",
    "personal data safety Nouse Homes",
    "Kerala home builders privacy",
  ],
  openGraph: {
    title: "Privacy Policy | Nouse Homes",
    description:
      "Learn how Nouse Homes safeguards your data and ensures transparency in our privacy practices.",
    url: "https://www.nousehomes.com/privacy",
    siteName: "Nouse Homes",
    images: [
      {
        url: "https://www.nousehomes.com/og-privacy.jpg", // 👉 replace with actual image if you have one
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Nouse Homes",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Nouse Homes",
    description:
      "At Nouse Homes, your privacy matters. Read how we collect, use, and protect your data.",
    images: ["https://www.nousehomes.com/og-privacy.jpg"], // same as OG image
  },
};


export default function Page() {
  return <Privacy />;
}