import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" ref={ref} style={{ position: "relative", padding: "48px 0 64px" }} aria-label="Experience">
      <div style={{ margin: "0 auto", maxWidth: 1280, padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 672, marginBottom: 56 }}
        >
          <div className="section-label glass">
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-primary)", display: "inline-block" }} />
            Experience
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", marginTop: 16, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 600, letterSpacing: "-0.025em" }}>
            Where I&apos;ve applied my skills in the real world.
          </h2>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: 40 }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "var(--color-border)" }} />
          <div style={{ position: "absolute", left: -0.5, top: 0, bottom: 0, width: 2, overflow: "hidden", pointerEvents: "none" }}>
            <div
              className="animate-timeline-shine"
              style={{
                position: "absolute",
                width: "100%",
                height: 112,
                background: "linear-gradient(to bottom, transparent, var(--color-primary), transparent)",
              }}
            />
          </div>

          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "relative", marginBottom: 32 }}
            >
              {/* Timeline dot */}
              <span
                className="gradient-aurora shadow-elegant"
                style={{ position: "absolute", left: -52, top: 4, width: 28, height: 28, borderRadius: "50%", display: "grid", placeItems: "center", color: "white" }}
              >
                <Briefcase size={14} aria-hidden="true" />
              </span>

              <motion.div
                className="glass-strong"
                style={{ borderRadius: 20, padding: 28, transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-glow)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em", marginBottom: 4 }}>{exp.role}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-primary)", fontFamily: "var(--font-display)" }}>{exp.company}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--color-muted-foreground)" }}>
                        <MapPin size={11} aria-hidden="true" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-muted-foreground)" }}>
                      <Calendar size={11} aria-hidden="true" /> {exp.period}
                    </span>
                    <span style={{ padding: "3px 10px", borderRadius: 9999, background: "oklch(0.7 0.18 160 / 0.1)", border: "1px solid oklch(0.7 0.18 160 / 0.2)", fontSize: 11, color: "oklch(0.7 0.18 160)", fontWeight: 500 }}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: 14, color: "var(--color-muted-foreground)", lineHeight: 1.7, marginBottom: 20 }}>{exp.description}</p>

                {/* Responsibilities */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: 8, marginBottom: 20 }} className="sm:grid-cols-2">
                  {exp.responsibilities.map((r) => (
                    <div key={r} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--color-muted-foreground)" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-primary)", flexShrink: 0 }} />
                      {r}
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {exp.tech.map((t) => (<span key={t} className="tech-tag">{t}</span>))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
