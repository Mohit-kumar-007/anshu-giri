import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";

const codeSnippet = [
  { text: "import", color: "oklch(0.55 0.22 300)", suffix: " pandas as pd" },
  { text: "from", color: "oklch(0.55 0.22 300)", suffix: " sklearn.ensemble import RandomForestClassifier" },
  { text: "from", color: "oklch(0.55 0.22 300)", suffix: " sklearn.metrics import accuracy_score" },
  { text: "", color: "", suffix: "" },
  { text: "# Load & preprocess customer data", color: "oklch(0.6 0.04 265 / 0.6)", suffix: "" },
  { text: "df", color: "oklch(0.55 0.22 265)", suffix: ' = pd.read_csv("customer_data.csv")' },
  { text: "", color: "", suffix: "" },
  { text: "# Train prediction model", color: "oklch(0.6 0.04 265 / 0.6)", suffix: "" },
  { text: "clf", color: "oklch(0.55 0.22 265)", suffix: " = RandomForestClassifier(n_estimators=200)" },
  { text: "clf", color: "oklch(0.55 0.22 265)", suffix: ".fit(X_train, y_train)" },
  { text: "", color: "", suffix: "" },
  { text: "# 87% accuracy achieved ✓", color: "oklch(0.6 0.04 265 / 0.6)", suffix: "" },
  { text: "score", color: "oklch(0.55 0.22 265)", suffix: " = accuracy_score(y_test, clf.predict(X_test))" },
  { text: "print", color: "oklch(0.5 0.18 160)", suffix: '(f"Accuracy: {score:.2%}")' },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" ref={ref} style={{ position: "relative", padding: "48px 0 64px" }} aria-label="About">
      <div style={{ margin: "0 auto", maxWidth: 1280, padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 672, marginBottom: 64 }}
        >
          <div className="section-label glass">
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-primary)", display: "inline-block" }} />
            About
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", marginTop: 16, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 600, letterSpacing: "-0.025em" }}>
            A builder at the intersection of data &amp; intelligence.
          </h2>
        </motion.div>

        {/* Content grid */}
        <div style={{ display: "grid", gap: 40, gridTemplateColumns: "1fr" }} className="lg:grid-cols-[1fr_1.2fr]">
          {/* Code block */}
          <motion.div
            className="glass-strong shadow-elegant"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              borderRadius: 24,
              padding: 4,
              overflow: "hidden",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="glass-strong"
              style={{ position: "relative", overflow: "hidden", borderRadius: 20, padding: 24, fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.8 }}
            >
              {/* Window chrome */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                {["oklch(0.7 0.2 27)", "oklch(0.85 0.16 80)", "oklch(0.78 0.16 160)"].map((c) => (
                  <span key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c, display: "inline-block" }} />
                ))}
                <span style={{ marginLeft: 8, fontSize: 11, color: "var(--color-muted-foreground)" }}>churn_model.py</span>
              </div>
              <pre style={{ margin: 0, overflowX: "auto", color: "var(--color-muted-foreground)" }}>
                {codeSnippet.map((line, i) => (
                  <div key={i}>
                    {line.text ? (
                      <>
                        <span style={{ color: line.color }}>{line.text}</span>
                        <span>{line.suffix}</span>
                      </>
                    ) : (
                      <span>{line.suffix || "\u00A0"}</span>
                    )}
                  </div>
                ))}
              </pre>
            </div>
            {/* Aurora hover ring */}
            <div className="ring-aurora" style={{ pointerEvents: "none", position: "absolute", inset: 0, borderRadius: 20, opacity: 0, transition: "opacity 0.5s" }} />
          </motion.div>

          {/* Bio & education timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <p style={{ fontSize: 17, color: "var(--color-muted-foreground)", lineHeight: 1.75, marginBottom: 40 }}>
              I design and ship intelligent data products — from end-to-end ML pipelines and BI dashboards to interactive analytics apps. My favorite zone is where{" "}
              <span style={{ color: "var(--color-foreground)", fontWeight: 500 }}>clean data storytelling</span> meets{" "}
              <span style={{ color: "var(--color-foreground)", fontWeight: 500 }}>real-world ML systems</span>.
            </p>

            {/* Education timeline */}
            <ol style={{ position: "relative", paddingLeft: 24, listStyle: "none" }}>
              {/* Animated timeline line */}
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

              {education.map((edu, i) => (
                <motion.li
                  key={edu.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                  style={{ position: "relative", paddingBottom: 32 }}
                >
                  {/* Icon */}
                  <span
                    className="gradient-aurora shadow-elegant"
                    style={{
                      position: "absolute",
                      left: -38,
                      top: 0,
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      color: "white",
                    }}
                  >
                    <GraduationCap size={14} aria-hidden="true" />
                  </span>

                  <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-primary)" }}>{edu.period}</span>
                    <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15 }}>{edu.degree}</h4>
                  </div>
                  <p style={{ marginTop: 4, fontSize: 13, color: "var(--color-muted-foreground)" }}>
                    {edu.institution} · {edu.location} · CGPA: <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>{edu.cgpa}</span>
                  </p>
                </motion.li>
              ))}

              {/* Extra milestones */}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                style={{ position: "relative", paddingBottom: 0 }}
              >
                <span className="gradient-aurora shadow-elegant" style={{ position: "absolute", left: -38, top: 0, width: 28, height: 28, borderRadius: "50%", display: "grid", placeItems: "center", color: "white" }}>
                  <GraduationCap size={14} aria-hidden="true" />
                </span>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-primary)" }}>2024</span>
                  <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15 }}>EXIN BCS AI Essentials Certification</h4>
                </div>
                <p style={{ marginTop: 4, fontSize: 13, color: "var(--color-muted-foreground)" }}>
                  Certified in AI Fundamentals, ML Concepts &amp; Data Ethics.
                </p>
              </motion.li>
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
