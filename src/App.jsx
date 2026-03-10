import { useState, useEffect, useRef } from "react";
import {
  MapPin, Mail, ArrowUpRight, Menu, X,
  User, GraduationCap, Briefcase, Layers, FolderOpen, Award, Music, BookOpen, FileText,
  Flag,
} from "lucide-react";
import Sidebar from "./Sidebar";
import Section from "./Section";
import ThemeToggle from "./ThemeToggle";
import {
  profile, education, experience, languages, skills,
  projects, certifications, music,
} from "./data";
import resumePdf from "./assets/Ryo_Wijaya_Resume.pdf";

const SECTIONS = [
  "about", "education", "experience",
  "skills", "projects", "certifications", "music",
];

const MOBILE_NAV = [
  { id: "about", label: "About", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "music", label: "Music", icon: Music },
  { id: "blog", label: "Blog", icon: BookOpen },
  { id: "resume", label: "Resume", icon: FileText },
];

export default function App() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="layout">
      <div className="mobile-nav" ref={dropdownRef}>
        <header className="mobile-topbar">
          <button
            className={`burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
          <ThemeToggle className="mobile-theme-toggle" />
        </header>

        <nav className={`dropdown-menu${menuOpen ? " open" : ""}`}>
          {MOBILE_NAV.map(({ id, label, icon: Icon }, i) =>
            id === "resume" ? (
              <a
                key={id}
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="dropdown-item"
                style={{ animationDelay: `${i * 0.04}s` }}
                onClick={() => setMenuOpen(false)}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{label}</span>
              </a>
            ) : id === "blog" ? (
              <a
                key={id}
                href={profile.blog}
                target="_blank"
                rel="noreferrer"
                className="dropdown-item"
                style={{ animationDelay: `${i * 0.04}s` }}
                onClick={() => setMenuOpen(false)}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{label}</span>
              </a>
            ) : (
              <button
                key={id}
                className={`dropdown-item${active === id ? " active" : ""}`}
                style={{ animationDelay: `${i * 0.04}s` }}
                onClick={() => scrollTo(id)}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{label}</span>
              </button>
            )
          )}
        </nav>
      </div>

      {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />}

      <Sidebar active={active} />

      <main className="main-content">
        <div className="content-inner">

          <Section id="about" title={profile.name} heroTitle>
            <p className="about-text">{profile.about}</p>
            <div className="contact-row d-flex flex-wrap gap-3 mt-3">
              <span className="d-inline-flex align-items-center gap-1"><Flag size={14} strokeWidth={1.8} /> {profile.nationality}</span>
              <span className="d-inline-flex align-items-center gap-1"><Mail size={14} strokeWidth={1.8} /> <a href={`mailto:${profile.email}`}>{profile.email}</a></span>
            </div>
            <div className="d-flex flex-wrap gap-2 mt-3">
              <a href={profile.blog} target="_blank" rel="noreferrer" className="about-btn d-inline-flex align-items-center gap-1 fw-semibold">
                Visit Blog
                <ArrowUpRight size={13} />
              </a>
              <a href={resumePdf} target="_blank" rel="noreferrer" className="about-btn d-inline-flex align-items-center gap-1 fw-semibold">
                Resume
                <ArrowUpRight size={13} />
              </a>
            </div>
          </Section>

          <Section id="education" title="Education">
            {education.map((edu, i) => (
              <div key={i} className="edu-item mb-4">
                <div className="d-flex gap-3 align-items-start">
                  {edu.logo && <img src={edu.logo} alt="" className="item-logo flex-shrink-0" />}
                  <div className="flex-grow-1 min-w-0">
                    <div className="item-header d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-1">
                      <span className="item-title fw-bold">{edu.school} <span className="item-loc">· {edu.location}</span></span>
                      <span className="item-period fw-semibold text-nowrap">{edu.period}</span>
                    </div>
                    <div className="item-subtitle">{edu.degree}</div>
                    {edu.detail && <div className="item-detail fst-italic">{edu.detail}</div>}
                  </div>
                </div>
              </div>
            ))}
          </Section>

          <Section id="experience" title="Experience">
            {experience.map((exp, i) => (
              <div key={i} className="exp-item mb-4">
                <div className="d-flex gap-3 align-items-start">
                  {exp.logo && <img src={exp.logo} alt="" className="item-logo flex-shrink-0" />}
                  <div className="flex-grow-1 min-w-0">
                    <div className="item-header d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-1">
                      <span className="item-title fw-bold">{exp.role} <span className="item-loc">· {exp.company}</span></span>
                      <span className="item-period fw-semibold text-nowrap">{exp.period}</span>
                    </div>
                    <ul className="exp-bullets list-unstyled mt-2">
                      {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Section>

          <Section id="skills" title="Skills">
            <div className="skill-group mb-3">
              <div className="skill-label fw-bold mb-2">Languages</div>
              <div className="d-flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span key={l.name} className="lang-tag d-inline-flex align-items-center gap-1">
                    <img src={l.icon} alt="" className="lang-icon" />
                    {l.name}
                  </span>
                ))}
              </div>
            </div>
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skill-group mb-3">
                <div className="skill-label fw-bold mb-2">{group}</div>
                <div className="d-flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s.name} className="lang-tag d-inline-flex align-items-center gap-1">
                      {s.icon && <img src={s.icon} alt="" className="lang-icon" />}
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Section>

          <Section id="projects" title="Projects">
            <div className="projects-grid">
              {projects.map((p, i) => (
                <a
                  key={i}
                  className="project-card d-flex flex-column"
                  href={p.url || undefined}
                  target={p.url ? "_blank" : undefined}
                  rel={p.url ? "noreferrer" : undefined}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="project-name fw-bold">{p.name}</span>
                    {p.url && <ArrowUpRight size={15} strokeWidth={2} className="project-arrow flex-shrink-0" />}
                  </div>
                  <div className="project-tech mt-1">{p.tech}</div>
                  <div className="project-desc mt-1">{p.description}</div>
                </a>
              ))}
            </div>
          </Section>

          <Section id="certifications" title="Certifications">
            {certifications.map((c, i) => (
              <div key={i} className="cert-item py-2">
                <div>
                  <span className="cert-name fw-semibold">
                    {c.url ? (
                      <a href={c.url} target="_blank" rel="noreferrer">
                        {c.name} <ArrowUpRight size={12} strokeWidth={2} className="inline-arrow" />
                      </a>
                    ) : c.name}
                  </span>
                  <div className="cert-meta mt-1">{c.issuer} · {c.year}</div>
                </div>
              </div>
            ))}
          </Section>

          <Section id="music" title="Music Production">
            {music.map((track, i) => (
              <div key={i} className="music-item mb-4">
                <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-2">
                  <span className="music-title fw-bold">{track.title}</span>
                  <span className="music-note">
                    {track.credits.map((c, j) => (
                      <span key={j}>
                        {c.label}{c.name && <>{" "}<a href={c.url} target="_blank" rel="noreferrer">{c.name}</a></>}
                      </span>
                    ))}
                  </span>
                </div>
                {track.youtube && (
                  <div className="music-video mb-2">
                    <iframe
                      src={track.youtube}
                      title={track.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                {track.audioLead && (
                  <div className="music-audio mb-1">
                    <span className="music-audio-label">Guitar lead</span>
                    <audio controls preload="none" src={track.audioLead} />
                  </div>
                )}
                {track.audio && (
                  <div className="music-audio">
                    <span className="music-audio-label">With vocals</span>
                    <audio controls preload="none" src={track.audio} />
                  </div>
                )}
              </div>
            ))}
          </Section>

        </div>
      </main>
    </div>
  );
}
