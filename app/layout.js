import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-color-bg text-white font-exo">
        <div className="container mx-auto px-4 py-4">
          <Navbar/>
        {children}
        <div id="modal-root-content" />
        </div>
      </body>
    </html>
  );
}
