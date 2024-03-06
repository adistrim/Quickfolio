import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header"

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Raj",
  description: "Portfolio of an aspiring Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/me.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[#fefbf6] dark:bg-[#111010]">
        <main className={`antialiasing max-w-3xl mx-4 my-[3rem] sm:mx-auto ${montserrat.className}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
