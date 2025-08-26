import Link from "next/link";
import Countdown from "../components/countdown";

export default function Home() {
  return (
    <div className="grid gap-8">
      <h1 className="text-3xl font-semibold tracking-tight">Montreal F1 2026</h1>
      <p className="text-sm text-black/70 dark:text-white/70">May 21–24, 2026</p>
      
      <Countdown />
      
      <p>
        Welcome! This site has details about where we&apos;re staying, ideas for
        things to do in Montreal, and a place to share your travel plans so we can coordinate rides and arrivals.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/stay" className="rounded border px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">Stay Info</Link>
        <Link href="/things-to-do" className="rounded border px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">Things to Do</Link>
        <Link href="/travel-notes" className="rounded border px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">Share Travel Notes</Link>
        <a
          href="https://www.formula1.com/en/racing/2026/canada"
          target="_blank"
          rel="noreferrer"
          className="rounded border px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
        >
          F1 Race Info
        </a>
      </div>
    </div>
  );
}