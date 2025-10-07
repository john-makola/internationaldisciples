import type { Metadata } from "next";
import Script from "next/script";
// import { Geist, Geist_Mono } from "next/font/google";
import BackToTopButton from "@/hooks/BackToTopButton";
import LeftMenuTabs from "@/components/eventsleftmenustabs";
import SubscriptionBanner from "@/components/SubscriptionBanner";



export const metadata: Metadata = {
  title: "Events – International Disciples",
  description:
    "Join our upcoming events including conferences, discipleship training, and mission outreach opportunities.",
  keywords: [
    "Christian events",
    "International Disciples events",
    "Discipleship training",
    "Church conferences",
    "Mission outreach",
    "Faith-based gatherings",
    "Gospel seminars",
    "Christian leadership events",
    "Christian workshops",
    "International Disciples calendar",
  ],
  alternates: {
    canonical: "https://internationaldisciples.com/events",
  },
  openGraph: {
    title: "Events – International Disciples",
    description:
      "Discover and join our upcoming events, conferences, and global discipleship training sessions.",
    url: "https://internationaldisciples.com/events",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div>
          <div className="flex flex-col md:flex-row min-h-screen">
            <LeftMenuTabs />
            <div className="w-full sm:w-full md:w-3/4 p-2 sm:p-1 sm:py-0.15rem] md:py-[0.15rem]">
              {children}
            </div>
          </div>
          <SubscriptionBanner />
          <div className="py-4"></div>
        </div>

        <BackToTopButton />
        <Script
          id="events-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Discipleship Events",
              url: "https://internationaldisciples.com/events",
              description:
                "Explore upcoming discipleship events, training programs, and outreach missions organized by International Disciples.",
              organizer: {
                "@type": "Organization",
                name: "International Disciples Mission Ministries",
                url: "https://internationaldisciples.com",
              },
              eventAttendanceMode:
                "https://schema.org/MixedEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
            }),
          }}
        />
    </div>
  );
}
