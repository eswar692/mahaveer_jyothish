import {
  phone_number,
  whatsapp_number,
  person_name,
  company_name,
} from "../Genaral/secrete";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Star,
  Award,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { icon: Star, value: "20+", label: "Years of Experience", index: "01" },
  { icon: Users, value: "5K+", label: "Clients Helped", index: "02" },
  { icon: Award, value: "Kerala", label: "Trusted Practice", index: "03" },
  { icon: BookOpen, value: "10+", label: "Services Offered", index: "04" },
];

const PARAGRAPHS = (pName: string) => [
  <>
    <span className="font-semibold text-[#d4af37]">{pName}</span> is a trusted
    and respected traditional Kerala practitioner with decades of experience.
    With deep knowledge of ancient Kerala practices and a genuine commitment to
    helping others, he has established himself as a reliable consultant to
    individuals and families across India.
  </>,
  <>
    Through his extensive experience and thoughtful approach,{" "}
    <span className="font-medium text-white/80">{pName}</span> offers a wide
    range of services including horoscope reading, Vastu consultation,
    palmistry, and phone consultations — spanning traditional Kerala practices,
    holistic well-being, and personal development.
  </>,
  <>
    Known for his{" "}
    <span className="font-semibold text-[#d4af37]/80">clarity</span> and
    thoughtful insights,{" "}
    <span className="font-medium text-white/80">{pName}</span> has built a loyal
    following of clients who value the positive direction and confidence his
    consultations bring to their lives.
  </>,
  <>
    If you are looking for a trusted and experienced consultant, we warmly
    welcome you to get in touch for a personalized session.
  </>,
];

// ─── Motion variants ──────────────────────────────────────────────────────────

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// ─── About ────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section className="relative min-h-screen py-24 md:py-32 px-5 md:px-10 bg-[#06060c] overflow-hidden">
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
        className="absolute bottom-0 left-0 w-[380px] h-[380px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.04), transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.04), transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[960px] mx-auto">
        {/* ── Header ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mb-14 md:mb-16"
        >
          {/* Eyebrow */}
          <motion.div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
            <span
              className="text-[#d4af37]/60 tracking-[0.28em] uppercase"
              style={{ fontFamily: "monospace", fontSize: "0.6rem" }}
            >
              Our Story
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div>
            <h1
              className="text-white font-bold leading-none"
              style={{
                fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              }}
            >
              About
            </h1>
            <h1
              className="text-[#d4af37] font-bold leading-none mt-1"
              style={{
                fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              }}
            >
              {company_name}
            </h1>
          </motion.div>

          {/* Rule */}
          <motion.div className="flex items-center gap-3 mt-5">
            <div className="h-px w-10 bg-[linear-gradient(90deg,#d4af37,transparent)]" />
            <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
            <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
          </motion.div>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {STATS.map(({ icon: Icon, value, label, index }) => (
            <StatCard
              key={label}
              Icon={Icon}
              value={value}
              label={label}
              index={index}
            />
          ))}
        </motion.div>

        {/* ── Content card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-xl overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #0f0f1a 0%, #0a0a12 100%)",
            border: "1px solid rgba(212,175,55,0.12)",
          }}
        >
          {/* Card top shimmer */}
          <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.5)_40%,rgba(245,226,122,0.7)_50%,rgba(212,175,55,0.5)_60%,transparent)]" />

          {/* Corner accents */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#d4af37]/25 pointer-events-none" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#d4af37]/25 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#d4af37]/25 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#d4af37]/25 pointer-events-none" />

          <div className="p-8 md:p-12">
            {/* Prose paragraphs */}
            <div className="space-y-6">
              {PARAGRAPHS(person_name).map((para, i) => (
                <div key={i}>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "clamp(0.88rem, 1.2vw, 0.98rem)",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {para}
                  </p>
                  {i < PARAGRAPHS(person_name).length - 1 && (
                    <div className="flex items-center gap-2 mt-5">
                      <div className="h-px w-8 bg-[linear-gradient(90deg,rgba(212,175,55,0.4),transparent)]" />
                      <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom divider */}
            <div className="h-px my-10 bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.2)_50%,transparent)]" />

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Horoscope Reading",
                "Vastu Consultation",
                "Palmistry",
                "Phone Consultation",
                "Well-being Guidance",
              ].map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(212,175,55,0.05)",
                    border: "1px solid rgba(212,175,55,0.12)",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: "rgba(212,175,55,0.65)",
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-[#d4af37]/45" />
                  {s}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <motion.a
                href={`tel:${phone_number}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 no-underline px-7 py-3.5 rounded-sm font-semibold tracking-[0.07em] uppercase text-[#06060c]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.8rem",
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #f5e27a 50%, #d4af37 100%)",
                  backgroundSize: "200% 100%",
                  boxShadow: "0 4px 24px rgba(212,175,55,0.4)",
                }}
              >
                <Phone size={14} strokeWidth={2.5} />
                Call Now
                <ArrowRight
                  size={12}
                  strokeWidth={2.5}
                  className="opacity-60 group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </motion.a>

              <motion.a
                href={`https://wa.me/${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 no-underline px-7 py-3.5 rounded-sm font-semibold tracking-[0.07em] uppercase transition-all duration-300"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.75)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(212,175,55,0.08)";
                  el.style.borderColor = "rgba(212,175,55,0.3)";
                  el.style.color = "rgba(255,255,255,0.9)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.borderColor = "rgba(255,255,255,0.1)";
                  el.style.color = "rgba(255,255,255,0.75)";
                }}
              >
                <MessageCircle size={14} strokeWidth={2} />
                Chat on WhatsApp
                <ArrowRight
                  size={12}
                  strokeWidth={2.5}
                  className="opacity-40 group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </motion.a>
            </div>

            {/* Trust line */}
            <div className="flex items-center justify-center gap-3 mt-7">
              <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
              <p
                className="text-[#d4af37]/35 tracking-[0.2em] uppercase"
                style={{ fontFamily: "monospace", fontSize: "0.58rem" }}
              >
                Trusted Guidance &nbsp;·&nbsp; Calm Insights &nbsp;·&nbsp;
                Personal Clarity
              </p>
              <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
            </div>
          </div>

          {/* Card bottom shimmer */}
          <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.2)_50%,transparent)]" />
        </motion.div>
      </div>

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

const StatCard = ({
  Icon,
  value,
  label,
  index,
}: {
  Icon: React.ElementType;
  value: string;
  label: string;
  index: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col items-center gap-3 p-5 rounded-xl cursor-default transition-all duration-300"
      style={{
        background: hovered
          ? "linear-gradient(160deg, #0f0f1a, #0a0a12)"
          : "rgba(255,255,255,0.02)",
        border: hovered
          ? "1px solid rgba(212,175,55,0.22)"
          : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Index */}
      <span
        className="absolute top-2.5 right-3 leading-none transition-colors duration-300"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "0.62rem",
          fontWeight: 700,
          color: hovered ? "rgba(212,175,55,0.35)" : "rgba(255,255,255,0.1)",
        }}
      >
        {index}
      </span>

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
        style={{
          background: hovered
            ? "rgba(212,175,55,0.12)"
            : "rgba(212,175,55,0.05)",
          border: hovered
            ? "1px solid rgba(212,175,55,0.3)"
            : "1px solid rgba(212,175,55,0.1)",
        }}
      >
        <Icon
          size={17}
          style={{
            color: hovered ? "#d4af37" : "rgba(212,175,55,0.5)",
            transition: "color 0.3s ease",
          }}
          strokeWidth={1.75}
        />
      </div>

      {/* Value */}
      <span
        className="leading-none transition-colors duration-300"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "1.6rem",
          fontWeight: 700,
          color: hovered ? "#d4af37" : "rgba(255,255,255,0.85)",
        }}
      >
        {value}
      </span>

      {/* Label */}
      <span
        className="text-center leading-tight"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.68rem",
          fontWeight: 300,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.03em",
        }}
      >
        {label}
      </span>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300"
        style={{
          background:
            "linear-gradient(90deg, transparent, #d4af37, transparent)",
          width: hovered ? "60%" : "0%",
        }}
      />
    </motion.div>
  );
};
