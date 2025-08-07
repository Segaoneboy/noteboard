import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/Header";
import {Toaster} from "react-hot-toast";


const tektur = Tektur ({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "900"],
});

export const metadata: Metadata = {
  title: "NoteBoard",
  description: "Online NoteBoard for your notes and ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`${tektur.className}  antialiased`}
      >
      <Header/>
      <Toaster/>
      {children}
      </body>
      </html>
  );
}
