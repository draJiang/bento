import type { Metadata } from "next";
import BackgroundColor from './ui/BackgroundColor'
import Nav from './ui/Nav'
import Footer from './ui/Footer'

import Script from 'next/script'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bento",
  description: "A note-taking tool that allows you to quickly access and edit your notes.",
  // icons: {
  //   icon: "/favicon.ico"
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <head>

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-J77PXETLFW`}
        />

        <Script id="google-analytics">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-J77PXETLFW');
    `}
        </Script>



      </head>
      <body className={inter.className}>
        <BackgroundColor />
        <main className="flex min-h-screen flex-col items-center">
          <Nav />
          <div className="grow w-full max-w-2xl">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
