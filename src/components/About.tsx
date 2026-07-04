import { Award, Code2, Users, GraduationCap } from "lucide-react";

const stats = [
  { icon: Award, value: "5+", label: "Projects Completed" },
  { icon: Code2, value: "2+", label: "Years of Learning" },
  { icon: Users, value: "2+", label: "Hackathons & Events" },
  { icon: GraduationCap, value: "8.0", label: "CGPA" },
];

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable and scalable code with best practices and modern standards.",
  },
  {
    icon: Award,
    title: "Fast Learner",
    desc: "Quickly picking up new tools and frameworks to solve real-world problems.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Working effectively in teams and maintaining clear communication with stakeholders.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <span className="badge border border-primary/40 mb-4 inline-block">About Me</span>
      <h2 className="text-4xl font-bold mb-6">
        Crafting Digital <span className="text-primary-light">Experiences</span>
      </h2>
      <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
        I'm a curious and driven 4th-year student with a strong focus on
        full-stack development using the <span className="text-teal">MERN stack</span>.
        I enjoy architecting clean APIs and building interactive web
        applications from scratch. Currently interning at{" "}
        <span className="text-amber">Vault of Codes</span>, I'm committed to
        learning fast, building smart, and making tech that matters.
      </p>

      {/* Stat icons row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/15 mb-3">
                <Icon className="text-primary-light" size={22} />
              </div>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-text-dim">{s.label}</p>
            </div>
          );
        })}
      </div>

      {/* Feature cards */}
      <div className="grid md:grid-cols-3 gap-4 text-left">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="card p-5">
              <div className="p-2.5 rounded-lg bg-sky/15 inline-block mb-3">
                <Icon className="text-sky" size={18} />
              </div>
              <p className="font-semibold mb-1">{f.title}</p>
              <p className="text-sm text-text-dim">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}