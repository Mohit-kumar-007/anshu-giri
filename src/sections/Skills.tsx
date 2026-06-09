import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/portfolio";

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" ref={ref} style={{ position: "relative", padding: "48px 0 64px" }} aria-label="Skills">
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
            Stack
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", marginTop: 16, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 600, letterSpacing: "-0.025em" }}>
            Tools I use to build intelligent data products.
          </h2>
        </motion.div>

        {/* Skills grid — matches reference 5-col layout */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}
          className="sm:grid-cols-3 lg:grid-cols-5"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="glass-strong"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                borderRadius: 16,
                padding: 4,
                cursor: "default",
                transformStyle: "preserve-3d",
                willChange: "transform, opacity",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                const ring = el.querySelector<HTMLElement>(".ring-hover");
                if (ring) ring.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "";
                const ring = el.querySelector<HTMLElement>(".ring-hover");
                if (ring) ring.style.opacity = "0";
              }}
            >
              <div
                className="glass-strong"
                style={{ position: "relative", overflow: "hidden", borderRadius: 12, padding: 16 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-muted-foreground)" }}>
                    {skill.category.split(" ")[0]}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-primary)" }}>
                    {skill.level}%
                  </span>
                </div>
                <div style={{ marginTop: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, letterSpacing: "-0.01em" }}>
                  {skill.name}
                </div>
                {/* Progress bar */}
                <div style={{ marginTop: 12, height: 4, width: "100%", overflow: "hidden", borderRadius: 9999, background: "oklch(0.55 0.22 265 / 0.1)" }}>
                  <div
                    className="gradient-aurora"
                    style={{
                      height: "100%",
                      width: `${skill.level}%`,
                      transformOrigin: "left",
                      transform: inView ? "scaleX(1)" : "scaleX(0)",
                      transition: `transform 0.8s cubic-bezier(0.4,0,0.2,1) ${i * 0.04}s`,
                      willChange: "transform",
                    }}
                  />
                </div>
              </div>
              {/* Aurora ring */}
              <div className="ring-aurora ring-hover" style={{ pointerEvents: "none", position: "absolute", inset: 0, borderRadius: 12, opacity: 0, transition: "opacity 0.3s" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
