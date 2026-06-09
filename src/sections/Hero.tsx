import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe, ArrowRight, FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolio";

function TypingRole({ roles }: { roles: string[] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[idx];
    const speed = deleting ? 40 : 80;
    const pause = deleting ? 300 : 2000;
    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < role.length) {
          setText(role.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx, roles]);

  return (
    <span
      className="gradient-text"
      style={{ fontWeight: 600, position: "relative", display: "inline-block", verticalAlign: "bottom" }}
    >
      {/* Invisible spacer to hold width */}
      <span style={{ visibility: "hidden", whiteSpace: "nowrap" }}>
        {roles.reduce((a, b) => (a.length > b.length ? a : b), "")}
      </span>
      <span style={{ position: "absolute", left: 0, bottom: 0, whiteSpace: "nowrap" }}>
        <span className="gradient-text">{text}</span>
        <span
          className="animate-blink"
          style={{
            marginLeft: 2,
            display: "inline-block",
            width: 2,
            height: "0.9em",
            verticalAlign: "middle",
            background: "var(--color-primary)",
          }}
        />
      </span>
    </span>
  );
}

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <section
      id="top"
      style={{ position: "relative", minHeight: "100vh", paddingTop: 96, paddingBottom: 60 }}
      aria-label="Hero"
    >
      {/* Two-column layout — inline responsive via JS */}
      <div
        style={{
          margin: "0 auto",
          maxWidth: 1280,
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: isDesktop ? "1.15fr 1fr" : "1fr",
          alignItems: "center",
          gap: isDesktop ? 60 : 48,
          minHeight: isDesktop ? "calc(100vh - 156px)" : "auto",
        }}
      >
        {/* ─────────────── LEFT — Text Content ─────────────── */}
        <div style={{ position: "relative", zIndex: 10 }}>

          {/* Available badge */}
          <motion.div
            className="glass"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 9999,
              padding: "6px 14px",
              fontSize: 12,
              fontWeight: 500,
              marginBottom: 24,
            }}
          >
            <span style={{ position: "relative", display: "flex", width: 8, height: 8 }}>
              <span
                className="animate-ping"
                style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "oklch(0.7 0.18 160)", opacity: 0.75 }}
              />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "oklch(0.65 0.2 160)", display: "inline-block", position: "relative" }} />
            </span>
            <span style={{ color: "var(--color-muted-foreground)" }}>{personalInfo.availableFor}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isDesktop ? "clamp(44px, 5vw, 68px)" : "clamp(36px, 9vw, 56px)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            Turning data into{" "}
            <span className="gradient-text">intelligent decisions</span>{" "}
            one model at a time.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{
              fontSize: 17,
              color: "var(--color-muted-foreground)",
              maxWidth: 560,
              marginBottom: 40,
              lineHeight: 1.75,
            }}
          >
            I&apos;m{" "}
            <span style={{ fontWeight: 500, color: "var(--color-foreground)" }}>
              {personalInfo.name}
            </span>{" "}
            — a <TypingRole roles={personalInfo.roles} />
            <span style={{ display: "block", marginTop: 10 }}>
              {personalInfo.summary}
            </span>
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="gradient-aurora shadow-elegant"
              id="hero-view-projects-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderRadius: 9999,
                padding: "10px 24px",
                fontSize: 14,
                fontWeight: 600,
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(1.05) translateY(-2px)";
                el.style.boxShadow = "var(--shadow-glow)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "";
                el.style.boxShadow = "";
              }}
            >
              <Globe size={16} aria-hidden="true" />
              <span>View Projects</span>
              <ArrowRight size={14} aria-hidden="true" />
            </a>

            {/* Divider */}
            <div style={{ height: 24, width: 1, background: "var(--color-border)" }} />

            {/* Social icons */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glass"
                style={{ width: 40, height: 40, borderRadius: "50%", display: "grid", placeItems: "center", color: "var(--color-muted-foreground)", textDecoration: "none", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.1) translateY(-2px)"; el.style.boxShadow = "var(--shadow-glow)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = ""; }}
                id="hero-github-btn"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="glass"
                style={{ width: 40, height: 40, borderRadius: "50%", display: "grid", placeItems: "center", color: "var(--color-muted-foreground)", textDecoration: "none", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.1) translateY(-2px)"; el.style.boxShadow = "var(--shadow-glow)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = ""; }}
                id="hero-linkedin-btn"
              >
                <LinkedinIcon size={16} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="glass"
                style={{ width: 40, height: 40, borderRadius: "50%", display: "grid", placeItems: "center", color: "var(--color-muted-foreground)", textDecoration: "none", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.1) translateY(-2px)"; el.style.boxShadow = "var(--shadow-glow)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = ""; }}
                id="hero-email-btn"
              >
                <Mail size={16} aria-hidden="true" />
              </a>

              {/* Resume download */}
              <div style={{ position: "relative" }}>
                <a
                  href="/resume.pdf"
                  download
                  aria-label="Download Resume"
                  className="glass"
                  style={{ width: 40, height: 40, borderRadius: "50%", display: "grid", placeItems: "center", color: "var(--color-primary)", textDecoration: "none", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.1) translateY(-2px)"; el.style.boxShadow = "var(--shadow-glow)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = ""; }}
                  id="hero-resume-btn"
                >
                  <FileText size={16} aria-hidden="true" />
                </a>
                {/* Download badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 48,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 20,
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  <div
                    className="glass-strong"
                    style={{
                      padding: "3px 10px",
                      borderRadius: 9999,
                      border: "1px solid oklch(0.55 0.22 265 / 0.3)",
                      fontSize: 10,
                      fontWeight: 700,
                      color: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "relative", width: 8, height: 8, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "oklch(0.55 0.22 265 / 0.2)" }}>
                      <span className="animate-ping" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "oklch(0.55 0.22 265 / 0.4)", opacity: 0.75 }} />
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-primary)", position: "relative" }} />
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)" }}>0+ downloads</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─────────────── RIGHT — Profile Photo Card ─────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            /* On mobile, limit height so it doesn't overflow */
            maxHeight: isDesktop ? "calc(100vh - 200px)" : 420,
          }}
        >
          {/* Outer wrapper — controls the card size */}
          <div
            style={{
              position: "relative",
              width: "100%",
              /* Portrait card — same as reference: taller than wide */
              maxWidth: isDesktop ? 440 : 340,
              aspectRatio: "4 / 5",
            }}
          >
            {/* Glass card with 3D tilt */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: 24,
                padding: 4,
                cursor: "default",
                transition: "transform 0.15s ease",
                transformStyle: "preserve-3d",
                zIndex: 10,
                background: "oklch(0.55 0.22 265 / 0.07)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid oklch(0.55 0.22 265 / 0.15)",
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset",
              }}
            >
              {/* Inner image container */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  overflow: "hidden",
                  position: "relative",
                  background: "#0a0a0a",
                }}
              >
                {/* ── THE PROFILE PHOTO ── */}
                <img
                  src="/profile photo.jpeg"
                  alt="Anshu Giri"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    /* Show face + upper body — same as reference */
                    objectPosition: "center 15%",
                    display: "block",
                    transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />

                {/* Subtle dark gradient at bottom — reference has this */}
                <div
                  style={{
                    pointerEvents: "none",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "35%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Aurora inset ring on hover */}
                <div
                  style={{
                    pointerEvents: "none",
                    position: "absolute",
                    inset: 0,
                    borderRadius: 20,
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    boxShadow:
                      "inset 0 0 0 1.5px oklch(0.55 0.22 265 / 0.5)",
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const card = el.parentElement?.parentElement;
                    if (card) {
                      card.addEventListener("mouseenter", () => {
                        el.style.opacity = "1";
                      });
                      card.addEventListener("mouseleave", () => {
                        el.style.opacity = "0";
                      });
                    }
                  }}
                />
              </div>
            </div>

            {/* Aurora glow blob below — exactly like reference */}
            <div
              style={{
                position: "absolute",
                bottom: -20,
                left: "50%",
                transform: "translateX(-50%)",
                height: 48,
                width: "70%",
                borderRadius: "50%",
                background: "oklch(0.55 0.22 265 / 0.3)",
                filter: "blur(28px)",
                zIndex: 0,
              }}
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
