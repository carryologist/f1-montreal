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
      <body className="min-h-screen">
        <div className="relative">
          {/* McLaren-inspired header */}
          <header className="relative z-50">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-95"></div>
            <nav className="relative mx-auto max-w-7xl flex items-center justify-between p-6">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-lg">F1</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold mclaren-gradient-text">Montreal F1 2026</h1>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Canadian Grand Prix</p>
                </div>
              </Link>
              
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/stay" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium uppercase text-sm tracking-wide">
                  Stay Info
                </Link>
                <Link href="/things-to-do" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium uppercase text-sm tracking-wide">
                  Things to Do
                </Link>
                <Link href="/travel-notes" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium uppercase text-sm tracking-wide">
                  Travel Notes
                </Link>
                <a
                  href="https://www.formula1.com/en/racing/2026/canada"
                  target="_blank"
                  rel="noreferrer"
                  className="mclaren-button-secondary text-xs"
                >
                  Official F1 Info
                </a>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-gray-300 hover:text-orange-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </nav>
            
            {/* Orange accent line */}
            <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </header>

          {/* Main content */}
          <main className="relative z-10">
            <div className="mx-auto max-w-7xl px-6 py-12">
              {children}
            </div>
          </main>

          {/* McLaren-inspired footer */}
          <footer className="relative z-10 mt-20">
            <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-8"></div>
            <div className="mx-auto max-w-7xl px-6 pb-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-sm">F1</span>
                  </div>
                  <span className="text-gray-400 text-sm uppercase tracking-wider">Montreal Grand Prix 2026</span>
                </div>
                <p className="text-gray-500 text-sm">
                  May 21–24, 2026 • Circuit Gilles Villeneuve • Montréal, QC
                </p>
                <p className="text-gray-600 text-xs mt-2">
                  Powered by Next.js • Hosted on Vercel
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}