const education = [
  {
    school: "Indian Institute of Technology, Guwahati",
    degree: "B.Tech · Mechanical Engineering",
    period: "2023 – 2027",
    detail: "CGPA: 8.0/10",
    color: "primary",
  },
  {
    school: "Don Bosco School, Sichar",
    degree: "Class 12 · Science",
    period: "2021 – 2023",
    detail: "94.4% · CBSE",
    color: "sky",
  },
  {
    school: "Don Bosco School, Sichar",
    degree: "Class 10",
    period: "2010 – 2021",
    detail: "96.4% · CBSE",
    color: "rose",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-sky">Education</h2>
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
        <div className="space-y-6">
          {education.map((ed, i) => (
            <div
              key={ed.school}
              className={`md:flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >
              <div className="card p-5 md:w-[46%] relative">
                <span
                  className={`absolute -top-3 left-5 text-xs px-2 py-0.5 rounded-full bg-${ed.color}/20 text-${ed.color} border border-${ed.color}`}
                >
                  {ed.period}
                </span>
                <p className="font-semibold mt-2 text-white">{ed.school}</p>
                <p className="text-sm text-slate-300">{ed.degree}</p>
                <p className="text-xs text-text-dim mt-1">{ed.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}