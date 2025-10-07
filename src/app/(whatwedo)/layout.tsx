import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";

import BackToTopButton from "@/hooks/BackToTopButton";
import LeftMenuTabs from "@/components/whatwedoleftmenustabs";
import SubscriptionBanner from "@/components/SubscriptionBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "What We Do – International Disciples",
  description:
    "Empowering disciples, fundraising initiatives, and short-term missions.",
  keywords: [
    "Empowering disciples",
    "Fundraising for missions",
    "Short-term Christian missions",
    "Discipleship outreach",
    "Missionary programs",
    "Christian service projects",
    "Faith-based programs",
    "Church partnerships",
    "Mission education",
    "Community transformation",
  ],
  alternates: {
    canonical: "https://internationaldisciples.com/what-we-do",
  },
  openGraph: {
    title: "What We Do – International Disciples",
    description:
      "Empowering disciples, fundraising programs, and mission outreach.",
    url: "https://internationaldisciples.com/what-we-do",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div>
          <div className="flex flex-col md:flex-row min-h-screen">
            <LeftMenuTabs />
            <div className="w-full sm:w-full md:w-3/4 p-4 sm:p-1 sm:py-0.15rem] md:py-[0.15rem]">
              {children}
            </div>
          </div>
          <SubscriptionBanner />
          <div className="py-4"></div>
        </div>

        <BackToTopButton />
        <Script
           id="what-we-do-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "What We Do",
              provider: {
                "@type": "Organization",
                name: "International Disciples Mission Ministries",
                url: "https://internationaldisciples.com/",
              },
              description:
                "Empowering disciples, fundraising programs, short-term missions.",
            }),
          }}
        />
      </body>
    </html>
  );
}
