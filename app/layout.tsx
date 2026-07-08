import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rizalariadi.vercel.app"),
  title: "Rizal Ariadi — Digital Consultant & Sistem Korporat",
  description:
    "Bekerja bareng tim AI untuk membangun dashboard, otomasi, dan tools internal untuk klien korporat. Hasil tetap dipegang manusia.",
  openGraph: {
    title: "Rizal Ariadi — Digital Consultant & Sistem Korporat",
    description:
      "Bekerja bareng tim AI untuk membangun dashboard, otomasi, dan tools internal untuk klien korporat. Hasil tetap dipegang manusia.",
    url: "https://rizalariadi.vercel.app",
    siteName: "Rizal Ariadi",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body bg-navy text-text-primary antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
