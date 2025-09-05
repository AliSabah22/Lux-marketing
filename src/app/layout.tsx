import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}


