import { Users, HeartHandshake } from "lucide-react";

const pors = [
  {
    icon: Users,
    role: "NSS Unit Coordinator",
    org: "Your College",
    desc: "Coordinating volunteer activities and community service initiatives across the unit.",
    color: "amber",
  },
  {
    icon: HeartHandshake,
    role: "Welfare Secretary",
    org: "Kapili Hostel",
    desc: "Managing hostel welfare initiatives and acting as a bridge between students and administration.",
    color: "rose",
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  amber: { bg: "bg-amber/15", text: "text-amber" },
  rose: { bg: "bg-rose/15", text: "text-rose" },
};

export default function PORs() {
  return (
    <section id="pors" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <span className="badge border border-primary/40 mb-4 inline-block">Leadership</span>
      <h2 className="text-4xl font-bold mb-4">
        Positions of <span className="text-amber">Responsibility</span>
      </h2>
      <p className="text-text-dim max-w-xl mx-auto mb-12">
        Beyond academics and coding, I actively contribute to my college
        community through leadership roles.
      </p>

      <div className="grid md:grid-cols-2 gap-5 text-left">
        {pors.map((p) => {
          const Icon = p.icon;
          const c = colorMap[p.color];
          return (
            <div key={p.role} className="card p-6">
              <div className={`p-2.5 rounded-lg ${c.bg} inline-block mb-4`}>
                <Icon className={c.text} size={20} />
              </div>
              <p className="font-semibold">{p.role}</p>
              <p className={`text-sm mb-2 ${c.text}`}>{p.org}</p>
              <p className="text-sm text-text-dim">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}