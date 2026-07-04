import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <span className="badge border border-primary/40 mb-4 inline-block">Contact</span>
      <h2 className="text-4xl font-bold mb-3">
        Let's Build <span className="text-primary-light">Something Together</span>
      </h2>
      <p className="text-text-dim max-w-xl mx-auto mb-12">
        Have a project in mind, an internship opportunity, or just want to
        connect? I'd love to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-6 text-left">
        {/* Left: info */}
        <div className="space-y-5">
          <div className="card p-5 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-sky-500/15">
              <Mail className="text-sky-400" size={20} />
            </div>
            <div>
              <p className="text-xs text-text-dim">Email</p>
              <p className="font-medium">p.subhodeep@iitg.ac.in</p>
            </div>
          </div>

          <div className="card p-5 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-teal-500/15">
              <Phone className="text-teal-400" size={20} />
            </div>
            <div>
              <p className="text-xs text-text-dim">Phone</p>
              <p className="font-medium">+91 9678495561</p>
            </div>
          </div>

          <div className="card p-5 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-rose-500/15">
              <MapPin className="text-rose-400" size={20} />
            </div>
            <div>
              <p className="text-xs text-text-dim">Location</p>
              <p className="font-medium">Silchar, Assam, India</p>
            </div>
          </div>

          <div className="card p-5">
            <p className="font-semibold mb-3 text-amber-400">Why Work With Me?</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span> Software development with Next.js, MongoDB & C++
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span> Strong engineering & problem-solving mindset
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span> Fast learner, proactive communicator
              </li>
            </ul>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/Peedobus01"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer p-3 rounded-full bg-surface border border-border hover:border-primary hover:text-primary-light transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/subhodeep-paul-24a80a27b/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer p-3 rounded-full bg-surface border border-border hover:border-primary hover:text-primary-light transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Right: form */}
        <form className="card p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-text-dim">Full Name</label>
              <input
                className="w-full mt-1 bg-bg border border-border rounded-lg px-4 py-2 text-sm outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-text-dim">Email</label>
              <input
                className="w-full mt-1 bg-bg border border-border rounded-lg px-4 py-2 text-sm outline-none focus:border-primary transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-text-dim">Subject</label>
            <input
              className="w-full mt-1 bg-bg border border-border rounded-lg px-4 py-2 text-sm outline-none focus:border-primary transition-colors"
              placeholder="Project discussion"
            />
          </div>
          <div>
            <label className="text-xs text-text-dim">Message</label>
            <textarea
              className="w-full mt-1 bg-bg border border-border rounded-lg px-4 py-2 text-sm outline-none focus:border-primary transition-colors"
              rows={4}
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-sky-500 hover:opacity-90 transition-opacity rounded-lg py-2.5 text-sm font-medium"
          >
            <Send size={16} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}