import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Montreal F1 2026 — May 21–24, 2026",
  description: "Join us for the ultimate F1 experience at Circuit Gilles Villeneuve. Family trip planning, Montreal attractions, and race information for the Canadian Grand Prix.",
  keywords: "F1, Formula 1, Montreal, Canadian Grand Prix, Circuit Gilles Villeneuve, family trip, racing",
  openGraph: {
    title: "Montreal F1 2026 - Canadian Grand Prix Family Trip",
    description: "Ultimate F1 experience at Circuit Gilles Villeneuve - May 21-24, 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {/* Navigation */}
        <header className="sticky top-0 z-50 backdrop-blur border-b border-[var(--border-light)] bg-[var(--surface)]/90">
          <nav className="container flex items-center justify-between py-4">
            <Link href="/" className="font-display text-xl font-semibold text-gradient hover:scale-105 transition-transform">
              Montreal F1 2026 🏁
            </Link>
            <div className="hidden sm:flex items-center gap-6">
              <Link href="/stay" className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">
                🏨 Stay Info
              </Link>
              <Link href="/things-to-do" className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">
                🎆 Things to Do
              </Link>
              <Link href="/itinerary" className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">
                📅 Schedule
              </Link>
              <Link href="/travel-notes" className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">
                ✈️ Travel Notes
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button className="p-2 rounded-lg hover:bg-[var(--surface-secondary)] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">
          <div className="py-8">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-[var(--border-light)] bg-[var(--surface-secondary)]">
          <div className="container py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-display text-lg font-semibold mb-4 text-gradient">
                  Montreal F1 2026
                </h3>
                <p className="text-sm opacity-75 mb-4">
                  The ultimate F1 experience at Circuit Gilles Villeneuve celebrating the Canadian Grand Prix.
                </p>
                <div className="badge badge-primary">
                  🏁 May 21–24, 2026
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <Link href="/stay" className="block text-sm hover:text-[var(--brand-primary)] transition-colors">
                    🏨 Stay Information
                  </Link>
                  <Link href="/things-to-do" className="block text-sm hover:text-[var(--brand-primary)] transition-colors">
                    🎆 Things to Do
                  </Link>
                  <Link href="/itinerary" className="block text-sm hover:text-[var(--brand-primary)] transition-colors">
                    📅 Interactive Schedule
                  </Link>
                  <Link href="/travel-notes" className="block text-sm hover:text-[var(--brand-primary)] transition-colors">
                    ✈️ Travel Notes
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">F1 Info</h4>
                <div className="space-y-2">
                  <a href="https://www.formula1.com/en/racing/2026/canada" target="_blank" rel="noreferrer" className="block text-sm hover:text-[var(--brand-primary)] transition-colors">
                    🏁 Official F1 Race Info
                  </a>
                  <a href="https://www.circuitgillesvilleneuve.ca/" target="_blank" rel="noreferrer" className="block text-sm hover:text-[var(--brand-primary)] transition-colors">
                    🏎️ Circuit Gilles Villeneuve
                  </a>
                  <a href="https://www.mtl.org/en" target="_blank" rel="noreferrer" className="block text-sm hover:text-[var(--brand-primary)] transition-colors">
                    🍁 Visit Montreal
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[var(--border-light)] text-center text-sm opacity-60">
              May 21–24, 2026 • Canadian Grand Prix • Circuit Gilles Villeneuve • Montréal, QC
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}