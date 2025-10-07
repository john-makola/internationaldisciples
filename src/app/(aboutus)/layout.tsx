import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";

import BackToTopButton from "@/hooks/BackToTopButton";
import LeftMenuTabs from "@/components/aboutusleftmenustabs";
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
  title: "About Us – International Disciples",
  description: "Our story, leadership team, and why discipleship matters.",
  keywords: [
    "Christian discipleship",
    "International Disciples Mission Ministries",
    "About International Disciples",
    "Christian leadership",
    "Faith-based organization",
    "Christian missions",
    "YWAM partnership",
    "Why discipleship matters",
    "Board of directors",
    "Prayer team",
  ],
  alternates: { canonical: "https://internationaldisciples.com/about" },
  openGraph: {
    title: "About Us – International Disciples",
    description:
      "Discover our story, board members, and why discipleship matters.",
    url: "https://internationaldisciples.com/about",
    type: "profile",
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
          id="about-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              mainEntity: {
                "@type": "Organization",
                name: "International Disciples Mission Ministries",
                url: "https://internationaldisciples.com/about",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
