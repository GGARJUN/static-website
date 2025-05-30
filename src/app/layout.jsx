import dynamic from "next/dynamic";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";


const Footer = dynamic(() => import("@/pages/Footer/Footer"));
const NavLinks = dynamic(() => import("@/pages/NavBar/NavLinks"));


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});

export const metadata = {
  title: "Sunkey Design Systems",
  description: "We empower businesses to innovate in the tech landscape by providing cutting-edge solutions in engineering design, electronics, IoT, and manufacturing.",
  // icons: {
  //   icon: '/Logo/SunKey-Design-Systems-Favicon.ico', // Using ICO format
  // },
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
