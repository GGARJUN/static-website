import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/pages/Footer/Footer"));
const NavLinks = dynamic(() => import("@/pages/NavBar/NavLinks"));

import { Geist_Mono, Space_Grotesk, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});

export const metadata = {
  title: "Sunkey Design Systems",
  description: "We empower businesses to innovate in the tech landscape by providing cutting-edge solutions in engineering design, electronics, IoT, and manufacturing.",
  icons: {
    icon: '/favicon.ico', // Using ICO format
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const revalidate = 30;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <NavLinks/>
        {children}
        <Toaster />
        <Footer/>
      </body>
    </html>
  );
}
