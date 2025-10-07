import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import BackToTopButton from "@/hooks/BackToTopButton";
import LeftMenuTabs from "@/components/ministriesleftmenutabs";
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
  title: "Our Ministries – International Disciples",
  description:
    "Explore our global ministries: leadership training, evangelism, discipleship, and community transformation.",
  keywords: [
    "Christian ministries",
    "Leadership training",
    "Global evangelism",
    "Community outreach",
    "Faith-based programs",
    "Discipleship initiatives",
    "Church planting",
    "Missionary support",
    "Youth and children ministry",
    "International Disciples Mission Ministries",
  ],
  alternates: {
    canonical: "https://internationaldisciples.com/ministries",
  },
  openGraph: {
    title: "Our Ministries – International Disciples",
    description:
      "Explore our global ministries: leadership training, evangelism, discipleship, and community transformation.",
    url: "https://internationaldisciples.com/ministries",
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
           id="ministries-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "International Disciples Mission Ministries",
              url: "https://internationaldisciples.com/ministries",
              description:
                "Explore our global ministries: leadership training, evangelism, discipleship, and community transformation.",
              areaServed: {
                "@type": "Place",
                name: "Global",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
