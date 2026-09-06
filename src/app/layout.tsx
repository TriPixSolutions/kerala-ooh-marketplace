import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Ad Space | Kerala OOH Marketplace",
  description:
    "Discover advertising spaces across Kerala with location, pricing, reach, availability, and direct enquiry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
