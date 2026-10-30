import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zion-portfolio.vercel.app"),
  title: "Zion Nishikawa | Mechanical Engineering Portfolio",
  description: "Mechanical Engineering student at Olin College of Engineering. Welcome to my workshop — explore my robotics, CAD, lathe, and fabrication projects.",
  keywords: ["Zion Nishikawa", "Mechanical Engineering", "Olin College", "Robotics", "Portfolio", "SolidWorks", "Onshape"],
  openGraph: {
    title: "Zion Nishikawa | Mechanical Engineering Portfolio",
    description: "Welcome to my workshop, come check it out! Mechanical Engineering @ Olin College.",
    images: [
      {
        url: "/images/zion-headshot.jpg",
        width: 800,
        height: 1000,
        alt: "Zion Nishikawa",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${caveat.variable} scroll-smooth`}>
      <body className="bg-[#F8F3E9] text-[#2A1810] antialiased selection:bg-[#E8D8BF] selection:text-[#2A1810]">
        {children}
      </body>
    </html>
  );
}
