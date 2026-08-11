import Image from "next/image";
import Link from "next/link";
import { Mail, ExternalLink, Calendar, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-100 font-sans pt-16">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full flex items-center bg-slate-950 text-white px-8 py-16 md:py-24 overflow-hidden">

        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-background.png"
            alt="Hero background"
            fill
            priority
            className="object-cover object-right md:object-center"
          />
          {/* Subtle gradient overlay to ensure text readability on mobile */}
          <div className="absolute inset-0 bg-slate-950/40 md:bg-transparent" />
        </div>

        {/* Content Overlay (z-10 sits on top of background) */}
        <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Intro Text */}
          <div className="space-y-6">
            <span className="text-blue-500 font-medium tracking-wide">Hi, I'm</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Zakwan Sanudin
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-blue-400">
              Full Stack Developer
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-lg">
              I build modern, responsive and user-friendly web applications using Next.js, React, Tailwind CSS and more.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
              >
                View My Projects
              </Link>
              <Link
                href="#contact"
                className="border border-slate-700 bg-slate-900/50 hover:bg-slate-800/80 text-white font-medium px-5 py-2.5 rounded-lg transition-colors backdrop-blur-sm"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4 text-slate-400">
              <a href="https://github.com/zakwansanudin" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="www.linkedin.com/in/zakwan-sanudin" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:zakwansanudin02@gmail.com" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Left empty to show image illustration */}
          <div className="hidden md:block" />

        </div>
      </section>

      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <div className="max-w-6xl mx-auto py-12 space-y-12">

        {/* ================= PROJECTS SECTION ================= */}
        <section id="projects" className="scroll-mt-24 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-900">Projects</h2>
            <Link href="/projects" className="text-blue-600 hover:underline text-sm font-semibold flex items-center gap-1">
              View all projects &rarr;
            </Link>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectCard
              title="E-Learning Platform"
              description="A learning management system built with Next.js, Laravel API, and Tailwind CSS."
              tags={["Next.js", "Laravel", "Tailwind CSS"]}
              imageSrc="/images/hero/next.svg"
            />
            <ProjectCard
              title="Employee Management System"
              description="A system to manage employee data, attendance, and leave applications."
              tags={["Next.js", "PostgreSQL", "Prisma"]}
              imageSrc="/images/hero/next.svg"
            />
            <ProjectCard
              title="HomeTutor Landing Page"
              description="A responsive landing page for a CSR program that connects students with tutors."
              tags={["Next.js", "Tailwind CSS"]}
              imageSrc="/images/hero/next.svg"
            />
          </div>
        </section>

        {/* ================= ABOUT & SKILLS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* About Me Card */}
          <div id="about" className="scroll-mt-24 bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-xl font-bold text-slate-900">About Me</h2>

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {/* Profile Avatar */}
              <div className="w-28 h-28 rounded-full bg-slate-200 overflow-hidden relative flex-shrink-0 border-2 border-slate-100 shadow">
                <Image
                  src="/images/profile/profile-img.png"
                  alt="Profile picture"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Bio Details */}
              <div className="space-y-3 text-sm text-slate-600 flex-1">
                <p className="leading-relaxed">
                  I'm a passionate Full Stack Developer with experience building web applications using modern technologies. I enjoy solving problems, learning new things, and turning ideas into real products.
                </p>

                <div className="space-y-2 pt-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>24 Years Old</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>Malaysia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>zakwansanudin02@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-slate-400" />
                    <span>portfoliozakwan.xyz</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="/resume.pdf"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg transition-colors"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div id="skills" className="scroll-mt-24 bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Skills</h2>

            {/* Skill Icons Grid */}
            <div className="grid grid-cols-5 gap-4 text-center">
              <SkillItem name="Next.js" color="bg-black text-white" label="N" />
              <SkillItem name="React" color="bg-cyan-500 text-white" label="⚛" />
              <SkillItem name="TypeScript" color="bg-blue-600 text-white" label="TS" />
              <SkillItem name="Tailwind CSS" color="bg-teal-500 text-white" label="≈" />
              <SkillItem name="Laravel" color="bg-red-500 text-white" label="L" />

              <SkillItem name="JavaScript" color="bg-yellow-400 text-black" label="JS" />
              <SkillItem name="Node.js" color="bg-green-600 text-white" label="N" />
              <SkillItem name="PostgreSQL" color="bg-blue-800 text-white" label="PG" />
              <SkillItem name="Git" color="bg-orange-600 text-white" label="Git" />
              <SkillItem name="Figma" color="bg-purple-600 text-white" label="F" />
            </div>
          </div>

        </div>

        {/* Contact Section Placeholder */}
        <section id="contact" className="scroll-mt-24 bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Get In Touch</h2>
          <p className="text-sm text-slate-600">
            Feel free to reach out to me via email at{" "}
            <a href="mailto:zakwansanudin02@gmail.com" className="text-blue-600 underline">
              zakwansanudin02@gmail.com
            </a>.
          </p>
        </section>

      </div>
    </div>
  );
}

{/* Helper Component: Project Card */}
function ProjectCard({
  title,
  description,
  tags,
  imageSrc,
}: {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="p-4 space-y-3">
        {/* Project Thumbnail Header */}
        <div className="w-full h-36 bg-slate-100 rounded-xl overflow-hidden border border-slate-100 relative flex items-center justify-center text-slate-400 text-xs">
          [ Project Preview ]
        </div>

        <h3 className="font-bold text-slate-900 text-base">{title}</h3>
        <p className="text-xs text-slate-600 leading-relaxed">{description}</p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Links */}
      <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs">
        <a href="#" className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
          View Project <ExternalLink className="w-3 h-3" />
        </a>
        <a href="#" className="text-slate-600 hover:text-slate-900">
          <FaGithub className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

{/* Helper Component: Skill Item */}
function SkillItem({ name, color, label }: { name: string; color: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform ${color}`}>
        {label}
      </div>
      <span className="text-[11px] font-medium text-slate-700">{name}</span>
    </div>
  );
}