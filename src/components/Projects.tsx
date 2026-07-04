import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import BrowserFrame from "./BrowserFrame"; // Make sure you have this file!
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    title: "CF Battle Grid",
    desc: "A real-time, multiplayer web game built with React and Node.js where users compete to solve Codeforces problems on a 3x3 grid. It utilizes Socket.IO for room-based communication and MongoDB for session recovery.",
    image: project1,
    url: "https://cf-battle-grid.vercel.app/",
    tags: ["Next.js", "Node.js", "MongoDB", "React"],
    accent: "amber",
    featured: true,
    code: "https://github.com/bobby3039/CF-Battle-Grid/tree/main",
    demo: "https://cf-battle-grid.vercel.app/",
  },
  {
    title: "Pathfinding Algorithm Visualizer",
    desc: "An interactive web tool developed with React and Node.js that visualizes pathfinding algorithms like Dijkstra's and Breadth-First Search. Users can dynamically place start points, endpoints, and obstacles on a grid to watch the algorithms calculate optimal routes in real-time.",
    image: project2,
    url: "https://webcrawler-frontend.vercel.app",
    tags: ["React", "Node.js", "TailwindCSS"],
    accent: "teal",
    featured: false,
    code: "https://github.com/Peedobus01/Pathfinding-Visualizer",
  },
  {
    title: "Zcoder",
    desc: "A collaborative live code editor equipped with secure user authentication and real-time discussion features. It leverages Express.js for the backend, Socket.IO for live chat, and MongoDB to manage user data, sessions, and bookmarks.",
    image: project3,
    url: "https://code-tracker.vercel.app",
    tags: ["React", "MongoDB", "Node.js"],
    accent: "sky",
    featured: false,
    code: "https://github.com/Jayantsikar/Zcoder",
  },
];

const accentText: Record<string, string> = {
  amber: "text-amber-400",
  teal: "text-teal-400",
  sky: "text-sky-400",
};

const accentBadge: Record<string, string> = {
  amber: "bg-amber-500/15 text-amber-400 border-amber-500/40",
  teal: "bg-teal-500/15 text-teal-400 border-teal-500/40",
  sky: "bg-sky-500/15 text-sky-400 border-sky-500/40",
};

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary-light">
        My Projects
      </h2>

      {/* Featured project - big card */}
      <div className="card p-6 mb-6">
        <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
          <h3 className="text-xl font-semibold text-slate-100">{featured.title}</h3>
          <span className={`badge border ${accentBadge[featured.accent]}`}>
            ★ Featured
          </span>
        </div>
        <p className="text-slate-300 text-sm mb-4">{featured.desc}</p>

        <BrowserFrame url={featured.url} image={featured.image} />

        <div className="flex flex-wrap gap-2 mt-4 mb-4">
          {featured.tags.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>

        <div className="flex gap-5 text-sm">
          <a
            href={featured.code}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <FaGithub size={16} /> Code
          </a>
          
          <a
            href={featured.demo}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer flex items-center gap-1.5 text-rose-400 hover:text-rose-300 transition-colors font-medium"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>

      {/* Other 2 projects */}
      <div className="grid md:grid-cols-2 gap-6">
        {rest.map((p) => (
          <div key={p.title} className="card p-5">
            <h3 className={`font-semibold mb-2 ${accentText[p.accent]}`}>{p.title}</h3>
            <p className="text-text-dim text-sm mb-3">{p.desc}</p>
            
            <BrowserFrame image={p.image} showBar={false} />
            
            <div className="flex flex-wrap gap-2 mt-3 mb-3">
              {p.tags.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
            
            <a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors text-sm"
            >
              <FaGithub size={16} /> Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}