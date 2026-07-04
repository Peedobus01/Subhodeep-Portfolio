import { Code2, Server, Database } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Building responsive, accessible interfaces with modern frameworks.",
    items: ["Next.js & React", "TailwindCSS", "Responsive Design", "Vite"],
  },
  {
    icon: Server,
    title: "Core Software & Backend",
    desc: "Designing robust systems and solving complex engineering problems.",
    items: ["C++", "Node.js & Express", "Data Analysis", "REST APIs"],
  },
  {
    icon: Database,
    title: "Databases & Architecture",
    desc: "Working with NoSQL databases and structuring data for scale.",
    items: ["MongoDB", "Mongoose", "Query Optimization", "Schema Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <span className="badge border border-primary/40 mb-4 inline-block">Skills</span>
      <h2 className="text-4xl font-bold mb-4">
        Technical <span className="text-rose-400">Skills</span>
      </h2>
      <p className="text-text-dim max-w-xl mx-auto mb-12">
        I possess a diverse set of technical and engineering skills. Here are the
        key areas I specialize in.
      </p>

      <div className="grid md:grid-cols-3 gap-5 mb-10 text-left">
        {groups.map((g) => {
          const Icon = g.icon;
          return (
            <div key={g.title} className="card p-6">
              <div className="p-2.5 rounded-lg bg-primary/15 inline-block mb-4">
                <Icon className="text-primary-light" size={20} />
              </div>
              <p className="font-semibold mb-2">{g.title}</p>
              <p className="text-sm text-text-dim mb-4">{g.desc}</p>
              <ul className="space-y-1.5">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-light"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* CTA banner */}
      <div className="rounded-2xl p-10 bg-gradient-to-br from-primary/20 via-surface to-rose-500/10 border border-border">
        <p className="text-2xl font-bold mb-2">Ready to Start Your Project?</p>
        <p className="text-text-dim mb-6">
          Let's discuss how I can help bring your ideas to life with modern
          web technology.
        </p>
        
        <a
          href="#contact"
          className="cursor-pointer inline-block bg-gradient-to-r from-primary to-rose-500 hover:opacity-90 transition-opacity px-6 py-3 rounded-full text-sm font-medium"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}