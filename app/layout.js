import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >

        <nav>
         <NavBar></NavBar>
        </nav>
        <main className="min-h-screen">
        {children}
        </main>

        <footer>
          <Footer></Footer>
        </footer>

        
      </body>
    </html>
  );
}
