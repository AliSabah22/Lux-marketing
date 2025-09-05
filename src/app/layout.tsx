import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";
import { CursorProvider } from "@/components/CursorProvider";

export const metadata: Metadata = {
  title: "LUX MEDIA",
  description: "Premium marketing agency website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CursorProvider>
          <LenisProvider>
            <SiteHeader />
            <main className="pt-24 lg:pt-28">{children}</main>
            <Footer />
          </LenisProvider>
        </CursorProvider>
      </body>
    </html>
  );
}


