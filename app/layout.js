import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Poppins } from 'next/font/google';
import "./globals.css";
import "../app/assets/css/custom.css";
import Header from "./ui/header";
import Footer from "./ui/footer";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sidebar from "./ui/sidebar";
import Insideheader from "./ui/insideheader";
import ReduxProvider from "./stores/ReduxProvider";
import ClientLayoutWrapper from "./ClientLayoutWrapper";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700'], // optional: define font weights
  variable: '--font-roboto', // optional: for CSS variables
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "c4chess",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {/* <ReduxProvider>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </ReduxProvider> */}
        {/* <main>
          <div className="flex gap-10 bg-[#F3F3F3] p-5">
            <div className="sidebar_area w-2/12">
               <Sidebar />
            </div>
            <div className="content_area w-10/12">
              <Insideheader />
              {children}
            </div>
          </div>
        </main> */}
        <ReduxProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
