import type { Metadata } from "next";
import { Providers } from "./providers";
import { primary_font } from "@/lib/fonts";
import "@/styles/globals.css"

import { cn } from "@/lib/utils";

import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head />
      <body className={cn("flex flex-col min-h-screen bg-background antialiased", primary_font.className)}>
        <Providers
          attribute="class"
          defaultTheme="system"
        >
          <div className="flex flex-col justify-between flex-grow">
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
