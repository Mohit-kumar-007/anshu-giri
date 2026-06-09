import { useState, useEffect, useRef } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      if (localStorage.theme === "light") return "light";
    }
    return "dark";
  });

  // Apply theme class to html element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      {/* Loader */}
      {loading && <Loader onDone={() => setLoading(false)} />}

      {!loading && (
        <main style={{ position: "relative", overflowX: "hidden" }}>
          {/* Background layers */}
          <div
            style={{
              pointerEvents: "none",
              position: "fixed",
              inset: 0,
              zIndex: -10,
              overflow: "hidden",
            }}
            aria-hidden="true"
          >
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />
            <div
              className="noise"
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.03,
                mixBlendMode: "multiply",
              }}
            />
          </div>

          {/* Scroll progress */}
          <ScrollProgress />

          {/* Navbar */}
          <Navbar theme={theme} onToggleTheme={toggleTheme} />

          {/* Sections */}
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer theme={theme} />

          {/* Back to top */}
          <BackToTop />
        </main>
      )}
    </>
  );
}
