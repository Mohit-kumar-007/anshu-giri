import { Mail, FileText, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

interface FooterProps {
  theme: "dark" | "light";
}

export default function Footer({ theme }: FooterProps) {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid var(--color-border)",
        paddingTop: 56,
        paddingBottom: 36,
      }}
      aria-label="Footer"
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40, marginBottom: 48 }} className="lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span className="gradient-aurora" style={{ width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 700, color: "white", fontFamily: "var(--font-display)", flexShrink: 0 }}>A</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15 }}>
                Anshu<span style={{ color: "var(--color-primary)", fontWeight: 600 }}>.dev</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: "var(--color-muted-foreground)", lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              {personalInfo.tagline}<br />B.Tech AI &amp; Data Science · VGU, Jaipur
            </p>
            <div className="glass" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 9999, fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.05em", color: "var(--color-primary)" }}>
              <span style={{ display: "flex", position: "relative", width: 8, height: 8 }}>
                <span className="animate-ping" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "oklch(0.7 0.18 160)", opacity: 0.75 }} />
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "oklch(0.65 0.2 160)", display: "inline-block" }} />
              </span>
              Open to opportunities
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, marginBottom: 16, letterSpacing: "-0.01em" }}>Quick Links</h4>
            <nav>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      style={{ fontSize: 13, color: "var(--color-muted-foreground)", textDecoration: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-primary)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-muted-foreground)")}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-primary)", opacity: 0.5 }} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, marginBottom: 16, letterSpacing: "-0.01em" }}>Connect</h4>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              {[
                { icon: <GithubIcon size={16} />, href: personalInfo.github, label: "GitHub" },
                { icon: <LinkedinIcon size={16} />, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: <Mail size={16} />, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="glass" style={{ width: 40, height: 40, borderRadius: "50%", display: "grid", placeItems: "center", color: "var(--color-muted-foreground)", textDecoration: "none", transition: "all 0.2s ease" }} onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--color-primary)"; el.style.boxShadow = "var(--shadow-glow)"; el.style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--color-muted-foreground)"; el.style.boxShadow = ""; el.style.transform = ""; }}>
                  {icon}
                </a>
              ))}
            </div>
            <a href="/resume.pdf" download className="gradient-aurora shadow-elegant" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 9999, fontSize: 12, fontWeight: 600, color: "white", textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s" }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-glow)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }} id="footer-resume-btn">
              <FileText size={13} /> Download Resume
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--color-border)", marginBottom: 24 }} aria-hidden="true" />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--color-muted-foreground)" }}>© 2026 Anshu Giri. All rights reserved.</p>
          <p style={{ fontSize: 12, color: "var(--color-muted-foreground)", display: "flex", alignItems: "center", gap: 4 }}>
            Made with <Heart size={11} fill="oklch(0.65 0.22 25)" color="oklch(0.65 0.22 25)" style={{ display: "inline" }} /> using React &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
