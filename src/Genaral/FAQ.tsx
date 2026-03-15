import { useState } from "react";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { person_name, phone_number } from "./secrete";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: `Can We Meet ${person_name} in Person?`,
    answer: `Yes, in-person sessions are available with prior appointment. Reach out via WhatsApp or call to schedule your visit at +91 ${phone_number}.`,
    tag: "Visits",
  },
  {
    question: "Is Phone Consultation Available?",
    answer: `Yes, you can connect via phone from anywhere in India. Our lines are open for consultations at +91 ${phone_number}.`,
    tag: "Remote",
  },
  {
    question: "What Kind of Consultation Services Are Available?",
    answer:
      "We provide Vastu, horoscope reading, career planning, marriage support, health well-being, and business direction consultations — each tailored to your personal situation.",
    tag: "Services",
  },
  {
    question: "What Kind of Products Are Available?",
    answer:
      "Traditional Kerala wellness products, gemstones, and well-being items are available for purchase during or after your consultation session.",
    tag: "Products",
  },
  {
    question: "Are Learning Sessions Offered?",
    answer:
      "Yes, traditional knowledge learning sessions are offered for different levels — from beginners to those with prior interest in Kerala practices.",
    tag: "Learning",
  },
  {
    question: "What Is Covered in the Learning Sessions?",
    answer:
      "We cover horoscope reading, palmistry basics, and traditional Kerala knowledge practices in structured, personalized sessions.",
    tag: "Curriculum",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 px-5 md:px-10 bg-[#06060c] overflow-hidden">
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
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.06), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.04), transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[860px] mx-auto">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
            <span
              className="text-[#d4af37]/60 tracking-[0.28em] uppercase"
              style={{ fontFamily: "monospace", fontSize: "0.6rem" }}
            >
              Got Questions?
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-white font-bold leading-none mb-1"
            style={{
              fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
            }}
          >
            Frequently Asked
          </h2>
          <h2
            className="text-[#d4af37] font-bold leading-none"
            style={{
              fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
            }}
          >
            Questions
          </h2>

          {/* Rule + subtitle */}
          <div className="flex items-center gap-3 mt-5 mb-4">
            <div className="h-px w-10 bg-[linear-gradient(90deg,#d4af37,transparent)]" />
            <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
            <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
          </div>

          <p
            className="max-w-md leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Clear answers to help you understand our consultation process and
            what to expect from your session.
          </p>
        </motion.div>

        {/* ── FAQ List ── */}
        <div className="space-y-2.5">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-5 rounded-xl"
          style={{
            background: "rgba(212,175,55,0.04)",
            border: "1px solid rgba(212,175,55,0.1)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 flex-shrink-0" />
            <p
              className="text-center sm:text-left"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Still have questions?{" "}
              <span className="text-white/70 font-medium">
                We're happy to help personally.
              </span>
            </p>
          </div>

          <motion.a
            href={`https://wa.me/${phone_number}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex-shrink-0 inline-flex items-center gap-2.5 no-underline px-6 py-3 rounded-sm font-semibold tracking-[0.08em] uppercase text-[#06060c]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.78rem",
              background: "linear-gradient(135deg, #d4af37, #f5e27a)",
              boxShadow: "0 4px 20px rgba(212,175,55,0.35)",
            }}
          >
            <MessageCircle size={13} strokeWidth={2.5} />
            Chat With Us
            <ArrowRight
              size={12}
              strokeWidth={2.5}
              className="opacity-60 group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </motion.a>
        </motion.div>

        {/* Trust line */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
          <p
            className="text-[#d4af37]/35 tracking-[0.2em] uppercase"
            style={{ fontFamily: "monospace", fontSize: "0.58rem" }}
          >
            Trusted Guidance &nbsp;·&nbsp; Calm Insights &nbsp;·&nbsp; Personal
            Clarity
          </p>
          <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
        </div>
      </div>

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

const FAQItem = ({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen
          ? "linear-gradient(160deg, #0f0f1a 0%, #0a0a12 100%)"
          : "rgba(255,255,255,0.02)",
        border: isOpen
          ? "1px solid rgba(212,175,55,0.22)"
          : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 cursor-pointer"
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {/* Index */}
          <span
            className="flex-shrink-0 transition-colors duration-300"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: isOpen ? "rgba(212,175,55,0.6)" : "rgba(255,255,255,0.15)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Tag pill */}
          <span
            className="flex-shrink-0 hidden sm:inline-block px-2 py-0.5 rounded-full text-[0.55rem] tracking-[0.12em] uppercase font-semibold transition-all duration-300"
            style={{
              fontFamily: "monospace",
              background: isOpen
                ? "rgba(212,175,55,0.1)"
                : "rgba(255,255,255,0.04)",
              border: isOpen
                ? "1px solid rgba(212,175,55,0.25)"
                : "1px solid rgba(255,255,255,0.07)",
              color: isOpen ? "rgba(212,175,55,0.8)" : "rgba(255,255,255,0.25)",
            }}
          >
            {faq.tag}
          </span>

          {/* Question text */}
          <span
            className="leading-snug transition-colors duration-200 truncate"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.78rem, 1.2vw, 0.9rem)",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: isOpen ? "#f5e27a" : "rgba(255,255,255,0.8)",
            }}
          >
            {faq.question}
          </span>
        </div>

        {/* Chevron button */}
        <div
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen
              ? "rgba(212,175,55,0.1)"
              : "rgba(255,255,255,0.04)",
            border: isOpen
              ? "1px solid rgba(212,175,55,0.25)"
              : "1px solid rgba(255,255,255,0.08)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ChevronDown
            size={14}
            style={{ color: isOpen ? "#d4af37" : "rgba(255,255,255,0.3)" }}
            strokeWidth={2}
          />
        </div>
      </button>

      {/* Answer — animated with Framer Motion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              {/* Separator */}
              <div
                className="w-full h-px mb-4"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(212,175,55,0.25), transparent)",
                }}
              />
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.5)",
                  paddingLeft: "calc(1.5rem + 2.5rem)", // aligns under question text
                }}
              >
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
