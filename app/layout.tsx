import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Petrel Bath Fittings | Premium Brass Bath Components",
    template: "%s | Petrel Bath Fittings"
  },
  description:
    "Premium brass bath fittings, bathroom accessories, internal fittings, faucet components, and OEM manufacturing for architects, builders, dealers, and export buyers.",
  keywords: [
    "Petrel Bath Fittings",
    "brass bath fittings",
    "bathroom accessories",
    "faucet components",
    "OEM bathroom fittings",
    "internal fittings manufacturer"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
