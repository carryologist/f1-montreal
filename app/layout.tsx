import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Montreal F1 2026 — May 21–24, 2026",
  description: "Info for our family F1 trip: hotel details, things to do in Montreal, and travel notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-black text-white">
        {/* Navigation Bar - Similar to Birthday Site */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
          <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold text-white hover:text-orange-500 transition-colors">
              Montreal F1 2026
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/stay" className="nav-link">
                🏨 Stay Info
              </Link>
              <Link href="/things-to-do" className="nav-link">
                🎆 Things to Do
              </Link>
              <Link href="/travel-notes" className="nav-link">
                ✈️ Travel Notes
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main>
          {children}
        </main>

        {/* Clean Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 text-center py-8">
          <p className="text-gray-400 text-sm">
            May 21–24, 2026 • Canadian Grand Prix • Circuit Gilles Villeneuve • Montréal, QC
          </p>
        </footer>
      </body>
    </html>
  );
}