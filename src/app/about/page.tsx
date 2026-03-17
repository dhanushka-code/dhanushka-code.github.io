export const metadata = {
  title: "About — Dhanushka",
};

export default function About() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">About me</h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        I build web apps and Android apps. My main stack: Next.js, TypeScript,
        Tailwind CSS, and Firebase. I focus on clean, performant interfaces
        and real-world client work.
      </p>

      <div>
        <h2 className="text-lg font-semibold">Skills</h2>
        <ul className="mt-2 list-disc pl-5">
          <li>Next.js, React, TypeScript</li>
          <li>Tailwind CSS, responsive UI</li>
          <li>Firebase (Auth, Firestore)</li>
          <li>Android (Java/Groovy)</li>
        </ul>
      </div>
    </section>
  );
}
