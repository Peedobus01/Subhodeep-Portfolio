import { Trophy, Star, Code2, GitBranch } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "JEE Advanced — Top 5,000", tag: "2023", desc: "Secured rank 4246 out of 250,000+ candidates", color: "text-amber", bg: "bg-amber/10" },
  { icon: Star, title: "JEE Mains — 99.81 Percentile", tag: "2023", desc: "Secured rank 2202 among 1.2 million+ candidates.", color: "text-rose", bg: "bg-rose/10" },
  { icon: Code2, title: "Codeforces Specialist", tag: "2026", desc: "1400+ rating on Codeforces. Actively competing", color: "text-teal", bg: "bg-teal/10" },
  { icon: GitBranch, title: "CodeChef 3★", tag: "2025", desc: "1700+ rating on CodeChef. Actively competing.", color: "text-sky", bg: "bg-sky/10" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-rose">Achievements</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {achievements.map((a) => {
          const Icon = a.icon;
          return (
            <div key={a.title} className="card p-5 flex gap-4 items-start">
              <div className={`p-3 rounded-lg ${a.bg}`}>
                <Icon className={a.color} size={22} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-white">{a.title}</p>
                  <span className="badge">{a.tag}</span>
                </div>
                <p className="text-sm text-text-dim mt-1">{a.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}