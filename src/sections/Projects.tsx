import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { projects } from "../data/portfolio";

const projectEmojis: Record<string, string> = {
  "churn-prediction": "🧠",
  "sales-dashboard": "📊",
  "sentiment-analysis": "💬",
};

export default function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <section id="projects" ref={ref} style={{ position: "relative", padding: "48px 0 64px" }} aria-label="Projects">
        <div style={{ margin: "0 auto", maxWidth: 1280, padding: "0 24px" }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: 672, marginBottom: 56 }}
          >
            <div className="section-label glass">
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-primary)", display: "inline-block" }} />
              Selected work
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", marginTop: 16, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 600, letterSpacing: "-0.025em" }}>
              Projects, models and data products I&apos;ve built.
            </h2>
          </motion.div>

          {/* Grid */}
          <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr" }} className="sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className="glass-strong shadow-elegant"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "relative",
                  borderRadius: 24,
                  padding: 4,
                  cursor: "pointer",
                  transformStyle: "preserve-3d",
                  height: "100%",
                }}
                onClick={() => setSelected(project)}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                  const ring = el.querySelector<HTMLElement>(".proj-ring");
                  if (ring) ring.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  const ring = el.querySelector<HTMLElement>(".proj-ring");
                  if (ring) ring.style.opacity = "0";
                }}
                id={`project-card-${project.id}`}
              >
                <div
                  className="glass-strong"
                  style={{ position: "relative", overflow: "hidden", borderRadius: 20, display: "flex", flexDirection: "column", height: "100%" }}
                >
                  {/* Project image / placeholder */}
                  <div style={{ position: "relative", height: 176, width: "100%", overflow: "hidden", background: "var(--color-muted)" }}>
                    <div style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 64,
                      background: `linear-gradient(135deg, oklch(0.55 0.22 ${i * 30 + 230} / 0.15), oklch(0.55 0.22 ${i * 30 + 265} / 0.05))`,
                    }}>
                      {projectEmojis[project.id] ?? "📁"}
                    </div>
                    {/* Overlay gradients */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent, rgba(0,0,0,0.45))" }} />
                    {/* Category badge */}
                    <div className="glass" style={{ position: "absolute", left: 16, top: 16, borderRadius: 9999, padding: "4px 10px", fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "white", zIndex: 10 }}>
                      {project.category}
                    </div>
                    {/* Action buttons */}
                    <div style={{ position: "absolute", right: 16, top: 12, display: "flex", gap: 8, zIndex: 30 }} onClick={(e) => e.stopPropagation()}>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass" style={{ width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center", color: "white", textDecoration: "none", transition: "transform 0.2s" }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.1)")} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "")}>
                          <GithubIcon size={14} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live Demo" className="glass" style={{ width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center", color: "white", textDecoration: "none", transition: "transform 0.2s" }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.1)")} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "")}>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 6 }}>{project.title}</h3>
                      <p style={{ fontSize: 13, color: "var(--color-muted-foreground)", lineHeight: 1.6 }}>
                        {project.description.slice(0, 130)}...
                      </p>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
                      {project.tech.slice(0, 5).map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Aurora ring */}
                <div className="ring-aurora proj-ring" style={{ pointerEvents: "none", position: "absolute", inset: 0, borderRadius: 20, opacity: 0, transition: "opacity 0.5s" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 9000, background: "oklch(0 0 0 / 0.7)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="glass-strong"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: "100%", maxWidth: 600, maxHeight: "88vh", overflow: "auto", borderRadius: 24, padding: 32 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                <div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 8 }}>{selected.category}</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{selected.title}</h3>
                </div>
                <button onClick={() => setSelected(null)} className="glass" style={{ width: 36, height: 36, borderRadius: "50%", display: "grid", placeItems: "center", border: "none", cursor: "pointer", color: "var(--color-muted-foreground)", flexShrink: 0 }} id="modal-close-btn">
                  <X size={16} />
                </button>
              </div>
              <p style={{ fontSize: 14, color: "var(--color-muted-foreground)", lineHeight: 1.8, marginBottom: 24 }}>{selected.description}</p>
              <div style={{ marginBottom: 24 }}>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 600, marginBottom: 12, color: "var(--color-muted-foreground)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Key Highlights</h4>
                {selected.highlights.map((h) => (
                  <div key={h} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-primary)", flexShrink: 0 }} />
                    <span style={{ fontSize: 14 }}>{h}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                {selected.tech.map((t) => (
                  <span key={t} style={{ padding: "4px 12px", borderRadius: 9999, background: "oklch(0.55 0.22 265 / 0.1)", border: "1px solid oklch(0.55 0.22 265 / 0.2)", fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--color-primary)" }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {selected.github && (
                  <a href={selected.github} target="_blank" rel="noopener noreferrer" className="glass" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 9999, fontSize: 13, fontWeight: 500, color: "var(--color-foreground)", textDecoration: "none" }}>
                    <GithubIcon size={14} /> GitHub
                  </a>
                )}
                {selected.demo && (
                  <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="gradient-aurora" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 9999, fontSize: 13, fontWeight: 600, color: "white", textDecoration: "none" }}>
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
