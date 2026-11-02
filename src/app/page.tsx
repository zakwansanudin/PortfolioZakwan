"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Code2, Database, Mail, Server, Smartphone, X } from "lucide-react";

const skills = [
  { title: "Frontend", icon: Code2, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", icon: Server, items: ["PHP", "Laravel", "REST APIs", "Node.js"] },
  { title: "Data & Tools", icon: Database, items: ["MySQL", "Git", "GitHub"] },
  { title: "Mobile", icon: Smartphone, items: ["Flutter", "React Native"] },
];

const projects = [
  {
    number: "01",
    title: "Content Management System",
    type: "Website & content platform",
    description:
      "A central platform for managing website pages, services, members, and contact information from one clear dashboard.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    preview: "cms",
    gallery: [
      { src: "/images/projects/cms/dashboard_cms.png", label: "CMS dashboard" },
      { src: "/images/projects/cms/homepage.png", label: "Homepage management" },
      { src: "/images/projects/cms/services.png", label: "Services management" },
      { src: "/images/projects/cms/members.png", label: "Members management" },
      { src: "/images/projects/cms/contact.png", label: "Contact information" },
    ],
  },
  {
    number: "02",
    title: "ePDK School Management",
    type: "Education · In use",
    description:
      "A student progress portal for the Program Didik Kasih, used across primary schools in Selangor for tracking grades and reporting.",
    tags: ["Laravel", "Tailwind CSS", "MySQL"],
    href: "https://epdk.eptrs.my/login",
    preview: "school",
    gallery: [
      { src: "/images/projects/epdk/dashboard.png", label: "ePDK dashboard" },
      { src: "/images/projects/epdk/student.png", label: "Student progress" },
      { src: "/images/projects/epdk/login.png", label: "ePDK login" },
    ],
  },
  {
    number: "03",
    title: "KampungOnline",
    type: "Community platform",
    description:
      "A digital community platform with resident services, local updates, and separate dashboards for community leaders and villagers.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    href: "https://kampungonline.my",
    preview: "community",
    gallery: [
      { src: "/images/projects/kampungonline/landing.png", label: "KampungOnline landing page" },
      { src: "/images/projects/kampungonline/login.png", label: "KampungOnline login" },
      { src: "/images/projects/kampungonline/dashboard_villagers.png", label: "Villager dashboard" },
      { src: "/images/projects/kampungonline/dashboard_ketua.png", label: "Community leader dashboard" },
    ],
  },
];

const previewContent = {
  cms: {
    name: "CONTENT CMS",
    section: "Website overview",
    stats: [["Pages", "24"], ["Services", "08"], ["Members", "56"]],
    activity: ["Homepage content", "Service details", "Member directory"],
    bars: [36, 56, 44, 78, 58, 88, 68, 100, 76, 91, 65, 82],
  },
  community: {
    name: "KAMPUNG ONLINE",
    section: "Community overview",
    stats: [["Members", "2,408"], ["Updates", "18"], ["Groups", "12"]],
    activity: ["Community notice", "Weekend activities", "Local services"],
    bars: [36, 56, 44, 78, 58, 88, 68, 100, 76, 91, 65, 82],
  },
  school: {
    name: "ePDK PORTAL",
    section: "Student progress",
    stats: [["Students", "1,284"], ["Classes", "42"], ["Reports", "96%"]],
    activity: ["Bahasa Melayu", "Mathematics", "Science"],
    bars: [58, 66, 72, 61, 83, 74, 92, 78, 88, 69, 98, 82],
  },
};

type PreviewKind = keyof typeof previewContent;
type Project = (typeof projects)[number];

function ProjectPreview({ kind }: { kind: PreviewKind }) {
  const preview = previewContent[kind];

  return (
    <div className={`project-preview preview-${kind}`} aria-hidden="true">
      <div className="preview-browser">
        <span className="preview-lights"><i /><i /><i /></span>
        <span className="preview-address">{preview.name.toLowerCase().replaceAll(" ", "-")}.my / dashboard</span>
        <span className="preview-window-mark">•••</span>
      </div>
      <div className="preview-app">
        <aside className="preview-sidebar">
          <b>{preview.name.split(" ")[0]}<span>.</span></b>
          <i className="selected" /><i /><i /><i />
          <div className="preview-side-avatar" />
        </aside>
        <div className="preview-main">
          <div className="preview-heading">
            <div><small>OVERVIEW</small><b>{preview.section}</b></div>
            <span className="preview-date">THIS MONTH⌄</span>
          </div>
          <div className="preview-stat-grid">
            {preview.stats.map(([label, value]) => (
              <div className="preview-stat" key={label}><small>{label}</small><b>{value}</b><i /></div>
            ))}
          </div>
          <div className="preview-lower-grid">
            <div className="preview-chart">
              <div className="preview-panel-heading"><b>Activity</b><small>Last 12 months</small></div>
              <div className="preview-bars">{preview.bars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
              <div className="preview-months"><span>JAN</span><span>JUN</span><span>DEC</span></div>
            </div>
            <div className="preview-activity">
              <div className="preview-panel-heading"><b>Recent</b><small>VIEW</small></div>
              {preview.activity.map((item, index) => <div className="preview-activity-row" key={item}><i>{index + 1}</i><span>{item}</span><b>›</b></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  function openGallery(project: Project) {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setActiveImage(0);
    setActiveProject(project);
  }

  useEffect(() => {
    if (!activeProject) return;

    const galleryLength = activeProject.gallery.length;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveProject(null);
      if (event.key === "ArrowRight") {
        setActiveImage((index) => (index + 1) % galleryLength);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage((index) => (index - 1 + galleryLength) % galleryLength);
      }
      if (event.key === "Tab") {
        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href]'
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [activeProject]);

  return (
    <div className="portfolio-page">
      {/* Fixed scroll-progress line */}
      <div className="scroll-line" aria-hidden="true" />

      {/* Background blobs */}
      <div className="bg-blob bg-blob-1" aria-hidden="true" />
      <div className="bg-blob bg-blob-2" aria-hidden="true" />

      {/* ── Navbar ─────────────────────────────────────────── */}
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="Zakwan Sanudin home">
            zakwan<span>.</span>
          </a>
          <div className="arcade-hud" aria-label="Arcade status">
            <span><small>SCORE</small><b>000000</b></span>
            <span><small>LEVEL</small><b>01 / 03</b></span>
            <span className="hud-lives"><small>LIVES</small><b aria-label="three lives">♥ ♥ ♥</b></span>
          </div>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
          </nav>
          <a className="header-contact" href="mailto:zakwansanudin02@gmail.com">
            Get in touch <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      <main id="top">
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="hero container" id="about">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="availability-dot" aria-hidden="true" />
              Developer based in Selangor, Malaysia
            </p>

            <h1>
              I build{" "}
              <em>useful</em>
              <br />
              digital products.
            </h1>

            <p className="hero-description">
              I&rsquo;m Zakwan — a full-stack developer working across web and
              mobile. I turn complex needs into clear, dependable tools for
              schools, communities, and teams.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDown size={15} />
              </a>
              <a className="button button-ghost" href="mailto:zakwansanudin02@gmail.com">
                Say hello <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">4+</div>
                <div className="hero-stat-label">Projects shipped</div>
              </div>
              <div>
                <div className="hero-stat-value">3+</div>
                <div className="hero-stat-label">Years experience</div>
              </div>
              <div>
                <div className="hero-stat-value">2</div>
                <div className="hero-stat-label">Active domains</div>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <Image
                src="/images/profile/profile-img.png"
                alt="Portrait of Zakwan Sanudin"
                fill
                priority
                sizes="(max-width: 760px) 170px, 220px"
                className="portrait-image"
              />
            </div>
            <div className="portrait-badge">
              <span className="portrait-badge-dot" aria-hidden="true" />
              Available for work
            </div>
            <div className="stack-note" aria-label="Main technology stack">
              <span className="stack-note-label">Main stack</span>
              <span className="stack-note-items"><code>Next.js</code><i /> <code>Laravel</code><i /> <code>MySQL</code></span>
            </div>
          </div>
        </section>

        {/* ── Intro strip ────────────────────────────────────── */}
        <section className="intro-strip">
          <div className="container intro-inner">
            <span className="section-kicker">A little about me</span>
            <p>
              I enjoy making technology feel{" "}
              <strong>simple and human</strong>. My work brings together
              considered interfaces, reliable systems, and a practical
              understanding of the people who use them.
            </p>
          </div>
        </section>

        {/* ── Selected work ──────────────────────────────────── */}
        <section className="section container work-section" id="work">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Selected projects</span>
              <h2>Work that makes a difference.</h2>
            </div>
            <p>A few systems and websites I&rsquo;ve helped bring to life.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <button
                className="project-row"
                key={project.number}
                type="button"
                onClick={() => openGallery(project)}
                aria-label={`View ${project.title} screenshots`}
              >
                <ProjectPreview kind={project.preview as PreviewKind} />
                <div className="project-card-top">
                  <div className="project-top-inner">
                    <span className="project-number">{project.number}</span>
                    <span className="project-card-mark">ZS / WORK</span>
                  </div>
                </div>
                <div className="project-main">
                  <div className="project-title-line">
                    <div>
                      <p className="project-type">{project.type}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <span className="project-link" aria-hidden="true"><ArrowRight size={18} /></span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className="gallery-action">VIEW SCREENSHOTS <ArrowRight size={13} /></span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ── Skills ─────────────────────────────────────────── */}
        <section className="skills-section" id="skills">
          <div className="container skills-content">
            <div className="section-heading">
              <div>
                <span className="section-kicker">Tools of the trade</span>
                <h2>Good work starts with the right tools.</h2>
              </div>
              <p>
                I choose technologies to suit the problem and make products
                easier to maintain.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3><group.icon size={17} strokeWidth={1.8} aria-hidden="true" />{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────── */}
        <div className="container">
          <section className="contact-section" id="contact">
            <div>
              <span className="section-kicker">Have a project in mind?</span>
              <h2>Let&rsquo;s make something .</h2>
              <p>
                I&rsquo;m always open to a thoughtful conversation about a new
                idea or collaboration.
              </p>
            </div>
            <div className="contact-right">
              <a
                className="button button-primary"
                href="mailto:zakwansanudin02@gmail.com"
              >
                <Mail size={16} /> Email Zakwan <ArrowUpRight size={15} />
              </a>
            </div>
          </section>
        </div>
      </main>

      {activeProject && (
        <div className="gallery-backdrop" onClick={() => setActiveProject(null)}>
          <div
            className="gallery-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
            ref={modalRef}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-modal-header">
              <div>
                <span className="gallery-overline">PROJECT SCREENSHOTS</span>
                <h2 id="gallery-title">{activeProject.title}</h2>
              </div>
              <button
                className="gallery-close"
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project gallery"
              ><X size={20} /></button>
            </div>

            <div className="gallery-stage">
              <button
                className="gallery-arrow gallery-arrow-left"
                type="button"
                onClick={() => setActiveImage((index) => (index - 1 + activeProject.gallery.length) % activeProject.gallery.length)}
                aria-label="Previous screenshot"
              ><ChevronLeft size={22} /></button>
              <div className="gallery-image-frame">
                <Image
                  src={activeProject.gallery[activeImage].src}
                  alt={`${activeProject.title}: ${activeProject.gallery[activeImage].label}`}
                  fill
                  sizes="(max-width: 760px) 94vw, 1000px"
                  className="gallery-image"
                  priority
                />
              </div>
              <button
                className="gallery-arrow gallery-arrow-right"
                type="button"
                onClick={() => setActiveImage((index) => (index + 1) % activeProject.gallery.length)}
                aria-label="Next screenshot"
              ><ChevronRight size={22} /></button>
            </div>

            <div className="gallery-controls">
              <div className="gallery-caption">
                <span>{activeProject.gallery[activeImage].label}</span>
                <small>{String(activeImage + 1).padStart(2, "0")} / {String(activeProject.gallery.length).padStart(2, "0")}</small>
              </div>
              <div className="gallery-thumbnails" aria-label="Choose screenshot">
                {activeProject.gallery.map((image, index) => (
                  <button
                    className={`gallery-thumbnail${index === activeImage ? " is-active" : ""}`}
                    key={image.src}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show ${image.label}`}
                    aria-current={index === activeImage ? "true" : undefined}
                  >
                    <Image src={image.src} alt="" fill sizes="96px" />
                  </button>
                ))}
              </div>
              {activeProject.href && (
                <a className="gallery-live-link" href={activeProject.href} target="_blank" rel="noreferrer">
                  OPEN LIVE PROJECT <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Zakwan Sanudin</span>
          <div className="footer-links">
            <a
              href="https://github.com/zakwansanudin"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.linkedin.com/in/zakwan-sanudin/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={12} />
            </a>
            <a href="mailto:zakwansanudin02@gmail.com">
              Email <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
