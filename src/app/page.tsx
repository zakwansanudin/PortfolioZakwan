"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import {
  ExternalLink,
  Mail,
  ShieldAlert,
  Cpu,
  Gamepad2,
  Terminal,
  Database,
  Smartphone,
  Zap,
  Swords,
  Radio,
  Trophy,
  Activity,
  Crosshair,
  Sparkles,
  Flame,
  Code,
  Sun,
  Moon,
} from "lucide-react";
import Navbar from "@/components/Navbar";

/* -------------------------------------------------------------------- */
/*  Gaming Fonts & Theme Tokens (Light/Dark Support)                    */
/* -------------------------------------------------------------------- */

const FontImports = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@500;600;700&family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600&display=swap");

    /* Default Dark Mode Theme */
    :root {
      --cyber-bg: #07090e;
      --cyber-card: #0e131f;
      --cyber-card-subtle: rgba(14, 19, 31, 0.8);
      --cyber-border: #1e293b;
      --cyber-border-glow: rgba(0, 240, 255, 0.4);
      --neon-cyan: #00f0ff;
      --neon-purple: #9d4edd;
      --neon-pink: #ff0055;
      --neon-green: #00ff66;
      --hud-text: #e2e8f0;
      --hud-muted: #64748b;
      --grid-line: rgba(255, 255, 255, 0.03);
      --scanline-opacity: 0.4;
      --btn-ghost-bg: rgba(15, 23, 42, 0.8);
      --badge-bg: rgba(15, 23, 42, 0.9);
    }

    /* Light Mode (Mech / White-Out Mode) */
    .light-theme {
      --cyber-bg: #f1f3f9;
      --cyber-card: #ffffff;
      --cyber-card-subtle: rgba(255, 255, 255, 0.85);
      --cyber-border: #cbd5e1;
      --cyber-border-glow: rgba(0, 119, 255, 0.4);
      --neon-cyan: #0066ff;
      --neon-purple: #7b2cbf;
      --neon-pink: #d90429;
      --neon-green: #10b981;
      --hud-text: #0f172a;
      --hud-muted: #475569;
      --grid-line: rgba(0, 0, 0, 0.04);
      --scanline-opacity: 0.1;
      --btn-ghost-bg: rgba(255, 255, 255, 0.9);
      --badge-bg: #e2e8f0;
    }

    .font-display {
      font-family: "Orbitron", sans-serif;
    }
    .font-sub {
      font-family: "Rajdhani", sans-serif;
    }
    .font-mono {
      font-family: "JetBrains Mono", monospace;
    }

    .cyber-glow-cyan {
      box-shadow: 0 0 20px var(--cyber-border-glow);
    }

    .text-glow-cyan {
      text-shadow: 0 0 10px var(--cyber-border-glow);
    }

    /* Cyber grid overlay background */
    .bg-cyber-grid {
      background-size: 40px 40px;
      background-image: linear-gradient(
          to right,
          var(--grid-line) 1px,
          transparent 1px
        ),
        linear-gradient(
          to bottom,
          var(--grid-line) 1px,
          transparent 1px
        );
    }

    /* Scanline effect */
    .scanlines {
      background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      );
      background-size: 100% 4px;
    }
  `}</style>
);

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

/* -------------------------------------------------------------------- */
/*  Gaming HUD Tracker Backdrop                                         */
/* -------------------------------------------------------------------- */

function GamingHUDTracker() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 20 });
  const sy = useSpring(y, { stiffness: 160, damping: 20 });
  const [active, setActive] = useState(false);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden cursor-crosshair"
      onMouseMove={handleMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <motion.div
        className="pointer-events-none absolute w-72 h-72 rounded-full opacity-25 blur-[80px]"
        style={{
          left: useMotionTemplate`calc(${sx}px - 144px)`,
          top: useMotionTemplate`calc(${sy}px - 144px)`,
          background:
            "radial-gradient(circle, var(--neon-cyan) 0%, var(--neon-purple) 60%, transparent 80%)",
        }}
      />

      <motion.div
        className="pointer-events-none absolute w-16 h-16 border border-[var(--neon-cyan)]/50 rounded-full flex items-center justify-center"
        animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.7 }}
        transition={{ duration: 0.15 }}
        style={{
          left: useMotionTemplate`calc(${sx}px - 32px)`,
          top: useMotionTemplate`calc(${sy}px - 32px)`,
        }}
      >
        <div className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full animate-ping" />
        <Crosshair className="absolute w-10 h-10 text-[var(--neon-cyan)] opacity-70 stroke-[1]" />
        <span className="absolute -bottom-5 font-mono text-[9px] text-[var(--neon-cyan)] tracking-widest uppercase">
          [TARGET_LOCK]
        </span>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/*  Cyber Button Component                                              */
/* -------------------------------------------------------------------- */

function CyberButton({
  children,
  className = "",
  href,
  variant = "cyan",
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  variant?: "cyan" | "pink" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const baseStyles =
    "relative inline-flex items-center justify-center font-sub font-bold text-sm tracking-wider uppercase px-7 py-3.5 transition-all duration-300 clip-corner";

  const variants = {
    cyan: "bg-[var(--neon-cyan)] text-white hover:opacity-90 shadow-[0_0_20px_var(--cyber-border-glow)]",
    pink: "bg-[var(--neon-pink)] text-white hover:opacity-90 shadow-[0_0_20px_rgba(255,0,85,0.4)]",
    ghost:
      "bg-[var(--btn-ghost-bg)] border border-[var(--cyber-border)] hover:border-[var(--neon-cyan)] text-[var(--hud-text)] hover:text-[var(--neon-cyan)] backdrop-blur-md",
  };

  return (
    <a
      ref={ref}
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
      }}
    >
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}

/* -------------------------------------------------------------------- */
/*  HUD Readout Strip                                                   */
/* -------------------------------------------------------------------- */

const hudStats = [
  { label: "CLASS", value: "FULL-STACK ARCHITECT", color: "text-[var(--neon-cyan)]" },
  { label: "MAIN LOADOUT", value: "NEXT.JS · LARAVEL · FLUTTER", color: "text-[var(--neon-purple)]" },
  { label: "SERVER / REGION", value: "SELANGOR, MY [SE-ASIA]", color: "text-[var(--neon-green)]" },
  { label: "MATCHMAKING", value: "ONLINE (OPEN TO QUESTS)", color: "text-[var(--neon-green)]" },
];

function HUDReadoutStrip() {
  return (
    <div className="border-y border-[var(--cyber-border)] bg-[var(--cyber-card-subtle)] backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--cyber-border)]">
        {hudStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="p-4 sm:p-5 flex flex-col justify-center"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full animate-pulse" />
              <p className="font-mono text-[10px] tracking-widest text-[var(--hud-muted)]">
                {stat.label}
              </p>
            </div>
            <p className={`font-sub font-bold text-base sm:text-lg tracking-wide ${stat.color}`}>
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/*  Quest Card (Project Frame)                                          */
/* -------------------------------------------------------------------- */

function QuestCard({
  children,
  index,
  rank,
}: {
  children: React.ReactNode;
  index: number;
  rank: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-xl border border-[var(--cyber-border)] bg-[var(--cyber-card-subtle)] backdrop-blur-md hover:border-[var(--neon-cyan)] transition-all duration-300 overflow-hidden flex flex-col shadow-sm"
    >
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="absolute top-2 left-2 text-[10px] font-mono text-[var(--hud-muted)] group-hover:text-[var(--neon-cyan)] transition-colors">
        [SYS_FRAME_0{index + 1}]
      </div>
      <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[var(--badge-bg)] border border-[var(--cyber-border)] font-mono text-[10px] text-[var(--neon-cyan)]">
        RANK: {rank}
      </div>

      <div className="p-6 pt-10 flex flex-col flex-1">{children}</div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------- */
/*  Skill Loadout & Projects Data                                       */
/* -------------------------------------------------------------------- */

const skillTrees = [
  {
    category: "FRONTEND ARSENAL",
    icon: Code,
    powerLevel: "LVL 95",
    color: "from-cyan-500 to-blue-600",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "BACKEND ENGINE",
    icon: Terminal,
    powerLevel: "LVL 92",
    color: "from-purple-500 to-indigo-600",
    items: ["PHP", "Laravel", "REST APIs", "Node.js Basics"],
  },
  {
    category: "DATABASE & VAULT",
    icon: Database,
    powerLevel: "LVL 88",
    color: "from-emerald-500 to-teal-600",
    items: ["MySQL", "Database Architecture", "Git / GitHub"],
  },
  {
    category: "MOBILE DEPLOYMENT",
    icon: Smartphone,
    powerLevel: "LVL 85",
    color: "from-pink-500 to-rose-600",
    items: ["Flutter", "React Native", "Cross-Platform UI"],
  },
];

interface Project {
  title: string;
  rank: string;
  xpReward: string;
  description: string;
  tags: string[];
  icon: any;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "KampungOnline",
    rank: "S-TIER",
    xpReward: "+2500 XP",
    description:
      "A digital community management system featuring real-time broadcasting, user access control, and high-concurrency engagement tools for local networks.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    icon: ShieldAlert,
    live: "https://kampungonline.my",
  },
  {
    title: "ePDK School Management",
    rank: "S-TIER",
    xpReward: "+3000 XP",
    description:
      "Enterprise student progress tracking portal for Program Didik Kasih deployed across Selangor primary schools. Features real-time grade analytics and automated reporting.",
    tags: ["Laravel", "Tailwind CSS", "MySQL"],
    icon: Cpu,
    live: "https://epdk.eptrs.my/login",
  },
  {
    title: "E-Learning Arena Platform",
    rank: "A-TIER",
    xpReward: "+1800 XP",
    description:
      "Interactive learning hub with a real-time 'Quiz Arena' competitive module, dynamic timetables, and automated student progress dashboards.",
    tags: ["Laravel", "React JS", "MySQL"],
    icon: Gamepad2,
    live: "https://example.com",
  },
  {
    title: "HomeTutor CSR Portal",
    rank: "A-TIER",
    xpReward: "+1200 XP",
    description:
      "High-performance CSR program landing page designed for speed and rapid user enrollment in educational initiatives.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    icon: Sparkles,
    live: "https://example.com",
  },
];

/* -------------------------------------------------------------------- */
/*  Main Gaming Portfolio Page                                          */
/* -------------------------------------------------------------------- */

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle Theme Function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main
      className={`font-body bg-[var(--cyber-bg)] text-[var(--hud-text)] selection:bg-[var(--neon-pink)] selection:text-white relative overflow-x-hidden min-h-screen bg-cyber-grid transition-colors duration-300 ${
        !isDarkMode ? "light-theme" : ""
      }`}
    >
      <FontImports />
      <Navbar />

      {/* Background CRT Scanline overlay effect */}
      <div className="pointer-events-none fixed inset-0 z-50 scanlines opacity-[var(--scanline-opacity)]" />

      {/* ==================== HERO SECTION ==================== */}
      <section
        id="about"
        className="relative pt-32 pb-20 flex items-center overflow-hidden border-b border-[var(--cyber-border)]"
      >
        <GamingHUDTracker />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full px-6">
          {/* Main Hero Content */}
          <div className="lg:col-span-7">
            {/* Top Bar with Light/Dark Mode Switcher */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/30 bg-[var(--neon-cyan)]/10 px-3.5 py-1.5 rounded-sm backdrop-blur-md"
              >
                <Radio className="w-3.5 h-3.5 animate-pulse text-[var(--neon-green)]" />
                <span>PLAYER 1 READY · APPLIED COMPUTER VISION</span>
              </motion.div>

              {/* Theme Switcher Button */}
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[var(--cyber-border)] bg-[var(--cyber-card)] text-[var(--hud-text)] font-mono text-xs hover:border-[var(--neon-cyan)] transition-colors cursor-pointer"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>MECH LIGHT</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-500" />
                    <span>CYBER DARK</span>
                  </>
                )}
              </button>
            </div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-6xl tracking-wide uppercase leading-tight"
            >
              BUILDING NEXT-GEN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] text-glow-cyan">
                DIGITAL SYSTEMS
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-[var(--hud-muted)] text-base sm:text-lg leading-relaxed max-w-xl font-sub font-medium"
            >
              Architecting full-stack web engines synced with real-time computer vision.
              Engineered for battle, deployed for schools, communities, and high-impact enterprise applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <CyberButton href="#projects" variant="cyan">
                <Swords className="w-4 h-4" /> VIEW QUEST LOG
              </CyberButton>
              <CyberButton href="mailto:zakwansanudin02@gmail.com" variant="ghost">
                <Mail className="w-4 h-4" /> INITIATE CO-OP
              </CyberButton>
            </motion.div>
          </div>

          {/* Player Stats HUD Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm rounded-2xl bg-[var(--cyber-card)] border-2 border-[var(--cyber-border-glow)] p-6 cyber-glow-cyan backdrop-blur-xl">
              {/* Top HUD Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--cyber-border)]">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[var(--neon-pink)] animate-bounce" />
                  <span className="font-display text-xs font-bold tracking-widest text-[var(--hud-text)]">
                    CHARACTER CARD
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/40">
                  LVL 99
                </span>
              </div>

              {/* Avatar + Info */}
              <div className="flex items-center gap-4 my-5">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-[var(--neon-cyan)] p-0.5 shrink-0 bg-slate-950">
                  <Image
                    src="/images/profile/profile-img.png"
                    alt="Player Avatar"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[var(--hud-text)] text-lg">
                    FULL-STACK DEV
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] animate-ping" />
                    <span className="font-mono text-xs text-[var(--neon-green)] font-semibold">
                      STATUS: ONLINE
                    </span>
                  </div>
                </div>
              </div>

              {/* RPG Stats Bars */}
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-[var(--hud-muted)] mb-1">
                    <span>HP (RELIABILITY)</span>
                    <span className="text-[var(--neon-green)]">100 / 100</span>
                  </div>
                  <div className="h-2 w-full bg-[var(--cyber-border)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--neon-green)] w-full shadow-[0_0_10px_var(--neon-green)]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[var(--hud-muted)] mb-1">
                    <span>MP (CLEAN CODE)</span>
                    <span className="text-[var(--neon-cyan)]">98 / 100</span>
                  </div>
                  <div className="h-2 w-full bg-[var(--cyber-border)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--neon-cyan)] w-[98%] shadow-[0_0_10px_var(--neon-cyan)]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[var(--hud-muted)] mb-1">
                    <span>EXP (SYSTEM BUILD)</span>
                    <span className="text-[var(--neon-purple)]">MAX LEVEL</span>
                  </div>
                  <div className="h-2 w-full bg-[var(--cyber-border)] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-[var(--neon-pink)] w-full shadow-[0_0_10px_var(--neon-pink)]" />
                  </div>
                </div>
              </div>

              {/* Primary Weapon / Stack */}
              <div className="mt-5 pt-4 border-t border-[var(--cyber-border)] flex justify-between items-center font-mono text-xs text-[var(--hud-muted)]">
                <span>PRIMARY LOADOUT:</span>
                <span className="text-[var(--hud-text)] font-semibold">Next.js · Laravel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HUD Readout Bar */}
      <HUDReadoutStrip />

      {/* ==================== SKILL TREE SECTION ==================== */}
      <section id="skills" className="py-24 bg-[var(--cyber-card-subtle)] relative z-10 border-b border-[var(--cyber-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--neon-cyan)] mb-3">
              <Zap className="w-4 h-4 text-[var(--neon-cyan)]" /> SKILL TREE & PERKS
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-wide uppercase text-[var(--hud-text)]">
              CLASS ABILITIES & LOADOUT
            </h2>
          </div>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillTrees.map((tree, i) => {
              const IconComp = tree.icon;
              return (
                <motion.div
                  key={tree.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-xl border border-[var(--cyber-border)] bg-[var(--cyber-card)] p-6 flex flex-col justify-between hover:border-[var(--neon-cyan)] transition-all duration-300 group shadow-sm"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[var(--badge-bg)] border border-[var(--cyber-border)] flex items-center justify-center text-[var(--neon-cyan)] group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[var(--hud-muted)] bg-[var(--badge-bg)] px-2.5 py-1 rounded border border-[var(--cyber-border)]">
                        {tree.powerLevel}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-sm tracking-wider text-[var(--hud-text)] mb-4">
                      {tree.category}
                    </h3>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {tree.items.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--cyber-bg)] border border-[var(--cyber-border)] text-[var(--hud-text)] transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Power Bar */}
                  <div className="mt-6 pt-4 border-t border-[var(--cyber-border)]">
                    <div className="h-1.5 w-full bg-[var(--cyber-border)] rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${tree.color} w-[90%]`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS / QUEST LOG ==================== */}
      <section id="projects" className="py-28 max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--neon-pink)] mb-3">
            <Trophy className="w-4 h-4 text-[var(--neon-pink)]" /> COMPLETED MISSIONS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-wide uppercase text-[var(--hud-text)]">
            QUEST DOSSIER
          </h2>
          <p className="mt-4 text-[var(--hud-muted)] font-sub font-medium text-base sm:text-lg">
            High-priority web systems shipped to production and live deployment.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const IconComponent = project.icon;
            return (
              <QuestCard key={project.title} index={i} rank={project.rank}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--neon-cyan)]/10 border border-[var(--neon-cyan)]/30 flex items-center justify-center text-[var(--neon-cyan)]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-[var(--neon-green)] font-semibold bg-[var(--neon-green)]/10 px-2.5 py-1 rounded border border-[var(--neon-green)]/30">
                    {project.xpReward}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[var(--hud-text)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--hud-muted)] font-sub text-base leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--cyber-bg)] text-[var(--hud-text)] border border-[var(--cyber-border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-[var(--cyber-border)]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-sub font-bold text-xs uppercase text-[var(--hud-muted)] hover:text-[var(--neon-cyan)] transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" /> REPOSITORY
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-sub font-bold text-xs uppercase text-[var(--neon-cyan)] hover:opacity-80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> LAUNCH DEMO
                    </a>
                  )}
                </div>
              </QuestCard>
            );
          })}
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="pb-28 max-w-5xl mx-auto px-6 relative z-10">
        <div className="relative rounded-2xl bg-[var(--cyber-card)] border-2 border-[var(--cyber-border-glow)] p-10 sm:p-16 text-center overflow-hidden cyber-glow-cyan">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--neon-cyan)] mb-4 bg-[var(--badge-bg)] px-3 py-1 rounded border border-[var(--neon-cyan)]/30">
              <Activity className="w-3.5 h-3.5 text-[var(--neon-green)] animate-pulse" />
              INITIATE MULTIPLAYER
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[var(--hud-text)] mb-4 tracking-wide uppercase">
              READY TO CO-OP ON YOUR NEXT PROJECT?
            </h2>
            <p className="text-[var(--hud-muted)] font-sub font-medium text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Accepting contracts for full-stack engineering, real-time computer vision integration, or high-performance systems architecture.
            </p>

            <CyberButton href="mailto:zakwansanudin02@gmail.com" variant="cyan">
              <Mail className="w-4 h-4" /> SEND PARTY INVITE
            </CyberButton>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-8 border-t border-[var(--cyber-border)] text-center text-[var(--hud-muted)] text-xs font-mono relative z-10">
        <p>
          © {new Date().getFullYear()} PLAYER 1 // ALL RIGHTS RESERVED. POWERED BY NEXT.JS & FRAMER MOTION.
        </p>
      </footer>
    </main>
  );
}