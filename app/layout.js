import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Johnny Jev",
  description: "Frontend Developer & AI Engineer who builds intelligent web apps that solve real problems.",

  // Open Graph Metadata
  openGraph: {
    title: "Jev | Frontend Developer & AI Engineer",
    description: "Frontend Developer & AI Engineer who builds intelligent web apps that solve real problems.",
    url: "https://johnnyjev.vercel.app",
    siteName: "Johnny Jev",
    images: [
      {
        url: "/og-image.png",                  // We'll handle this later
        width: 1200,
        height: 630,
        alt: "Johnny Jev Portfolio",
      },
    ],
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
