export const metadata = {
  title: "Projects — Dhanushka",
};

const projects = [
  {
    title: "Admin Panel",
    desc: "React + TypeScript admin panel for client reports",
    link: "#",
  },
  {
    title: "Android App",
    desc: "Mobile app using Firebase backend",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="text-zinc-700 dark:text-zinc-300">A few selected projects.</p>

      <ul className="mt-4 grid gap-4">
        {projects.map((p) => (
          <li key={p.title} className="rounded-lg border p-4">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-zinc-600">{p.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
