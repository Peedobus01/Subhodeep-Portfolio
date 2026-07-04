import { Dumbbell, Clapperboard, Sparkles, PersonStanding } from "lucide-react";

const interests = [
  { icon: Dumbbell, title: "Gym", desc: "Staying active and disciplined outside of coding.", color: "teal" },
  { icon: Clapperboard, title: "Movies", desc: "Always up for a good story on screen.", color: "sky" },
  { icon: Sparkles, title: "Anime", desc: "Big fan of fictional worlds and storytelling.", color: "primary-light" },
  { icon: PersonStanding, title: "Footl", desc: "Playing whenever I get the chance.", color: "rose" },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  teal: { bg: "bg-teal/15", text: "text-teal" },
  sky: { bg: "bg-sky/15", text: "text-sky" },
  "primary-light": { bg: "bg-primary/15", text: "text-primary-light" },
  rose: { bg: "bg-rose/15", text: "text-rose" },
};

export default function Interests() {
  return (
    <section id="interests" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <span className="badge border border-primary/40 mb-4 inline-block">Beyond Code</span>
      <h2 className="text-4xl font-bold mb-4">
        My <span className="text-teal">Interests</span>
      </h2>
      <p className="text-text-dim max-w-xl mx-auto mb-12">
        A few things that keep me energized outside of development.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-left">
        {interests.map((i) => {
          const Icon = i.icon;
          const c = colorMap[i.color];
          return (
            <div key={i.title} className="card p-5 text-center">
              <div className={`p-3 rounded-full ${c.bg} inline-block mb-3`}>
                <Icon className={c.text} size={22} />
              </div>
              <p className="font-semibold mb-1">{i.title}</p>
              <p className="text-xs text-text-dim">{i.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}