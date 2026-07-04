const experience = [
  {
    role: "Intern",
    company: "Vault of Codes",
    period: "2026 – Present",
    desc: "Building a full portfolio project applying HTML, CSS, and MERN stack fundamentals under mentorship.",
    color: "primary-light",
  },
  // add more roles here as you get them
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-teal">Experience</h2>
      <div className="relative pl-8">
        <div className="timeline-line"></div>
        {experience.map((e, i) => (
          <div key={i} className="relative mb-8 last:mb-0">
            <span
              className="timeline-dot bg-teal"
              style={{ top: "0.25rem" }}
            ></span>
            <div className="card p-5">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <p className="font-semibold text-white">{e.role}</p>
                  <p className="text-sm text-teal">{e.company}</p>
                </div>
                <span className="text-xs text-text-dim">{e.period}</span>
              </div>
              <p className="text-sm text-slate-300 mt-2">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}