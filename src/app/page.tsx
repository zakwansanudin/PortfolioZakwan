import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2, Database, Mail, Server, Smartphone } from "lucide-react";

const skills = [
  { title: "Frontend", icon: Code2, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", icon: Server, items: ["PHP", "Laravel", "REST APIs", "Node.js"] },
  { title: "Data & Tools", icon: Database, items: ["MySQL", "Git", "GitHub"] },
  { title: "Mobile", icon: Smartphone, items: ["Flutter", "React Native"] },
];

const projects = [
  {
    number: "01",
    title: "KampungOnline",
    type: "Community platform",
    description:
      "A digital community management system with real-time announcements, access controls, and tools for keeping local networks connected.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    href: "https://kampungonline.my",
  },
  {
    number: "02",
    title: "ePDK School Management",
    type: "Education · In use",
    description:
      "A student progress portal for the Program Didik Kasih, used across primary schools in Selangor for tracking grades and reporting.",
    tags: ["Laravel", "Tailwind CSS", "MySQL"],
    href: "https://epdk.eptrs.my/login",
  },
  {
    number: "03",
    title: "E-Learning Arena",
    type: "Learning platform",
    description:
      "An interactive learning hub with live quiz sessions, dynamic timetables, and dashboards for monitoring student progress.",
    tags: ["Laravel", "React", "MySQL"],
    href: "https://example.com",
  },
  {
    number: "04",
    title: "HomeTutor CSR Portal",
    type: "Campaign website",
    description:
      "A lightweight landing page that helps families learn about an education initiative and sign up to take part.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://example.com",
  },
];

export default function Home() {
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
              <article className="project-row" key={project.number}>
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
                    <a
                      className="project-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
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
              <h2>Let&rsquo;s make something useful.</h2>
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
