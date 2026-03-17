export const metadata = {
  title: "Contact — Dhanushka",
};

export default function Contact() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-zinc-700 dark:text-zinc-300">Got work or questions? Reach out.</p>

      <div className="mt-4">
        <a
          href="mailto:your-email@example.com"
          className="rounded-full bg-black text-white px-5 py-3 text-sm"
        >
          Email me
        </a>
      </div>
    </section>
  );
}
