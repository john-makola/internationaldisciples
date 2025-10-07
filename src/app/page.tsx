// app/page.tsx

import Script from "next/script";
import CallToDisciple from "@/components/CallToDisciple";
import HomeSlider from "@/components/homeslider";
import OurMission from "@/components/OurMission";
import Services from "@/components/services";

export const metadata = {
  title: "Home - International Disciples Mission Ministries",
  description: "Restoring the body of Christ through discipleship, unity, and fruitfulness.",
  alternates: {
    canonical: "https://internationaldisciples.com",
  },
  openGraph: {
    title: "Home - International Disciples Mission Ministries",
    description: "Join us in our mission to raise true disciples and unite the church.",
    url: "https://internationaldisciples.com",
    siteName: "International Disciples",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <HomeSlider />
      <CallToDisciple />
      <OurMission />
      <Services />

      {/* JSON-LD Structured Data */}
      <Script
        id="ld-json-home"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "International Disciples Mission Ministries",
            url: "https://internationaldisciples.com",
            description:
              "A diverse association dedicated to restoring the body of Christ through discipleship, unity, and fruitfulness.",
            telephone: "+254110916470",
            email: "info@internationaldisciples.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nairobi, Kenya",
            },
          }),
        }}
      />
    </div>
  );
}
