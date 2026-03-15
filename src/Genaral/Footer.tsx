import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  ChevronRight,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  address,
  company_name,
  person_name,
  phone_number,
  website_url,
  whatsapp_number,
} from "./secrete";

// ─── Simple inView hook (self-contained, no external dependency) ──────────────
const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const [ref, inView] = useInView(0.15);

  return (
    <footer className="relative w-full overflow-hidden text-white bg-[#06060c]">
      {/* Top shimmer */}
      <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.6)_30%,rgba(245,226,122,0.9)_50%,rgba(212,175,55,0.6)_70%,transparent)]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient orbs */}
      <div
        className="absolute -top-24 -left-24 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.06), transparent 65%)",
        }}
      />
      <div
        className="absolute top-1/2 -right-20 w-[320px] h-[320px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.04), transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.04), transparent 70%)",
        }}
      />

      {/* Main grid */}
      <motion.div
        ref={ref}
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
      >
        {/* ── ABOUT ── */}
        <div className="flex flex-col gap-5">
          <ColEyebrow>About Us</ColEyebrow>

          <div>
            <h2
              className="text-white font-bold leading-none"
              style={{
                fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                fontSize: "1.35rem",
              }}
            >
              {company_name}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-px w-8 bg-[linear-gradient(90deg,#d4af37,transparent)]" />
              <div className="w-1 h-1 bg-[#d4af37]/50 rotate-45" />
            </div>
          </div>

          <p
            className="leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            <span className="text-white/80 font-medium">{company_name}</span>{" "}
            offers traditional Kerala wellness consultations rooted in years of
            experience and responsible practice.{" "}
            <span className="text-[#d4af37]/75 font-medium">{person_name}</span>{" "}
            provides thoughtful sessions focused on clarity, balance, and
            personal well-being across relationships, career, and life planning.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-2 mt-1">
            {["Trusted", "Confidential", "Respectful"].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(212,175,55,0.05)",
                  border: "1px solid rgba(212,175,55,0.12)",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "rgba(212,175,55,0.6)",
                }}
              >
                <span className="w-1 h-1 rounded-full bg-[#d4af37]/50" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── CONTACT ── */}
        <div className="flex flex-col gap-5">
          <ColEyebrow>Contact</ColEyebrow>

          <div>
            <h2
              className="text-white font-bold leading-none"
              style={{
                fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                fontSize: "1.35rem",
              }}
            >
              Get in Touch
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-px w-8 bg-[linear-gradient(90deg,#d4af37,transparent)]" />
              <div className="w-1 h-1 bg-[#d4af37]/50 rotate-45" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <ContactRow
              icon={
                <Phone
                  size={13}
                  strokeWidth={2}
                  className="text-[#d4af37]/70 mt-0.5 flex-shrink-0"
                />
              }
            >
              <a
                href={`tel:${phone_number}`}
                className="no-underline transition-colors duration-200 hover:text-[#d4af37]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.03em",
                }}
              >
                +91 {phone_number}
              </a>
            </ContactRow>

            <ContactRow
              icon={
                <MessageCircle
                  size={13}
                  strokeWidth={2}
                  className="text-[#d4af37]/70 mt-0.5 flex-shrink-0"
                />
              }
            >
              <a
                href={`https://wa.me/${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline transition-colors duration-200 hover:text-[#d4af37]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.03em",
                }}
              >
                +91 {whatsapp_number}
              </a>
            </ContactRow>

            <ContactRow
              icon={
                <MapPin
                  size={13}
                  strokeWidth={2}
                  className="text-[#d4af37]/70 mt-0.5 flex-shrink-0"
                />
              }
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                }}
              >
                <span className="text-white/70 font-medium">
                  {address.line1}
                </span>
                <br />
                {address.line2}, {address.District}
                <br />
                {address.state} – {address.pincode}, {address.country}
              </p>
            </ContactRow>
          </div>

          <motion.a
            href={`tel:${phone_number}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group w-fit inline-flex items-center gap-2.5 no-underline px-5 py-2.5 rounded-sm font-semibold tracking-[0.08em] uppercase text-[#06060c]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.72rem",
              background: "linear-gradient(135deg, #d4af37, #f5e27a)",
              boxShadow: "0 4px 20px rgba(212,175,55,0.35)",
            }}
          >
            <Phone size={12} strokeWidth={2.5} />
            Call Us Today
            <ArrowRight
              size={11}
              strokeWidth={2.5}
              className="opacity-60 group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </motion.a>
        </div>

        {/* ── POLICIES ── */}
        <div className="flex flex-col gap-5">
          <ColEyebrow>Legal</ColEyebrow>

          <div>
            <h2
              className="text-white font-bold leading-none"
              style={{
                fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                fontSize: "1.35rem",
              }}
            >
              Support &amp;
              <br />
              <span className="text-[#d4af37]">Policies</span>
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-px w-8 bg-[linear-gradient(90deg,#d4af37,transparent)]" />
              <div className="w-1 h-1 bg-[#d4af37]/50 rotate-45" />
            </div>
          </div>

          <ul className="flex flex-col gap-1 p-0 m-0 list-none">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Contact Us", href: "/contact" },
            ].map(({ label, href }) => (
              <PolicyLink key={label} label={label} href={href} />
            ))}
          </ul>
        </div>
      </motion.div>

      {/* ── Bottom bar ── */}
      <CopyBar />

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
      `}</style>
    </footer>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const ColEyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2.5">
    <div className="w-6 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
    <span
      className="text-[#d4af37]/55 tracking-[0.26em] uppercase"
      style={{ fontFamily: "monospace", fontSize: "0.58rem" }}
    >
      {children}
    </span>
  </div>
);

const ContactRow = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3">
    {icon}
    <div>{children}</div>
  </div>
);

const PolicyLink = ({ label, href }: { label: string; href: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <a
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg no-underline transition-all duration-200"
        style={{
          background: hovered ? "rgba(212,175,55,0.06)" : "transparent",
          border: hovered
            ? "1px solid rgba(212,175,55,0.15)"
            : "1px solid transparent",
        }}
      >
        <ChevronRight
          size={12}
          strokeWidth={2}
          style={{
            color: hovered ? "#d4af37" : "rgba(255,255,255,0.2)",
            transition: "color 0.2s ease, transform 0.2s ease",
            transform: hovered ? "translateX(2px)" : "translateX(0)",
          }}
        />
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.82rem",
            fontWeight: 400,
            color: hovered ? "rgba(212,175,55,0.85)" : "rgba(255,255,255,0.45)",
            transition: "color 0.2s ease",
            letterSpacing: "0.01em",
          }}
        >
          {label}
        </span>
      </a>
    </li>
  );
};

const CopyBar = () => (
  <div
    className="border-t"
    style={{
      borderColor: "rgba(255,255,255,0.05)",
      background: "rgba(0,0,0,0.35)",
    }}
  >
    <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
      {/* Dev credit */}
      <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-start">
        <span
          className="text-white/25"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem" }}
        >
          Designed &amp; Developed by
        </span>
        <a
          href="https://wa.me/918886921826?text=Hello%2C%20I%20found%20your%20contact%20via%20the%20website"
          aria-label="Contact Eswar on WhatsApp"
          className="no-underline"
        >
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold text-[#06060c] transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
              background: "linear-gradient(135deg, #d4af37, #f5e27a)",
              boxShadow: "0 2px 12px rgba(212,175,55,0.3)",
            }}
          >
            Eswar <ExternalLink size={9} strokeWidth={2.5} />
          </span>
        </a>
      </div>

      {/* Copyright */}
      <p
        className="text-center md:text-right"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.72rem",
          color: "rgba(255,255,255,0.25)",
        }}
      >
        © {new Date().getFullYear()}{" "}
        <a
          href={website_url}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline transition-colors duration-200 hover:text-[#d4af37]"
          style={{ color: "rgba(212,175,55,0.6)", fontWeight: 500 }}
        >
          {company_name}
        </a>{" "}
        · All Rights Reserved
      </p>
    </div>
  </div>
);
