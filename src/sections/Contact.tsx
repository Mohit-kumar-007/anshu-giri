import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Loader2, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolio";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(4, "Subject required"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});
type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    setSending(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  const contactLinks = [
    { icon: <Mail size={18} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "oklch(0.55 0.22 265)" },
    { icon: <LinkedinIcon size={18} />, label: "LinkedIn", value: "linkedin.com/in/anshu-giri", href: personalInfo.linkedin, color: "oklch(0.55 0.22 265)" },
    { icon: <GithubIcon size={18} />, label: "GitHub", value: "github.com/anshu-giri", href: personalInfo.github, color: "oklch(0.55 0.22 265)" },
  ];

  return (
    <section id="contact" ref={ref} style={{ position: "relative", padding: "48px 0 64px" }} aria-label="Contact">
      <div style={{ margin: "0 auto", maxWidth: 1280, padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 672, marginBottom: 56 }}
        >
          <div className="section-label glass">
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-primary)", display: "inline-block" }} />
            Get In Touch
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", marginTop: 16, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 600, letterSpacing: "-0.025em" }}>
            Let&apos;s build something great together.
          </h2>
        </motion.div>

        <div style={{ display: "grid", gap: 40, maxWidth: 1000, gridTemplateColumns: "1fr" }} className="lg:grid-cols-[1fr_1.6fr]">
          {/* Left: links */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-strong"
                style={{ display: "flex", alignItems: "center", gap: 16, padding: 20, borderRadius: 16, textDecoration: "none", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateX(4px)"; el.style.boxShadow = "var(--shadow-glow)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = ""; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "oklch(0.55 0.22 265 / 0.1)", border: "1px solid oklch(0.55 0.22 265 / 0.2)", display: "grid", placeItems: "center", color: "var(--color-primary)", flexShrink: 0 }}>
                  {link.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.05em", color: "var(--color-muted-foreground)", marginBottom: 2 }}>{link.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "var(--color-foreground)", wordBreak: "break-all" }}>{link.value}</div>
                </div>
              </a>
            ))}
            <div className="glass-strong" style={{ marginTop: 8, padding: "12px 16px", borderRadius: 12, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 13 }}>⚡</span>
              <span style={{ fontSize: 13, color: "var(--color-muted-foreground)" }}>
                Usually responds within <span style={{ color: "oklch(0.7 0.18 160)", fontWeight: 600 }}>24 hours</span>
              </span>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="glass-strong"
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ borderRadius: 24, padding: 32 }}
          >
            {submitted ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 300, textAlign: "center", gap: 16 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "oklch(0.7 0.18 160 / 0.1)", border: "2px solid oklch(0.7 0.18 160 / 0.3)", display: "grid", placeItems: "center" }}>
                  <CheckCircle2 size={28} color="oklch(0.7 0.18 160)" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Message Sent! 🎉</h3>
                  <p style={{ fontSize: 14, color: "var(--color-muted-foreground)" }}>Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 20 }} noValidate>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label htmlFor="c-name" style={{ fontSize: 12, color: "var(--color-muted-foreground)", display: "block", marginBottom: 6 }}>Full Name</label>
                    <input id="c-name" {...register("name")} placeholder="John Doe" className="form-input" />
                    {errors.name && <p style={{ fontSize: 11, color: "oklch(0.65 0.22 25)", marginTop: 4 }}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-email" style={{ fontSize: 12, color: "var(--color-muted-foreground)", display: "block", marginBottom: 6 }}>Email</label>
                    <input id="c-email" type="email" {...register("email")} placeholder="you@email.com" className="form-input" />
                    {errors.email && <p style={{ fontSize: 11, color: "oklch(0.65 0.22 25)", marginTop: 4 }}>{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="c-subject" style={{ fontSize: 12, color: "var(--color-muted-foreground)", display: "block", marginBottom: 6 }}>Subject</label>
                  <input id="c-subject" {...register("subject")} placeholder="Collaboration, internship, project..." className="form-input" />
                  {errors.subject && <p style={{ fontSize: 11, color: "oklch(0.65 0.22 25)", marginTop: 4 }}>{errors.subject.message}</p>}
                </div>
                <div>
                  <label htmlFor="c-message" style={{ fontSize: 12, color: "var(--color-muted-foreground)", display: "block", marginBottom: 6 }}>Message</label>
                  <textarea id="c-message" {...register("message")} placeholder="Tell me about your project or opportunity..." rows={5} className="form-input" />
                  {errors.message && <p style={{ fontSize: 11, color: "oklch(0.65 0.22 25)", marginTop: 4 }}>{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  id="contact-submit-btn"
                  className="gradient-aurora shadow-elegant"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 24px", borderRadius: 9999, color: "white", fontWeight: 600, fontSize: 14, border: "none", cursor: sending ? "not-allowed" : "pointer", opacity: sending ? 0.7 : 1, transition: "transform 0.2s, box-shadow 0.2s", alignSelf: "flex-start" }}
                  onMouseEnter={(e) => { if (!sending) { (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-glow)"; } }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                >
                  {sending ? <><Loader2 size={15} style={{ animation: "spin 1s linear infinite" }} /> Sending...</> : <><Send size={15} /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
