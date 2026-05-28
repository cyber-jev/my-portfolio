"use client";
import { useState } from "react";

const projects = [
  {
    title: "AI Career Coach",
    description: "A conversational AI coach that helps you nail interviews, craft compelling cover letters, and build a winning job search strategy. Powered by Groq's lightning-fast LLM.",
    tags: ["Next.js", "Groq AI", "React", "Tailwind CSS"],
    link: "https://ai-career-coach-cyberjev.vercel.app",
    emoji: "🎯",
  },
  {
    title: "AI Resume Builder",
    description: "Generate a professional, ATS-optimized resume in seconds. Fill in your details, let AI do the heavy lifting, and copy your polished resume instantly.",
    tags: ["Next.js", "Groq AI", "React", "Tailwind CSS"],
    link: "https://ai-resume-builder-cyberjev.vercel.app",
    emoji: "📄",
  },
    {
    title: "AI PDF Chat",
    description: "Upload any PDF and have an intelligent conversation with it. Ask questions, get summaries, and extract insights instantly. Works with any document.",
    tags: ["Next.js", "Groq AI", "unpdf", "Tailwind CSS"],
    link: "https://ai-pdf-chat-cyberjev.vercel.app",
    emoji: "💬",
  },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"] },
  { category: "AI & Backend", items: ["Groq AI", "OpenAI API", "Anthropic API", "REST APIs", "Python"] },
  { category: "Tools", items: ["Git", "GitHub", "Vercel", "VS Code", "Linux"] },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("johnnye4u2c@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-green-400 text-lg">Jev</span>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6">

        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center pt-20">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 text-green-400 text-xs font-medium mb-6 w-fit">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            Available for work
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 leading-tight">
            Hi, I'm <span className="text-green-400">Jev</span> 👋
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-6 max-w-2xl leading-relaxed">
            Frontend Developer & AI Engineer who builds <span className="text-white font-medium">intelligent web apps</span> that solve real problems.
          </p>
          <p className="text-gray-500 text-base max-w-xl mb-8 leading-relaxed">
            Self-starter. Learns by doing. Pays attention to details and sees every project through to the end. Based in Port Harcourt, Nigeria 🇳🇬 — working with clients worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
            >
              View My Work
            </a>
            <a
              href="https://github.com/cyber-jev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
            >
              GitHub →
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24">
          <div className="mb-12">
            <p className="text-green-400 text-sm font-medium mb-2">// what I've built</p>
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900 border border-gray-800 hover:border-green-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {p.title} →
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 border-t border-gray-800">
          <div className="mb-12">
            <p className="text-green-400 text-sm font-medium mb-2">// what I work with</p>
            <h2 className="text-3xl font-bold text-white">Skills & Tools</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {skills.map((s, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-green-400 text-sm font-semibold mb-4">{s.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item, j) => (
                    <span key={j} className="bg-gray-800 text-gray-300 text-xs px-3 py-1.5 rounded-lg">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 border-t border-gray-800">
          <div className="text-center max-w-xl mx-auto">
            <p className="text-green-400 text-sm font-medium mb-2">// let's work together</p>
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              I'm currently available for freelance work and remote roles. If you have a project that needs an AI-powered web app or just want to say hi — my inbox is open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={copyEmail}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
              >
                {copied ? "✅ Email Copied!" : "📋 Copy Email"}
              </button>
              <a
                href="https://www.linkedin.com/in/johnnyjev/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/cyber-jev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
              >
                GitHub →
              </a>

                            <a
                href="https://t.me/cyber_jev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
              >
                Telegram →
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-xs">Built by Jev • Frontend Developer & AI Engineer • Port Harcourt, Nigeria 🇳🇬</p>
        </footer>

      </div>
    </main>
  );
}