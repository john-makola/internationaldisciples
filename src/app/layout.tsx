import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/topnavbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TopNavBar />
        <div className="pt-25 md:pt-[6.5rem] pb-0 mb-0">
          {children}
          <Footer />
        </div>
      </body>
      
    </html>
  );
}
