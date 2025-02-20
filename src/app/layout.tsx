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

export const viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
