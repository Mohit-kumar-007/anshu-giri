import { useEffect, useState } from "react";

interface LoaderProps {
  onDone: () => void;
}

export default function Loader({ onDone }: LoaderProps) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 2400);
    const t2 = setTimeout(() => onDone(), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-background)",
        transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
        opacity: hiding ? 0 : 1,
        transform: hiding ? "scale(0.98)" : "scale(1)",
        pointerEvents: hiding ? "none" : "all",
      }}
    >
      {/* Grid bg */}
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} aria-hidden="true" />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, transparent 20%, var(--color-background) 80%)", pointerEvents: "none" }} aria-hidden="true" />

      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
        {/* Pencil SVG — exact copy from reference */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="200px"
          width="200px"
          viewBox="0 0 200 200"
          className="pencil"
          style={{ color: "var(--color-primary)" }}
        >
          <defs>
            <clipPath id="pencil-eraser">
              <rect height="30" width="30" ry="5" rx="5" />
            </clipPath>
          </defs>
          <circle
            transform="rotate(-113,100,100)"
            strokeLinecap="round"
            strokeDashoffset="439.82"
            strokeDasharray="439.82 439.82"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            r="70"
            className="pencil__stroke"
          />
          <g transform="translate(100,100)" className="pencil__rotate">
            <g fill="none">
              <circle transform="rotate(-90)" strokeDashoffset="402" strokeDasharray="402.12 402.12" strokeWidth="30" stroke="hsl(223,90%,50%)" r="64" className="pencil__body1" />
              <circle transform="rotate(-90)" strokeDashoffset="465" strokeDasharray="464.96 464.96" strokeWidth="10" stroke="hsl(223,90%,60%)" r="74" className="pencil__body2" />
              <circle transform="rotate(-90)" strokeDashoffset="339" strokeDasharray="339.29 339.29" strokeWidth="10" stroke="hsl(223,90%,40%)" r="54" className="pencil__body3" />
            </g>
            <g transform="rotate(-90) translate(49,0)" className="pencil__eraser">
              <g className="pencil__eraser-skew">
                <rect height="30" width="30" ry="5" rx="5" fill="hsl(223,90%,70%)" />
                <rect clipPath="url(#pencil-eraser)" height="30" width="5" fill="hsl(223,90%,60%)" />
                <rect height="20" width="30" fill="hsl(223,10%,90%)" />
                <rect height="20" width="15" fill="hsl(223,10%,70%)" />
                <rect height="20" width="5" fill="hsl(223,10%,80%)" />
                <rect height="2" width="30" y="6" fill="hsla(223,10%,10%,0.2)" />
                <rect height="2" width="30" y="13" fill="hsla(223,10%,10%,0.2)" />
              </g>
            </g>
            <g transform="rotate(-90) translate(49,-30)" className="pencil__point">
              <polygon points="15 0,30 30,0 30" fill="hsl(33,90%,70%)" />
              <polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)" />
              <polygon points="15 0,20 10,10 10" fill="hsl(223,10%,10%)" />
            </g>
          </g>
        </svg>

        <div style={{ marginTop: 32, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-foreground)" }}>
            Anshu Giri
          </h2>
          <p className="animate-pulse" style={{ fontSize: 13, fontWeight: 500, color: "var(--color-muted-foreground)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Data Scientist &amp; AI Enthusiast
          </p>
        </div>
      </div>
    </div>
  );
}
