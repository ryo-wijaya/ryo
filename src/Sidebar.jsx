import {
  User, GraduationCap, Briefcase, Layers, FolderOpen,
  Award, FileText, Github, Linkedin, Mail,
} from "lucide-react";
import { profile } from "./data";
import resumePdf from "./assets/Ryo_Wijaya_Resume.pdf";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { id: "about", label: "About", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "certifications", label: "Certifications", icon: Award },
];

export default function Sidebar({ active }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="sidebar">
      <ThemeToggle className="sidebar-theme-toggle" />
      <div className="sidebar-inner d-flex flex-column justify-content-center">
        <div className="sidebar-header text-center mb-4">
          <div className="avatar-wrapper mx-auto mb-2">
            <img src="/eevee-tar.jpeg" alt={profile.name} className="avatar d-block w-100 h-100 object-fit-cover" />
          </div>
          <h1 className="sidebar-name fw-bold mb-0">{profile.name}</h1>
          <p className="sidebar-title mb-2">{profile.title}</p>

          <div className="sidebar-links d-flex justify-content-center gap-2 mb-2">
            <a href={profile.github} target="_blank" rel="noreferrer" title="GitHub" className="d-flex align-items-center justify-content-center">
              <Github size={17} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="d-flex align-items-center justify-content-center">
              <Linkedin size={17} />
            </a>
            <a href={`mailto:${profile.email}`} title="Email" className="d-flex align-items-center justify-content-center">
              <Mail size={17} />
            </a>
          </div>
        </div>

        <nav className="sidebar-nav d-flex flex-column">
          {NAV.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`nav-item d-flex align-items-center gap-2 w-100 text-start${active === id ? " active" : ""}`}
              onClick={() => scrollTo(id)}
            >
              <Icon size={16} strokeWidth={1.8} />
              {label}
            </button>
          ))}

          <a href={resumePdf} target="_blank" rel="noreferrer" className="nav-item resume-nav d-flex align-items-center gap-2 w-100 text-start">
            <FileText size={16} strokeWidth={1.8} />
            Resume
          </a>
        </nav>
      </div>
    </aside>
  );
}
