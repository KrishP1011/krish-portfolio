import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "@/app/assets/css/App.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CursorSpotlight from "@/components/CursorSpotlight";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Krish Patel's Portfolio",
  description: "Krish Patel's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${plusJakarta.variable} font-body antialiased`}
      >
        <CursorSpotlight />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
