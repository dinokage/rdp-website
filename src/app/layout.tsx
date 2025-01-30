import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider"
// import {NextUIProvider} from "@nextui-org/react";
import { SiteHeader } from "@/components/site-header";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

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
  title: "RDP Datacenter",
  description: "RDP Datacenter",
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
        

        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            
            disableTransitionOnChange
          >
          
          <div className="relative flex w-full flex-col items-center justify-center pb-0">
            <SiteHeader />
            </div>
             {children}
          <Analytics/>
          <SpeedInsights/>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
