import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Trophy } from "lucide-react";
import { certifications, achievements } from "../data/portfolio";

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="certifications"
      ref={ref}
      style={{ padding: "80px 0", position: "relative" }}
      aria-label="Certifications and Achievements"
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
            Credentials
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
            Certifications &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D9FF, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Achievements
            </span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 40,
          }}
          className="lg:grid-cols-2"
        >
          {/* Certifications */}
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 16,
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#94A3B8",
              }}
            >
              <Award size={16} color="#00D9FF" />
              Certifications
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="cert-card"
                  id={`cert-${cert.id}`}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      marginBottom: 16,
                    }}
                  >
                    {/* Badge icon */}
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background:
                          "linear-gradient(135deg, rgba(0,217,255,0.15), rgba(124,58,237,0.15))",
                        border: "1px solid rgba(0,217,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      {cert.badge}
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: 15,
                          letterSpacing: "-0.01em",
                          marginBottom: 4,
                        }}
                      >
                        {cert.title}
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 13,
                            color: "#00D9FF",
                            fontWeight: 600,
                          }}
                        >
                          {cert.issuer}
                        </span>
                        <span
                          style={{
                            padding: "2px 8px",
                            borderRadius: 9999,
                            background: "rgba(0,217,255,0.1)",
                            border: "1px solid rgba(0,217,255,0.2)",
                            fontSize: 11,
                            color: "#00D9FF",
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#94A3B8",
                        marginBottom: 10,
                      }}
                    >
                      Topics Covered
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {cert.topics.map((topic) => (
                        <span
                          key={topic}
                          style={{
                            padding: "3px 10px",
                            borderRadius: 9999,
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            fontSize: 11,
                            color: "#E2E8F0",
                          }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 16,
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#94A3B8",
              }}
            >
              <Trophy size={16} color="#F59E0B" />
              Achievements
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.3 + i * 0.15,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 20,
                    padding: 24,
                    display: "flex",
                    gap: 16,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(245,158,11,0.3)";
                    el.style.background = "rgba(245,158,11,0.04)";
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: "rgba(245,158,11,0.1)",
                      border: "1px solid rgba(245,158,11,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      flexShrink: 0,
                    }}
                  >
                    {ach.icon}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        letterSpacing: "-0.01em",
                        marginBottom: 6,
                      }}
                    >
                      {ach.title}
                    </h4>
                    <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.6 }}>
                      {ach.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
