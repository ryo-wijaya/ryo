import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Home, ChevronRight } from "lucide-react";
import Sidebar from "../Sidebar";
import ThemeToggle from "../ThemeToggle";

export default function PageLayout({ title, children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="layout">
      <Sidebar activePage={location.pathname} />

      <div className="mobile-nav">
        <header className="mobile-topbar">
          <button className="burger" onClick={() => navigate("/")} aria-label="Back to home">
            <ArrowLeft size={22} strokeWidth={2} />
          </button>
          <span className="mobile-breadcrumb">
            <Home size={13} strokeWidth={2} />
            <ChevronRight size={12} strokeWidth={2} />
            <span>{title}</span>
          </span>
          <ThemeToggle className="mobile-theme-toggle" />
        </header>
      </div>

      <main className="main-content">
        <div className="content-inner page-content">
          <nav className="page-breadcrumb">
            <button className="back-link" onClick={() => navigate("/")}>
              <Home size={14} strokeWidth={2} />
              Home
            </button>
            <ChevronRight size={13} strokeWidth={2} className="breadcrumb-sep" />
            <span className="breadcrumb-current">{title}</span>
          </nav>
          {children}
        </div>
      </main>
    </div>
  );
}
