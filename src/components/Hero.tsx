import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center md:items-start overflow-hidden"
    >
      {/* Reusable Glow Blob from your CSS */}
      <div className="glow top-0 right-0"></div>
      
      {/* LEFT: photo + quick links */}
      <div className="flex flex-col items-center gap-4 z-10">
        <img
          src={profile}
          alt="Subhodeep"
          className="w-40 h-40 rounded-full object-cover border-4 border-primary/40"
        />
        <div className="flex gap-4 text-text-dim">
          <a
            href="https://github.com/Peedobus01"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:text-primary-light hover:scale-110 transition-all"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/subhodeep-paul-24a80a27b/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:text-primary-light hover:scale-110 transition-all"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="p.subhodeep@iitg.ac.in"
            className="cursor-pointer hover:text-primary-light hover:scale-110 transition-all"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* RIGHT: intro text */}
      <div className="z-10">
        <p className="text-primary-light text-sm tracking-widest mb-2 font-semibold">Hello, I'm</p>
        
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-3 pb-1">
          Subhodeep Paul
        </h1>
        
        <p className="text-lg text-slate-300 mb-1 font-medium">
          Full-Stack Developer · Competitive Programmer · IIT Guwahati
        </p>
        <p className="text-sm text-text-dim mb-6">
          📍 4th Year Student · Interning at Vault of Codes
        </p>
        
        <div className="flex gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            className="cursor-pointer flex items-center gap-2 bg-primary hover:bg-primary-light text-white transition-colors px-5 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-primary/30"
          >
            <FileText size={16} /> View CV
          </a>
          <a
            href="/resume.pdf"
            download
            className="cursor-pointer border border-border hover:border-primary text-slate-300 transition-colors px-5 py-2.5 rounded-full text-sm font-medium"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}