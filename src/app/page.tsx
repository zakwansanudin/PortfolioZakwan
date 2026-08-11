"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  LayoutGrid, 
  Mail, 
  Sparkles,
  Code2,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";

// GitHub SVG Icon
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Dynamic Spotlight Card for Light Mode
function LightSpotlightCard({ children, className = "", spanClass = "" }: { children: React.ReactNode; className?: string; spanClass?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/10 ${spanClass}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      <div className={className}>{children}</div>
    </div>
  );
}

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Laravel", "RESTful APIs", "Node.js", "PostgreSQL", "Docker"
];

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: any;
  featured?: boolean;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "AI Proctoring & Liveness Platform",
    description: "Real-time automated exam monitoring system featuring web-based face verification, head-pose estimation, and active liveness checks using FaceAPI.js.",
    tags: ["React", "Laravel", "FaceAPI.js", "Tailwind"],
    icon: ShieldCheck,
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Preventive Maintenance Manager",
    description: "Enterprise workflow application for tracking infrastructure schedules, automated reminders, and downtime analytics.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Framer Motion"],
    icon: Cpu,
    github: "https://github.com"
  },
  {
    title: "Full-Stack E-Commerce Dashboard",
    description: "Real-time analytics dashboard managing multi-vendor inventory, server deployment pipelines, and payment gate integrations.",
    tags: ["Vue.js", "Laravel", "REST API", "Tailwind"],
    icon: LayoutGrid,
    github: "https://github.com",
    live: "https://example.com"
  }
];

export default function Home() {
  return (
    <main className="bg-slate-950 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      <Navbar />

      {/* ==================== DARK HERO SECTION ==================== */}
      <section id="about" className="min-h-screen pt-32 pb-24 flex items-center justify-center relative bg-slate-950 text-slate-100">
        {/* Ambient Dark Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/20 rounded-full blur-[140px] -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Main Hero Intro */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" /> Full-Stack & AI Systems Developer
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              Building modern web apps & <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">intelligent systems.</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              Hi! I&apos;m a software engineer dedicated to crafting high-performance full-stack web applications, integrating real-time computer vision workflows, and delivering seamless user experiences.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold px-6 py-3.5 rounded-xl transition-all hover:border-slate-600"
              >
                <Mail className="w-4 h-4 text-slate-400" /> Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Dark Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center gap-6"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-teal-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-700" />
              
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-indigo-500/50 bg-slate-950 flex-shrink-0">
                    <Image
                      src="/images/profile/profile-img.png"
                      alt="Developer Profile"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Full-Stack Engineer</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Specializing in Web & AI</p>
                    <div className="inline-flex items-center gap-1.5 mt-2.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available for work
                    </div>
                  </div>
                </div>

                {/* Micro Code Snippet */}
                <div className="rounded-lg bg-slate-950/80 border border-slate-800/80 p-3.5 font-mono text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-slate-500 pb-1 border-b border-slate-800/60">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>developer.config.ts</span>
                  </div>
                  <p><span className="text-indigo-400">const</span> stack = [<span className="text-emerald-300">&quot;Next.js&quot;</span>, <span className="text-emerald-300">&quot;Laravel&quot;</span>];</p>
                  <p><span className="text-indigo-400">const</span> status = <span className="text-cyan-300">&quot;Ready to build&quot;</span>;</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==================== LIGHT SECTION CONTAINER ==================== */}
      <div className="bg-slate-50 text-slate-900 rounded-t-[2.5rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        
        {/* --- SKILLS BAR --- */}
        <section id="skills" className="py-16 border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 text-center mb-8">
              Tech Stack & Core Expertise
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md transition-all shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- LIGHT BENTO PROJECTS SECTION --- */}
        <section id="projects" className="py-28 max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs text-indigo-600 font-mono font-semibold mb-4">
              <Code2 className="w-3.5 h-3.5 text-indigo-600" /> FEATURED WORK
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl text-base sm:text-lg">
              Selected engineering work combining modern web technology and intelligent AI capabilities.
            </p>
          </div>

          {/* Bento Grid (Light Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => {
              const IconComponent = project.icon;
              const isFeatured = project.featured;

              return (
                <LightSpotlightCard
                  key={project.title}
                  spanClass={isFeatured ? "md:col-span-2" : "md:col-span-1"}
                  className="flex flex-col justify-between h-full relative z-10"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {isFeatured && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-100/70 border border-indigo-200 text-indigo-700">
                          Featured Project
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono font-medium border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-5 text-slate-600 pt-4 border-t border-slate-100">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-indigo-600 flex items-center gap-1.5 text-xs font-semibold transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" /> Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-indigo-600 flex items-center gap-1.5 text-xs font-semibold transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </LightSpotlightCard>
              );
            })}
          </div>
        </section>

        {/* --- CALL TO ACTION (DARK CONTRAST BLOCK) --- */}
        <section className="pb-24 max-w-5xl mx-auto px-6">
          <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-14 text-center overflow-hidden shadow-2xl text-white">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
            
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              Let&apos;s build something intelligent together.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Whether you need a scalable full-stack platform, AI/Vision integration, or technical advice on your architecture.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" /> Get In Touch
            </a>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-8 border-t border-slate-200 text-center text-slate-500 text-xs font-medium">
          <p>© {new Date().getFullYear()} Software Developer. Built with Next.js & Framer Motion.</p>
        </footer>

      </div>
    </main>
  );
}