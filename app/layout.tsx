import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RootProvider } from "react-day-picker";
import RootProviders from "@/components/providers/RootProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Until You Die",
  description: "Find out when you'll die",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark relative flex h-screen w-full flex-col" style={{colorScheme: "dark",}}>
      <body className={inter.className}><RootProviders>{children}</RootProviders></body>
    </html>
  );
}
