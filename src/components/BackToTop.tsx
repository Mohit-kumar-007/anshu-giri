import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="glass"
      style={{
        position: "fixed",
        bottom: 32,
        right: 24,
        zIndex: 50,
        width: 40,
        height: 40,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        color: "var(--color-primary)",
        border: "none",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        boxShadow: "var(--shadow-elegant)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.1) translateY(-2px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-glow)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-elegant)";
      }}
      aria-label="Back to top"
      id="back-to-top-btn"
    >
      <ChevronUp size={18} />
    </button>
  );
}
