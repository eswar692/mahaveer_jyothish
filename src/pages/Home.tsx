import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  Award,
  Star,
  ArrowRight,
  Eye,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import FAQ from "../Genaral/FAQ";
import {
  company_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";
import ImageView from "../Genaral/VideoView";
import { useState } from "react";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full bg-slate-950">
      <ImageView />
      <Problems />
      <AboutAstrologer />
      <AstrologyServices />
      <AstrologyServicesModern />
      <AllServicesModern />
      <HomeLastDesign />
      <FAQ />
    </div>
  );
};

export default Home;

/* ── Problems / Service Cards ── */

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROBLEMS = [
  {
    title: "Relationship Guidance",
    desc: "Traditional consultation for emotional clarity and relationship harmony.",
    img: "https://i.pinimg.com/736x/be/b8/3e/beb83e9587806f889eec5e49e351f001.jpg",
    tag: "Emotional",
  },
  {
    title: "Marriage Support",
    desc: "Holistic insights for better understanding and marital balance.",
    img: "https://i.pinimg.com/1200x/65/57/d5/6557d5a550f751a5c29d392efed122a3.jpg",
    tag: "Harmony",
  },
  {
    title: "Career Direction",
    desc: "Personalized consultation to navigate career growth and opportunities.",
    img: "https://i.pinimg.com/736x/9d/22/30/9d223074e6ba7d98a04b66feaf2750e3.jpg",
    tag: "Growth",
  },
  {
    title: "Education & Focus",
    desc: "Traditional wellness practices to enhance concentration and learning.",
    img: "https://i.pinimg.com/1200x/d1/88/da/d188da345a1aa258f410cae6f82d4818.jpg",
    tag: "Clarity",
  },
  {
    title: "Financial Stability",
    desc: "Holistic insights to support financial planning and a positive mindset.",
    img: "https://i.pinimg.com/736x/94/a8/a5/94a8a5685f1fcb8f33d6d59f1f56bc3b.jpg",
    tag: "Abundance",
  },
  {
    title: "Family Harmony",
    desc: "Consultation for resolving misunderstandings and improving peace at home.",
    img: "https://i.pinimg.com/736x/29/da/fb/29dafb844bd06001a7430df8ef675a6c.jpg",
    tag: "Peace",
  },
  {
    title: "Health & Well-being",
    desc: "Traditional guidance to support emotional and mental balance.",
    img: "https://i.pinimg.com/1200x/c4/b9/85/c4b985f1a8e0ef855f514a827bc9d8d0.jpg",
    tag: "Wellness",
  },
  {
    title: "Business Growth",
    desc: "Holistic consultation for strategic planning and growth clarity.",
    img: "https://i.pinimg.com/1200x/e3/82/9f/e3829f3f5aeeacc813cd0a0a8eebc8ac.jpg",
    tag: "Success",
  },
  {
    title: "Life Path Clarity",
    desc: "Discover strengths and direction through traditional Kerala analysis.",
    img: "https://i.pinimg.com/736x/fe/c4/db/fec4dbd0406e4ae90d4cde684526f66b.jpg",
    tag: "Direction",
  },
  {
    title: "Inner Well-being",
    desc: "Guidance to deepen self-awareness and inner peace.",
    img: "https://i.pinimg.com/736x/bd/07/98/bd07989b7867692892f45969e20442c0.jpg",
    tag: "Soul",
  },
];

// ─── Motion variants ──────────────────────────────────────────────────────────

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Problems ─────────────────────────────────────────────────────────────────

const Problems = () => {
  return (
    <>
      <GlobalStyles />
      <section className="relative py-24 md:py-32 px-5 md:px-10 bg-[#06060c] overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.07),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.04),transparent_70%)] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto">
          {/* ── Section Header ── */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16 md:mb-20"
          >
            {/* Eyebrow */}
            <motion.div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
              <span
                className="text-[#d4af37]/60 text-[0.6rem] tracking-[0.28em] uppercase"
                style={{ fontFamily: "monospace" }}
              >
                How We Help
              </span>
            </motion.div>

            {/* Heading row */}
            <motion.div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <h2
                  className="text-white font-bold leading-none"
                  style={{
                    fontFamily:
                      "'Cinzel Decorative', 'Playfair Display', serif",
                    fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                  }}
                >
                  Areas of
                </h2>
                <h2
                  className="text-[#d4af37] font-bold leading-none mt-1"
                  style={{
                    fontFamily:
                      "'Cinzel Decorative', 'Playfair Display', serif",
                    fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                  }}
                >
                  Consultation
                </h2>
              </div>

              {/* Right: count + rule */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 md:w-32 bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.3))]" />
                <span
                  className="text-white/20 font-light"
                  style={{ fontFamily: "'Cinzel', serif", fontSize: "2.5rem" }}
                >
                  {String(PROBLEMS.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="mt-5 text-white/40 max-w-lg leading-relaxed"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 300,
              }}
            >
              Rooted in traditional Kerala wisdom, each consultation is tailored
              to your unique situation — bringing light to life's most complex
              challenges.
            </motion.p>
          </motion.div>

          {/* ── Cards Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PROBLEMS.map((item, index) => (
              <ConsultationCard key={index} item={item} index={index} />
            ))}

            {/* CTA tile — last cell */}
            <CTATile />
          </div>
        </div>
      </section>
    </>
  );
};

// ─── Consultation Card ────────────────────────────────────────────────────────

const ConsultationCard = ({
  item,
  index,
}: {
  item: (typeof PROBLEMS)[number];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col overflow-hidden rounded-xl cursor-pointer"
      style={{
        background: "linear-gradient(160deg, #0f0f1a 0%, #0a0a12 100%)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52 flex-shrink-0">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
        />
        {/* Image overlays */}
        <div className="absolute inset-0 bg-[#06060c]/30 group-hover:bg-[#06060c]/10 transition-colors duration-500" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0a0a12_0%,transparent_55%)]" />

        {/* Tag pill */}
        <div className="absolute top-3 left-3">
          <span
            className="inline-block px-2.5 py-1 rounded-full text-[0.58rem] tracking-[0.15em] uppercase font-semibold"
            style={{
              fontFamily: "monospace",
              background: "rgba(6,6,12,0.75)",
              border: "1px solid rgba(212,175,55,0.2)",
              color: "rgba(212,175,55,0.8)",
              backdropFilter: "blur(8px)",
            }}
          >
            {item.tag}
          </span>
        </div>

        {/* Index number */}
        <div
          className="absolute top-3 right-3 text-white/15 font-bold leading-none"
          style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem" }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Gold line accent */}
        <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)] mb-3 transition-all duration-300 group-hover:w-14" />

        <h3
          className="text-white font-semibold leading-snug mb-2 group-hover:text-[#f5e27a] transition-colors duration-300"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.9rem",
            letterSpacing: "0.04em",
          }}
        >
          {item.title}
        </h3>

        <p
          className="text-white/40 leading-relaxed flex-1 mb-5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.78rem",
            fontWeight: 300,
          }}
        >
          {item.desc}
        </p>

        {/* CTA */}
        <a
          href={`https://wa.me/${whatsapp_number}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group/btn flex items-center justify-between
            px-4 py-2.5 rounded-lg no-underline
            transition-all duration-300
          "
          style={{
            background: "rgba(212,175,55,0.07)",
            border: "1px solid rgba(212,175,55,0.12)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(212,175,55,0.14)";
            el.style.borderColor = "rgba(212,175,55,0.35)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(212,175,55,0.07)";
            el.style.borderColor = "rgba(212,175,55,0.12)";
          }}
        >
          <span
            className="flex items-center gap-2 text-[#d4af37] text-[0.72rem] tracking-[0.08em] uppercase font-semibold"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <MessageCircle size={12} strokeWidth={2} />
            Consult Now
          </span>
          <ArrowUpRight
            size={13}
            className="text-[#d4af37]/50 transition-all duration-200 group-hover/btn:text-[#d4af37] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            strokeWidth={2}
          />
        </a>
      </div>

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.2)" }}
      />
    </motion.div>
  );
};

// ─── CTA Tile ─────────────────────────────────────────────────────────────────

const CTATile = () => (
  <motion.a
    href={`https://wa.me/${whatsapp_number}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -4, transition: { duration: 0.25 } }}
    className="group relative flex flex-col items-center justify-center rounded-xl overflow-hidden no-underline min-h-[280px] cursor-pointer"
    style={{
      background:
        "linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.04) 100%)",
      border: "1px solid rgba(212,175,55,0.2)",
    }}
  >
    {/* Animated background shimmer */}
    <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(212,175,55,0.08)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Corner diamonds */}
    {[
      "-top-0.5 -left-0.5",
      "-top-0.5 -right-0.5",
      "-bottom-0.5 -left-0.5",
      "-bottom-0.5 -right-0.5",
    ].map((pos, i) => (
      <div
        key={i}
        className={`absolute ${pos} w-2 h-2 bg-[#d4af37] rotate-45 opacity-40 group-hover:opacity-80 transition-opacity duration-300`}
      />
    ))}

    <div className="relative z-10 flex flex-col items-center gap-4 px-8 text-center">
      {/* Icon ring */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: "rgba(212,175,55,0.1)",
          border: "1px solid rgba(212,175,55,0.25)",
        }}
      >
        <MessageCircle size={22} className="text-[#d4af37]" strokeWidth={1.5} />
      </div>

      <div>
        <p
          className="text-[#d4af37] font-bold mb-1"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.95rem",
            letterSpacing: "0.05em",
          }}
        >
          Not Sure Where
          <br />
          to Start?
        </p>
        <p
          className="text-white/40"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 300,
          }}
        >
          Reach out — we'll guide you to the right consultation.
        </p>
      </div>

      <span
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[0.75rem] tracking-[0.08em] uppercase font-semibold text-[#08080c]"
        style={{
          fontFamily: "'Outfit', sans-serif",
          background: "linear-gradient(135deg, #d4af37, #f5e27a)",
          boxShadow: "0 4px 20px rgba(212,175,55,0.35)",
        }}
      >
        <MessageCircle size={13} strokeWidth={2.5} />
        Message Us
      </span>
    </div>
  </motion.a>
);

// ─── Global Styles ────────────────────────────────────────────────────────────

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
  `}</style>
);

const STATS = [
  { icon: <Users size={14} />, value: "10K+", label: "Consultations" },
  { icon: <Award size={14} />, value: "75yrs", label: "Legacy" },
  { icon: <Star size={14} />, value: "4.9", label: "Rating" },
];

const AboutAstrologer = () => {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <section className="relative py-24 md:py-32 px-5 md:px-10 bg-[#06060c] overflow-hidden">
      {/* ── Dot grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Ambient orbs ── */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.07),transparent_65%)] pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.05),transparent_65%)] pointer-events-none" />

      {/* ── Vertical rule (desktop) ── */}
      <div className="absolute top-0 bottom-0 left-[50%] w-px bg-[linear-gradient(to_bottom,transparent,rgba(212,175,55,0.06)_30%,rgba(212,175,55,0.06)_70%,transparent)] hidden lg:block pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── LEFT: Image column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div
              className="relative w-full max-w-[420px]"
              onMouseEnter={() => setImgHovered(true)}
              onMouseLeave={() => setImgHovered(false)}
            >
              {/* Decorative corner frames */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#d4af37]/40 pointer-events-none z-20" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#d4af37]/40 pointer-events-none z-20" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-[#d4af37]/20 pointer-events-none z-20" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-[#d4af37]/20 pointer-events-none z-20" />

              {/* Glow halo behind image */}
              <div
                className="absolute -inset-4 rounded-2xl pointer-events-none transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(212,175,55,0.14), transparent 70%)",
                  opacity: imgHovered ? 1 : 0.5,
                }}
              />

              {/* Image wrapper */}
              <div
                className="relative rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(212,175,55,0.12)" }}
              >
                <img
                  src="https://i.pinimg.com/1200x/a2/2e/34/a22e34ab3f1765939a7825677df5861f.jpg"
                  alt={`${company_name} practitioner`}
                  className="w-full h-[460px] object-cover object-top transition-transform duration-700"
                  style={{ transform: imgHovered ? "scale(1.04)" : "scale(1)" }}
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,#06060c_0%,transparent_40%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,6,12,0.3),transparent_50%)]" />

                {/* Floating name badge on image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="px-4 py-3 rounded-lg"
                    style={{
                      background: "rgba(6,6,12,0.75)",
                      border: "1px solid rgba(212,175,55,0.18)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-white font-semibold leading-tight"
                          style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: "0.85rem",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {company_name}
                        </p>
                        <p
                          className="text-[#d4af37]/60 mt-0.5"
                          style={{
                            fontFamily: "monospace",
                            fontSize: "0.6rem",
                            letterSpacing: "0.15em",
                          }}
                        >
                          TRADITIONAL KERALA PRACTITIONER
                        </p>
                      </div>
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats row below image */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-0.5 py-3 rounded-lg transition-colors duration-200"
                    style={{
                      background: "rgba(212,175,55,0.04)",
                      border: "1px solid rgba(212,175,55,0.1)",
                    }}
                  >
                    <div className="text-[#d4af37]/50 mb-0.5">{s.icon}</div>
                    <span
                      className="text-white font-bold leading-none"
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "1rem",
                      }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="text-white/30 uppercase tracking-widest"
                      style={{ fontFamily: "monospace", fontSize: "0.55rem" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Text column ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="order-1 lg:order-2 flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
              <span
                className="text-[#d4af37]/60 tracking-[0.28em] uppercase"
                style={{ fontFamily: "monospace", fontSize: "0.6rem" }}
              >
                About Us
              </span>
            </div>

            {/* Heading */}
            <div>
              <h2
                className="text-white font-bold leading-none"
                style={{
                  fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                  fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {company_name}
              </h2>
              <p
                className="text-[#d4af37] font-light italic mt-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(0.95rem, 1.6vw, 1.2rem)",
                  letterSpacing: "0.04em",
                }}
              >
                Rooted in tradition. Guided by wisdom.
              </p>
            </div>

            {/* Gold rule */}
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[linear-gradient(90deg,#d4af37,transparent)]" />
              <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
              <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
            </div>

            {/* Body text */}
            <div className="space-y-4">
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(0.88rem, 1.2vw, 0.98rem)",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Meet{" "}
                <span className="text-white font-medium">{company_name}</span>,
                a trusted practitioner whose knowledge is rooted in{" "}
                <span className="text-[#d4af37]/80 font-medium">
                  traditional Kerala wisdom
                </span>
                . His guidance has helped thousands discover clarity, balance,
                and confidence across life's most complex crossroads.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(0.88rem, 1.2vw, 0.98rem)",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Through personalized consultations and thoughtful insights,{" "}
                {company_name} supports people in navigating life decisions with
                calmness, awareness, and grounded understanding — blending
                ancient practices with genuine human care.
              </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {[
                "Confidential Sessions",
                "Personalized Guidance",
                "Kerala Tradition",
                "75+ Years Legacy",
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(212,175,55,0.06)",
                    border: "1px solid rgba(212,175,55,0.14)",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.68rem",
                    letterSpacing: "0.06em",
                    color: "rgba(212,175,55,0.7)",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-[#d4af37]/50 flex-shrink-0" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {/* Primary */}
              <motion.a
                href={`tel:${phone_number}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 no-underline px-6 py-3.5 rounded-sm font-semibold text-[0.8rem] tracking-[0.07em] uppercase text-[#06060c]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
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
                  className="opacity-60 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </motion.a>

              {/* Ghost */}
              <motion.a
                href={`https://wa.me/${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 no-underline px-6 py-3.5 rounded-sm font-semibold text-[0.8rem] tracking-[0.07em] uppercase transition-all duration-300"
                style={{
                  fontFamily: "'Outfit', sans-serif",
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
                Chat Now
                <ArrowRight
                  size={12}
                  strokeWidth={2.5}
                  className="opacity-40 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Google Fonts (self-contained) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};

const SERVICES = [
  {
    title: "Relationship Recovery",
    desc: "Emotional challenges in relationships are common. Traditional consultation helps heal and restore understanding between partners.",
    img: "https://i.pinimg.com/1200x/56/23/3a/56233a0caad6ac1136c682118ca138f8.jpg",
    tag: "Healing",
    index: "01",
  },
  {
    title: "Partner Conflict Support",
    desc: "Traditional guidance helps ease conflicts and bring balance in relationships with your partner.",
    img: "https://i.pinimg.com/736x/da/1e/de/da1ede4ba8faa752488419d5a2802fd7.jpg",
    tag: "Balance",
    index: "02",
  },
  {
    title: "Relationship Harmony",
    desc: "Holistic consultation provides a path to resolve issues and restore harmony and trust between partners.",
    img: "https://i.pinimg.com/736x/bc/49/b6/bc49b6e04d96e9d687ea1740e4cc93ed.jpg",
    tag: "Trust",
    index: "03",
  },
  {
    title: "Family Well-being",
    desc: "Address family challenges with traditional guidance that promotes peace, harmony, and positivity at home.",
    img: "https://i.pinimg.com/736x/e7/b3/63/e7b36387a8c950dbb340455e0fdbdb1e.jpg",
    tag: "Peace",
    index: "04",
  },
];

const AstrologyServices = () => {
  return (
    <section className="relative py-24 md:py-32 px-5 md:px-10 bg-[#06060c] overflow-hidden">
      {/* ── Dot grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Ambient orbs ── */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.06), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[350px] h-[280px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.05), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
            <span
              className="text-[#d4af37]/60 tracking-[0.28em] uppercase"
              style={{ fontFamily: "monospace", fontSize: "0.6rem" }}
            >
              Our Specialties
            </span>
          </div>

          {/* Heading + count row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2
                className="text-white font-bold leading-none"
                style={{
                  fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                }}
              >
                Consultation
              </h2>
              <h2
                className="text-[#d4af37] font-bold leading-none mt-1"
                style={{
                  fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                }}
              >
                Services
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="h-px flex-1 md:w-24"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(212,175,55,0.3))",
                }}
              />
              <span
                className="text-white/15 font-light leading-none"
                style={{ fontFamily: "'Cinzel', serif", fontSize: "2.5rem" }}
              >
                {String(SERVICES.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="mt-5 max-w-lg leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Each service is rooted in Kerala's ancient traditions — tailored
            personally to bring clarity and balance to your life's most
            sensitive relationships.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-5 rounded-xl"
          style={{
            background: "rgba(212,175,55,0.04)",
            border: "1px solid rgba(212,175,55,0.1)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 flex-shrink-0" />
            <p
              className="text-white/50"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 300,
              }}
            >
              Not sure which service fits?{" "}
              <span className="text-white/70 font-medium">
                We'll guide you personally.
              </span>
            </p>
          </div>

          <motion.a
            href={`tel:${phone_number}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex-shrink-0 inline-flex items-center gap-2.5 no-underline px-6 py-3 rounded-sm font-semibold text-[0.78rem] tracking-[0.08em] uppercase text-[#06060c]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              background: "linear-gradient(135deg, #d4af37, #f5e27a)",
              boxShadow: "0 4px 20px rgba(212,175,55,0.35)",
            }}
          >
            <Phone size={13} strokeWidth={2.5} />
            Call for Guidance
            <ArrowRight
              size={12}
              strokeWidth={2.5}
              className="opacity-60 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </motion.a>
        </motion.div>
      </div>

      {/* ── Fonts (self-contained) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};

// ─── Service Card ─────────────────────────────────────────────────────────────

const ServiceCard = ({ service, idx }: { service: any; idx: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-xl cursor-pointer"
      style={{
        background: "linear-gradient(160deg, #0f0f1a 0%, #0a0a12 100%)",
        border: hovered
          ? "1px solid rgba(212,175,55,0.22)"
          : "1px solid rgba(255,255,255,0.05)",
        transition: "border-color 0.3s ease",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52 flex-shrink-0">
        <img
          src={service.img}
          alt={service.title}
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

        {/* Index number */}
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
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Animated gold accent bar */}
        <div
          className="h-px mb-3 transition-all duration-400"
          style={{
            background: "linear-gradient(90deg, #d4af37, transparent)",
            width: hovered ? "56px" : "28px",
          }}
        />

        <h3
          className="leading-snug mb-2.5 transition-colors duration-300"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.88rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            color: hovered ? "#f5e27a" : "rgba(255,255,255,0.9)",
          }}
        >
          {service.title}
        </h3>

        <p
          className="leading-relaxed flex-1 mb-5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.77rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          {service.desc}
        </p>

        {/* CTA row */}
        <a
          href={`tel:${phone_number}`}
          className="flex items-center justify-between no-underline px-4 py-2.5 rounded-lg transition-all duration-300"
          style={{
            background: hovered
              ? "rgba(212,175,55,0.12)"
              : "rgba(212,175,55,0.06)",
            border: hovered
              ? "1px solid rgba(212,175,55,0.32)"
              : "1px solid rgba(212,175,55,0.1)",
          }}
        >
          <span
            className="flex items-center gap-2 font-semibold tracking-[0.08em] uppercase"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.7rem",
              color: "#d4af37",
            }}
          >
            <Phone size={12} strokeWidth={2.5} />
            Call Now
          </span>
          <ArrowUpRight
            size={13}
            strokeWidth={2}
            className="transition-all duration-200"
            style={{
              color: hovered ? "#d4af37" : "rgba(212,175,55,0.4)",
              transform: hovered ? "translate(1px,-1px)" : "translate(0,0)",
            }}
          />
        </a>
      </div>

      {/* Inner glow border on hover */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.15)",
          opacity: hovered ? 1 : 0,
        }}
      />
    </motion.div>
  );
};

/* ── Wellness Services (image cards) ── */

const AstrologyServicesModern = () => {
  const SERVICES = [
    {
      title: "Marriage Consultation",
      img: "https://i.pinimg.com/736x/be/96/4b/be964bb4f6d6e07752fc4b363859b048.jpg",
      tag: "Marriage",
      index: "01",
    },
    {
      title: "Couple Conflict Support",
      img: "https://i.pinimg.com/736x/f5/b2/00/f5b200772b619765261b2a50b595ae72.jpg",
      tag: "Conflict",
      index: "02",
    },
    {
      title: "Relationship Restoration",
      img: "https://i.pinimg.com/1200x/2f/5b/b3/2f5bb3dde2c5891188f1170b5d12260f.jpg",
      tag: "Restore",
      index: "03",
    },
    {
      title: "Financial Well-being",
      img: "https://i.pinimg.com/736x/40/99/9c/40999c10cdac6c327a1378c45be496b5.jpg",
      tag: "Wellness",
      index: "04",
    },
  ];
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
        className="absolute top-0 right-0 w-[380px] h-[280px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.06), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[320px] h-[240px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.04), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-18"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
            <span
              className="text-[#d4af37]/60 tracking-[0.28em] uppercase"
              style={{ fontFamily: "monospace", fontSize: "0.6rem" }}
            >
              Wellness
            </span>
          </div>

          {/* Heading + count */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2
                className="text-white font-bold leading-none"
                style={{
                  fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                }}
              >
                Wellness
              </h2>
              <h2
                className="text-[#d4af37] font-bold leading-none mt-1"
                style={{
                  fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                }}
              >
                Services
              </h2>
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
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </div>

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};

// ─── Service Card ─────────────────────────────────────────────────────────────

/* ── All Services (icon cards) ── */
const AllServicesModern = () => {
  const services = [
    {
      title: "Relationship Healing",
      icon: Heart,
      desc: "Traditional guidance to restore emotional balance and mutual understanding.",
      accent: "text-rose-400",
      bg: "bg-rose-500/10 border-rose-500/20",
    },
    {
      title: "Legal Matter Support",
      icon: Scale,
      desc: "Traditional insights to support clarity and peace of mind during legal challenges.",
      accent: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Family Harmony",
      icon: Users,
      desc: "Supportive consultation to improve peace and well-being in family relationships.",
      accent: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Business Direction",
      icon: Briefcase,
      desc: "Holistic insights to help with planning and professional growth.",
      accent: "text-sky-400",
      bg: "bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "Couple Well-being",
      icon: Users,
      desc: "Guidance focused on emotional well-being and togetherness.",
      accent: "text-pink-400",
      bg: "bg-pink-500/10 border-pink-500/20",
    },
    {
      title: "Traditional Rituals",
      icon: Sparkles,
      desc: "Sacred Kerala practices aimed at inner balance and personal grounding.",
      accent: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20",
    },
  ];

  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
            Full Spectrum
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide mt-2">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-500" />
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (id % 3) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-zinc-900 border border-white/5 rounded-2xl p-8 text-center
              hover:border-yellow-500/15 shadow-lg shadow-black/30
              transition-all duration-300"
            >
              <div
                className={`mx-auto mb-6 w-16 h-16 rounded-xl flex items-center justify-center border ${service.bg}`}
              >
                <service.icon className={`w-8 h-8 ${service.accent}`} />
              </div>

              <h3 className="font-serif text-xl font-semibold text-white tracking-wide mb-3">
                {service.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">
                {service.desc}
              </p>

              <a href={`tel:${phone_number}`}>
                <button
                  className="w-full py-2.5 rounded-md font-semibold text-sm text-black
                  bg-gradient-to-r from-yellow-500 to-yellow-400
                  shadow-md shadow-yellow-500/20
                  hover:shadow-yellow-500/40 hover:-translate-y-0.5
                  transition-all duration-200"
                >
                  Get in Touch
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Home Last / CTA ── */

const HomeLastDesign = () => {
  const [imgHovered, setImgHovered] = useState(false);

  const PILLARS = [
    { icon: <Eye size={13} />, label: "Vastu" },
    { icon: <Sparkles size={13} />, label: "Horoscope" },
    { icon: <Shield size={13} />, label: "Well-being" },
  ];

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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.06), transparent 65%)",
        }}
      />
      <div
        className="absolute -top-20 -right-20 w-[350px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.04), transparent 65%)",
        }}
      />

      {/* Vertical center rule */}
      <div
        className="absolute top-0 bottom-0 left-[50%] w-px pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(212,175,55,0.06) 30%, rgba(212,175,55,0.06) 70%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* ── LEFT: Portrait ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Outer decorative ring */}
              <div
                className="absolute -inset-5 rounded-full pointer-events-none transition-opacity duration-500"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(212,175,55,0.12), transparent 40%, rgba(212,175,55,0.08), transparent 80%)",
                  opacity: imgHovered ? 1 : 0.5,
                }}
              />

              {/* Corner frame accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]/35 rounded-tl-sm pointer-events-none z-20" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]/35 rounded-br-sm pointer-events-none z-20" />

              {/* Glow halo */}
              <div
                className="absolute -inset-6 rounded-full pointer-events-none transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.16), transparent 65%)",
                  opacity: imgHovered ? 1 : 0.4,
                }}
              />

              {/* Circle portrait */}
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden"
                style={{ border: "1px solid rgba(212,175,55,0.2)" }}
                onMouseEnter={() => setImgHovered(true)}
                onMouseLeave={() => setImgHovered(false)}
              >
                <img
                  src="https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg"
                  alt={person_name}
                  className="w-full h-full object-cover will-change-transform transition-transform duration-700"
                  style={{ transform: imgHovered ? "scale(1.07)" : "scale(1)" }}
                />
                {/* Shimmer overlay */}
                <div
                  className="absolute inset-0 rounded-full transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212,175,55,0.15), transparent 50%)",
                    opacity: imgHovered ? 1 : 0,
                  }}
                />
                {/* Inner border ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px solid rgba(212,175,55,0.1)" }}
                />
              </div>

              {/* Floating name badge */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-lg whitespace-nowrap z-20"
                style={{
                  background: "rgba(6,6,12,0.85)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 flex-shrink-0" />
                  <div>
                    <p
                      className="text-white font-semibold leading-none"
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.82rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {person_name}
                    </p>
                    <p
                      className="text-[#d4af37]/55 mt-0.5 leading-none"
                      style={{
                        fontFamily: "monospace",
                        fontSize: "0.55rem",
                        letterSpacing: "0.15em",
                      }}
                    >
                      KERALA PRACTITIONER
                    </p>
                  </div>
                  <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 flex-shrink-0" />
                </div>
              </div>

              {/* Rotating orbit dot */}
              <div className="absolute inset-0 rounded-full pointer-events-none animate-orbit">
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 rounded-full bg-[#d4af37]"
                  style={{ boxShadow: "0 0 8px rgba(212,175,55,0.8)" }}
                />
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
              <span
                className="text-[#d4af37]/60 tracking-[0.28em] uppercase"
                style={{ fontFamily: "monospace", fontSize: "0.6rem" }}
              >
                Meet Your Guide
              </span>
            </div>

            {/* Heading */}
            <div>
              <h2
                className="text-white font-bold leading-none"
                style={{
                  fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                  fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {person_name}
              </h2>
              <p
                className="text-[#d4af37] font-light italic mt-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                  letterSpacing: "0.04em",
                }}
              >
                Trusted Traditional Kerala Consultation
              </p>
            </div>

            {/* Gold rule */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[linear-gradient(90deg,#d4af37,transparent)]" />
              <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
              <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
            </div>

            {/* Body text */}
            <p
              className="leading-relaxed max-w-lg"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.88rem, 1.2vw, 0.98rem)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              With deep understanding of{" "}
              <span className="text-[#d4af37]/85 font-medium">Vastu</span>,{" "}
              <span className="text-[#d4af37]/70 font-medium">
                horoscope interpretation
              </span>
              , and{" "}
              <span className="text-[#d4af37]/60 font-medium">
                holistic well-being consultation
              </span>
              , {person_name} provides calm, thoughtful guidance to help
              individuals move forward with clarity and confidence.
            </p>

            {/* Pillar chips */}
            <div className="flex flex-wrap gap-2">
              {PILLARS.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg"
                  style={{
                    background: "rgba(212,175,55,0.06)",
                    border: "1px solid rgba(212,175,55,0.14)",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: "rgba(212,175,55,0.75)",
                  }}
                >
                  <span className="text-[#d4af37]/50">{p.icon}</span>
                  {p.label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <motion.a
                href={`tel:${phone_number}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 no-underline px-6 py-3.5 rounded-sm font-semibold tracking-[0.07em] uppercase text-[#06060c]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.78rem",
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
                className="group inline-flex items-center gap-2.5 no-underline px-6 py-3.5 rounded-sm font-semibold tracking-[0.07em] uppercase transition-all duration-300"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.78rem",
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
            <div className="flex items-center gap-3 pt-1">
              <div className="w-1 h-1 bg-[#d4af37]/40 rotate-45" />
              <p
                className="text-[#d4af37]/40 tracking-[0.18em] uppercase"
                style={{ fontFamily: "monospace", fontSize: "0.58rem" }}
              >
                Trusted Guidance &nbsp;·&nbsp; Calm Insights &nbsp;·&nbsp;
                Personal Clarity
              </p>
              <div className="w-1 h-1 bg-[#d4af37]/40 rotate-45" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fonts + orbit animation */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-orbit { animation: orbit 8s linear infinite; }
      `}</style>
    </section>
  );
};
