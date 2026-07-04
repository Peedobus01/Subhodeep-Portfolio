const links = ["Home", "About", "Experience", "Skills", "Projects", "Education", "Achievements", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-bg/70 border-b border-border">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-lg text-primary-light select-none">
          Subhodeep - Portfolio
        </span>
        
        <div className="flex gap-6 text-sm text-text-dim font-medium">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="cursor-pointer hover:text-primary-light transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}