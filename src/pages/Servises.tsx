import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { phone_number, whatsapp_number } from "../Genaral/secrete";
import { motion } from "framer-motion";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    name: "Relationship Support",
    desc: "Consultation for understanding, rebuilding trust, and strengthening personal relationships.",
    img: "https://i.pinimg.com/1200x/3f/f5/89/3ff5895bca8970847577656ffe788eff.jpg",
    tag: "Healing",
    index: "01",
  },
  {
    name: "Marriage Consultation",
    desc: "Guidance for a balanced married life, compatibility understanding, and conflict resolution.",
    img: "https://i.pinimg.com/736x/fa/ee/46/faee46287149c9a2470c20d26318fee1.jpg",
    tag: "Marriage",
    index: "02",
  },
  {
    name: "Legal Matter Support",
    desc: "Traditional insights to support clarity and peace of mind during legal challenges.",
    img: "https://i.pinimg.com/1200x/fb/4e/36/fb4e36b171a92fb4d391f3bc6a90e8a5.jpg",
    tag: "Legal",
    index: "03",
  },
  {
    name: "Financial Well-being",
    desc: "Holistic consultation for wealth planning, investment direction, and financial stability.",
    img: "https://i.pinimg.com/736x/53/3a/25/533a25d0fd940cc5fc8b5fdaf457b14a.jpg",
    tag: "Finance",
    index: "04",
  },
  {
    name: "Education Guidance",
    desc: "Traditional consultation support for students seeking focus, confidence, and academic progress.",
    img: "https://i.pinimg.com/736x/7f/8a/60/7f8a6099a523cc79342eaee0a29e92f8.jpg",
    tag: "Learning",
    index: "05",
  },
  {
    name: "Career Growth",
    desc: "Clarity for job opportunities, professional direction, and career advancement.",
    img: "https://i.pinimg.com/736x/2d/21/ff/2d21ff0997bd7bdfb46491c3d13798c3.jpg",
    tag: "Career",
    index: "06",
  },
  {
    name: "Life Path Consultation",
    desc: "In-depth horoscope reading to understand personal strengths and plan life decisions confidently.",
    img: "https://i.pinimg.com/1200x/40/6d/94/406d941b9978384bd9008b1f81c613a3.jpg",
    tag: "Life Path",
    index: "07",
  },
];

// ─── Motion variants ──────────────────────────────────────────────────────────

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// ─── Services ─────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <div className="relative bg-[#06060c] min-h-screen py-24 md:py-32 px-5 md:px-10 overflow-hidden">
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
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.07), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[380px] h-[380px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.04), transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[320px] h-[320px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.04), transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* ── Header ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mb-14 md:mb-18"
        >
          {/* Eyebrow */}
          <motion.div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
            <span
              className="text-[#d4af37]/60 tracking-[0.28em] uppercase"
              style={{ fontFamily: "monospace", fontSize: "0.6rem" }}
            >
              What We Offer
            </span>
          </motion.div>

          {/* Heading + count row */}
          <motion.div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1
                className="text-white font-bold leading-none"
                style={{
                  fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                }}
              >
                Our Consultation
              </h1>
              <h1
                className="text-[#d4af37] font-bold leading-none mt-1"
                style={{
                  fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                }}
              >
                Services
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div
                className="h-px flex-1 md:w-24"
                style={{
                  background:
                    "linear-gradient(90deg,transparent,rgba(212,175,55,0.3))",
                }}
              />
              <span
                className="text-white/15 font-light leading-none"
                style={{ fontFamily: "'Cinzel', serif", fontSize: "2.5rem" }}
              >
                {String(SERVICES.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>

          {/* Rule + subtitle */}
          <motion.div className="flex items-center gap-3 mt-5 mb-4">
            <div className="h-px w-10 bg-[linear-gradient(90deg,#d4af37,transparent)]" />
            <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
            <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
          </motion.div>

          <motion.p
            className="max-w-lg leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Explore services designed to guide you with{" "}
            <span className="text-[#d4af37]/75 font-medium">wisdom</span>,{" "}
            <span className="text-[#d4af37]/60 font-medium">peace</span>, and{" "}
            <span className="text-[#d4af37]/50 font-medium">clarity</span>{" "}
            across life's most important decisions.
          </motion.p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>

        {/* ── Bottom trust strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mt-14"
        >
          <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
          <p
            className="text-[#d4af37]/35 tracking-[0.2em] uppercase"
            style={{ fontFamily: "monospace", fontSize: "0.58rem" }}
          >
            Trusted Guidance &nbsp;·&nbsp; Calm Insights &nbsp;·&nbsp; Personal
            Clarity
          </p>
          <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
        </motion.div>
      </div>

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

const ServiceCard = ({
  service,
  idx,
}: {
  service: (typeof SERVICES)[number];
  idx: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: (idx % 3) * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col overflow-hidden rounded-xl"
      style={{
        background: "linear-gradient(160deg, #0f0f1a 0%, #0a0a12 100%)",
        border: hovered
          ? "1px solid rgba(212,175,55,0.22)"
          : "1px solid rgba(255,255,255,0.05)",
        transition: "border-color 0.3s ease",
      }}
    >
      {/* ── Image ── */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <img
          src={service.img}
          alt={service.name}
          className="w-full h-full object-cover will-change-transform transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
        />

        {/* Overlays */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{ background: "#06060c", opacity: hovered ? 0.1 : 0.28 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0a0a12_0%,transparent_55%)]" />

        {/* Tag pill */}
        <div className="absolute top-3 left-3">
          <span
            className="inline-block px-2.5 py-1 rounded-full text-[0.58rem] tracking-[0.15em] uppercase font-semibold"
            style={{
              fontFamily: "monospace",
              background: "rgba(6,6,12,0.75)",
              border: "1px solid rgba(212,175,55,0.22)",
              color: "rgba(212,175,55,0.8)",
              backdropFilter: "blur(8px)",
            }}
          >
            {service.tag}
          </span>
        </div>

        {/* Index */}
        <div
          className="absolute top-3 right-3 leading-none transition-colors duration-300"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: hovered ? "rgba(212,175,55,0.35)" : "rgba(255,255,255,0.12)",
          }}
        >
          {service.index}
        </div>

        {/* Name badge over image bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
          <h3
            className="leading-tight transition-colors duration-300"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              color: hovered ? "#f5e27a" : "rgba(255,255,255,0.92)",
              textShadow: "0 2px 12px rgba(0,0,0,0.8)",
            }}
          >
            {service.name}
          </h3>
          {/* Animated underline */}
          <div
            className="h-px mt-1.5 transition-all duration-400"
            style={{
              background: "linear-gradient(90deg, #d4af37, transparent)",
              width: hovered ? "48px" : "24px",
            }}
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5">
        <p
          className="leading-relaxed flex-1 mb-5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.42)",
          }}
        >
          {service.desc}
        </p>

        {/* Dual CTA row */}
        <div className="flex gap-2.5">
          {/* Call */}
          <a
            href={`tel:${phone_number}`}
            className="flex-1 flex items-center justify-center gap-1.5 no-underline px-3 py-2.5 rounded-lg transition-all duration-300"
            style={{
              background: hovered
                ? "rgba(212,175,55,0.14)"
                : "rgba(212,175,55,0.07)",
              border: hovered
                ? "1px solid rgba(212,175,55,0.32)"
                : "1px solid rgba(212,175,55,0.12)",
            }}
          >
            <Phone size={12} strokeWidth={2.5} style={{ color: "#d4af37" }} />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#d4af37",
              }}
            >
              Call
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp about ${service.name}`}
            className="flex-1 flex items-center justify-center gap-1.5 no-underline px-3 py-2.5 rounded-lg transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: hovered
                ? "1px solid rgba(255,255,255,0.12)"
                : "1px solid rgba(255,255,255,0.06)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(212,175,55,0.06)";
              el.style.borderColor = "rgba(212,175,55,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(255,255,255,0.03)";
              el.style.borderColor = hovered
                ? "rgba(255,255,255,0.12)"
                : "rgba(255,255,255,0.06)";
            }}
          >
            <MessageCircle
              size={12}
              strokeWidth={2}
              style={{ color: "rgba(255,255,255,0.5)" }}
            />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Message
            </span>
            <ArrowUpRight
              size={10}
              strokeWidth={2}
              style={{ color: "rgba(255,255,255,0.25)" }}
            />
          </a>
        </div>
      </div>

      {/* Inner glow */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.12)",
          opacity: hovered ? 1 : 0,
        }}
      />
    </motion.div>
  );
};
