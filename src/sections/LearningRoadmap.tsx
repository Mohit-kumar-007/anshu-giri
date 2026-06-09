import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, Clock, CheckCircle2 } from "lucide-react";
import { learningRoadmap } from "../data/portfolio";

const statusConfig = {
  "in-progress": {
    label: "In Progress",
    color: "#00D9FF",
    rgb: "0,217,255",
    icon: <Clock size={13} color="#00D9FF" />,
  },
  active: {
    label: "Active",
    color: "#14F195",
    rgb: "20,241,149",
    icon: <Rocket size={13} color="#14F195" />,
  },
  planned: {
    label: "Planned",
    color: "#94A3B8",
    rgb: "148,163,184",
    icon: <CheckCircle2 size={13} color="#94A3B8" />,
  },
};

export default function LearningRoadmap() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="learning"
      ref={ref}
      style={{ padding: "80px 0", position: "relative" }}
      aria-label="Learning Roadmap"
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
            Currently Learning
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: 540,
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
              learning roadmap
            </span>{" "}
            2026
          </h2>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{
            display: "flex",
            gap: 20,
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          {Object.entries(statusConfig).map(([key, { label, color, icon }]) => (
            <div
              key={key}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                color: "#94A3B8",
              }}
            >
              {icon}
              <span style={{ color }}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Roadmap cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: 16,
          }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {learningRoadmap.map((item, i) => {
            const status = statusConfig[item.status as keyof typeof statusConfig];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.1 * i + 0.2,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="roadmap-card"
                data-status={item.status}
                id={`roadmap-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                style={{
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = `0 20px 40px rgba(${status.rgb},0.1)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Top row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "3px 8px",
                      borderRadius: 9999,
                      background: `rgba(${status.rgb},0.1)`,
                      border: `1px solid rgba(${status.rgb},0.2)`,
                      fontSize: 10,
                      color: status.color,
                      fontWeight: 600,
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {status.icon}
                    {status.label}
                  </span>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: 13,
                    color: "#94A3B8",
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  {item.description}
                </p>

                {/* Progress */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        color: "#94A3B8",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      Progress
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        color: status.color,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 600,
                      }}
                    >
                      {item.progress}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 4,
                      background: `rgba(${status.rgb},0.1)`,
                      borderRadius: 9999,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: inView ? `${item.progress}%` : "0%",
                        background: `linear-gradient(90deg, ${status.color}, ${status.color}99)`,
                        borderRadius: 9999,
                        transition: `width 1s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
