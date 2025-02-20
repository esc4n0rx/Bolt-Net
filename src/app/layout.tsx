import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Meu PWA",
  description: "Um Progressive Web App em Next.js",
  icons: {
    icon: "/icon-192x192.png",
  },
  manifest: "/manifest.json",
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
