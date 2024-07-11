import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "@/components/banner";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🚀 $POV MOONSHOT",
  description: "$POV IS GOING TO THE MOON 🚀. GET IN BEFORE 10Mil.",
  icons: ["/pov7.jpg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'container absolute inset-0 h-full w-full bg-green-400 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]')}>
        {/* <div className="">
          <Banner></Banner>
        </div>*/}
        {children}
      </body>
    </html>
  );
}
