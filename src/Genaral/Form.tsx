import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  Shield,
  CheckCircle,
} from "lucide-react";

// ─── Form ─────────────────────────────────────────────────────────────────────

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mvgaznyw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');

        .form-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(212,175,55,0.12);
          border-radius: 8px;
          padding: 13px 14px 13px 42px;
          color: rgba(255,255,255,0.85);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          outline: none;
          transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
          resize: none;
        }
        .form-input::placeholder {
          color: rgba(255,255,255,0.22);
          font-weight: 300;
        }
        .form-input:focus {
          background: rgba(212,175,55,0.05);
          border-color: rgba(212,175,55,0.4);
          box-shadow: 0 0 0 3px rgba(212,175,55,0.08);
        }
        .form-input:hover:not(:focus) {
          border-color: rgba(212,175,55,0.22);
        }
      `}</style>

      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0f0f1a 0%, #0a0a12 100%)",
          border: "1px solid rgba(212,175,55,0.12)",
        }}
      >
        {/* Top shimmer */}
        <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.5)_40%,rgba(245,226,122,0.7)_50%,rgba(212,175,55,0.5)_60%,transparent)]" />

        {/* Corner accents */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#d4af37]/20 pointer-events-none" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#d4af37]/20 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#d4af37]/20 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#d4af37]/20 pointer-events-none" />

        <div className="p-6 md:p-8">
          {/* Form header */}
          <div className="mb-6">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-6 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
              <span
                className="text-[#d4af37]/55 tracking-[0.26em] uppercase"
                style={{ fontFamily: "monospace", fontSize: "0.58rem" }}
              >
                Book a Session
              </span>
            </div>
            <h3
              className="text-white font-bold leading-tight"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "1.1rem",
                letterSpacing: "0.04em",
              }}
            >
              Get in Touch
            </h3>
            <p
              className="mt-1"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.35)",
              }}
            >
              Fill in your details and we'll reach out personally.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              /* ── Success state ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-4 py-10 text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.25)",
                  }}
                >
                  <CheckCircle
                    size={24}
                    className="text-[#d4af37]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p
                    className="text-white font-semibold"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.95rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Message Received
                  </p>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    We'll reach out to you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#d4af37]/60 hover:text-[#d4af37] transition-colors duration-200"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Submit another →
                </button>
              </motion.div>
            ) : (
              /* ── Form ── */
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                action="https://formspree.io/f/mvgaznyw"
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                {/* Name */}
                <FormField icon={<User size={14} strokeWidth={2} />}>
                  <input
                    required
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                  />
                </FormField>

                {/* Phone */}
                <FormField icon={<Phone size={14} strokeWidth={2} />}>
                  <input
                    required
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="Phone number"
                  />
                </FormField>

                {/* Email */}
                <FormField icon={<Mail size={14} strokeWidth={2} />}>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Email address (optional)"
                  />
                </FormField>

                {/* Message */}
                <FormField
                  icon={<MessageSquare size={14} strokeWidth={2} />}
                  align="top"
                >
                  <textarea
                    name="message"
                    rows={4}
                    className="form-input"
                    style={{ paddingTop: "13px" }}
                    placeholder="Your message or query"
                  />
                </FormField>

                {/* Divider */}
                <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.15)_50%,transparent)] my-1" />

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative flex items-center justify-center gap-2.5 w-full py-3.5 rounded-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.8rem",
                    color: "#06060c",
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #f5e27a 50%, #d4af37 100%)",
                    backgroundSize: "200% 100%",
                    boxShadow: loading
                      ? "none"
                      : "0 4px 24px rgba(212,175,55,0.4)",
                  }}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-[#06060c]/30 border-t-[#06060c] animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Book a Session
                      <ArrowRight
                        size={14}
                        strokeWidth={2.5}
                        className="opacity-60 group-hover:translate-x-0.5 transition-transform duration-200"
                      />
                    </>
                  )}
                </motion.button>

                {/* Trust note */}
                <div className="flex items-center justify-center gap-2 mt-1">
                  <Shield
                    size={11}
                    strokeWidth={2}
                    className="text-[#d4af37]/40 flex-shrink-0"
                  />
                  <p
                    className="text-center"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    Your details are{" "}
                    <span className="text-[#d4af37]/60 font-medium">
                      100% confidential
                    </span>
                    . We never share your information.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom shimmer */}
        <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.15)_50%,transparent)]" />
      </div>
    </>
  );
};

export default Form;

// ─── FormField ────────────────────────────────────────────────────────────────

const FormField = ({
  icon,
  children,
  align = "center",
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  align?: "center" | "top";
}) => (
  <div className="relative">
    <div
      className={`absolute left-3.5 pointer-events-none text-[#d4af37]/40 ${
        align === "top" ? "top-3.5" : "top-1/2 -translate-y-1/2"
      }`}
    >
      {icon}
    </div>
    {children}
  </div>
);
