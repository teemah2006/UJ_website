import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavbarSimple } from "./components/navbar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "UJ ventures",
  description: "Shop variety goods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarSimple/>
        <main className='min-h-screen bg-grey-300'>{children}</main>
      </body>
    </html>
  );
}
