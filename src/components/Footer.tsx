import { useEffect, useState } from "react";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = ["Home", "About", "Projects", "Contact"];
  const skills = ["Web Development", "MERN Stack", "Open Source", "Problem Solving"];

  return (
    <footer className="relative border-t border-border bg-surface/50 pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <p className="text-2xl font-bold text-primary-light mb-3">Subhodeep Paul</p>
          <p className="text-sm text-text-dim leading-relaxed">
            Passionate MERN stack developer and tech enthusiast crafting
            impactful digital solutions. Let's connect and build something
            great together!
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://github.com/Peedobus01" target="_blank" rel="noreferrer"
              className="cursor-pointer p-2.5 rounded-full bg-bg border border-border hover:border-primary hover:text-primary-light transition-colors">
              <FaGithub size={16} />
            </a>
            <a href="https://www.linkedin.com/in/subhodeep-paul-24a80a27b/" target="_blank" rel="noreferrer"
              className="cursor-pointer p-2.5 rounded-full bg-bg border border-border hover:border-primary hover:text-primary-light transition-colors">
              <FaLinkedin size={16} />
            </a>
            <a href="p.subhodeep@iitg.ac.in"
              className="cursor-pointer p-2.5 rounded-full bg-bg border border-border hover:border-primary hover:text-primary-light transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm text-text-dim">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="cursor-pointer hover:text-primary-light transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Focus Areas</p>
          <ul className="space-y-2 text-sm text-text-dim">
            {skills.map((s) => (
              <li key={s} className="hover:text-primary-light transition-colors cursor-default">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-border mt-10 pt-6 flex justify-between items-center flex-wrap gap-3">
        <p className="text-sm text-text-dim flex items-center gap-1.5">
          Made with <Heart size={14} className="text-rose fill-rose" /> by Subhodeep Paul
        </p>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`cursor-pointer fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-primary to-sky shadow-lg hover:opacity-90 transition-all ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}