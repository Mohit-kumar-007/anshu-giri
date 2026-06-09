import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";
import { education } from "../data/portfolio";

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="education"
      ref={ref}
      style={{ padding: "80px 0", position: "relative" }}
      aria-label="Education Section"
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div className="section-label" style={{ marginBottom: 16 }}>
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "#00D9FF",
                display: "inline-block",
              }}
            />
            Education
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D9FF, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              academic journey
            </span>
          </h2>
        </motion.div>

        {/* Education cards */}
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.2 + i * 0.15,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 24,
              padding: 32,
              marginBottom: 20,
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(0,217,255,0.2)";
              el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,217,255,0.1) inset";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.08)";
              el.style.boxShadow = "none";
            }}
          >
            {/* Background accent */}
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,217,255,0.05), transparent 70%)",
                pointerEvents: "none",
              }}
              aria-hidden="true"
            />

            {/* Header row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 20,
                marginBottom: 24,
                flexWrap: "wrap",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: "linear-gradient(135deg, rgba(0,217,255,0.15), rgba(124,58,237,0.15))",
                  border: "1px solid rgba(0,217,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <GraduationCap size={24} color="#00D9FF" />
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    letterSpacing: "-0.02em",
                    marginBottom: 4,
                  }}
                >
                  {edu.degree}
                </h3>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#00D9FF",
                    marginBottom: 8,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {edu.institution}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: 13,
                      color: "#94A3B8",
                    }}
                  >
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: 13,
                      color: "#94A3B8",
                    }}
                  >
                    <MapPin size={12} />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* CGPA badge */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  padding: "12px 20px",
                  background: "rgba(0,217,255,0.08)",
                  border: "1px solid rgba(0,217,255,0.2)",
                  borderRadius: 16,
                  textAlign: "center",
                  flexShrink: 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Star size={12} color="#00D9FF" fill="#00D9FF" />
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: 22,
                      color: "#00D9FF",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {edu.cgpa}
                  </span>
                </div>
                <span style={{ fontSize: 10, color: "#94A3B8" }}>CGPA</span>
              </div>
            </div>

            {/* Coursework & Activities */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 24,
              }}
              className="md:grid-cols-2"
            >
              {/* Coursework */}
              <div>
                <h4
                  style={{
                    fontSize: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#94A3B8",
                    marginBottom: 12,
                  }}
                >
                  Relevant Coursework
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      style={{
                        padding: "5px 12px",
                        borderRadius: 9999,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        fontSize: 12,
                        color: "#E2E8F0",
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div>
                <h4
                  style={{
                    fontSize: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#94A3B8",
                    marginBottom: 12,
                  }}
                >
                  Activities
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {edu.activities.map((activity) => (
                    <div
                      key={activity}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 13,
                        color: "#94A3B8",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #00D9FF, #7C3AED)",
                          flexShrink: 0,
                        }}
                      />
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
