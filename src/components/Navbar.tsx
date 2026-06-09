import { useState, useEffect } from "react";
import { FileText, Moon, Sun, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          left: "50%",
          top: 16,
          zIndex: 40,
          transform: `translateX(-50%) translateY(${visible ? 0 : -30}px)`,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          width: "min(960px, calc(100% - 2rem))",
        }}
        aria-label="Main Navigation"
      >
        <div className="glass shadow-elegant" style={{ padding: 4, borderRadius: 9999 }}>
          <nav
            className="glass"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 9999,
              padding: "10px 20px",
            }}
          >
            {/* Logo */}
            <a
              href="#top"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, letterSpacing: "-0.025em", textDecoration: "none", color: "var(--color-foreground)", cursor: "pointer" }}
              id="nav-logo"
            >
              <span
                className="gradient-aurora"
                style={{ width: 28, height: 28, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 700, color: "white", fontFamily: "var(--font-display)", flexShrink: 0 }}
              >
                A
              </span>
              <span style={{ fontSize: 14 }}>
                Anshu<span style={{ color: "var(--color-primary)", fontWeight: 600 }}>.dev</span>
              </span>
            </a>

            {/* Desktop links */}
            <ul style={{ display: "none", gap: 4, listStyle: "none" }} className="lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    style={{
                      borderRadius: 9999,
                      padding: "6px 12px",
                      fontSize: 14,
                      color: "var(--color-muted-foreground)",
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "color 0.2s, background 0.2s",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(0.55 0.22 265 / 0.08)";
                      (e.currentTarget as HTMLElement).style.color = "var(--color-foreground)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "";
                      (e.currentTarget as HTMLElement).style.color = "var(--color-muted-foreground)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Resume button */}
              <a
                href="/resume.pdf"
                download
                className="glass lg:grid"
                aria-label="Download Resume"
                title="Download Resume"
                style={{
                  display: "none",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  placeItems: "center",
                  color: "var(--color-muted-foreground)",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-foreground)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-muted-foreground)")}
                id="nav-resume-btn"
              >
                <FileText size={16} aria-hidden="true" />
              </a>

              {/* Theme toggle */}
              <button
                type="button"
                onClick={onToggleTheme}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--color-muted-foreground)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-foreground)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-muted-foreground)")}
                aria-label="Toggle theme"
                id="nav-theme-toggle"
              >
                {theme === "dark" ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
                <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>Toggle theme</span>
              </button>

              {/* Let's talk CTA */}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                className="gradient-aurora lg:inline-block"
                style={{
                  display: "none",
                  borderRadius: 9999,
                  padding: "6px 16px",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                id="nav-contact-btn"
              >
                Let&apos;s talk
              </a>

              {/* Mobile menu button */}
              <button
                aria-label="Toggle Menu"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden"
                style={{
                  display: "block",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--color-muted-foreground)",
                  padding: 4,
                }}
                id="nav-mobile-menu-btn"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="glass-strong"
          style={{
            position: "fixed",
            top: 80,
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% - 2rem)",
            maxWidth: 960,
            zIndex: 39,
            borderRadius: 20,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 500,
                color: "var(--color-foreground)",
                textDecoration: "none",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "oklch(0.55 0.22 265 / 0.08)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="gradient-aurora"
            style={{ borderRadius: 12, padding: "12px 16px", fontSize: 14, fontWeight: 600, color: "white", textDecoration: "none", textAlign: "center", marginTop: 8 }}
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </>
  );
}
