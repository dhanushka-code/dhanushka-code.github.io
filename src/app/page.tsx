import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-[60vh] flex flex-col items-start justify-center gap-8">
      <div>
        <h1 className="text-4xl font-bold">Hi — I’m Dhanushka</h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">Full‑stack developer — Next.js, TypeScript, Tailwind, Firebase.</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link href="/projects" className="rounded-full bg-black text-white px-5 py-3 text-sm">See projects</Link>
        <Link href="/about" className="rounded-full border border-gray-300 px-5 py-3 text-sm">About me</Link>
      </div>

      <div className="w-full pt-8">
        <h2 className="text-2xl font-semibold">Quick highlights</h2>
        <ul className="mt-4 list-disc pl-5 text-zinc-700 dark:text-zinc-300">
          <li>Next.js + TypeScript projects with Tailwind CSS</li>
          <li>Android apps with Firebase backend</li>
          <li>Building a portfolio to deploy on Vercel</li>
        </ul>
      </div>
    </section>
    );
  }
