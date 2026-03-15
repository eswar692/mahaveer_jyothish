import { phone_number, whatsapp_number, company_name } from "./secrete";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ImageView = () => {
  return (
    <div className="relative w-full h-[560px] md:h-[620px] overflow-hidden">
      {/* Background image */}
      <img
        src="https://i.pinimg.com/1200x/cd/9f/20/cd9f20cc6b731b518752360f4f18088b.jpg"
        alt={`${company_name} Banner`}
        className="w-full h-full object-cover scale-105"
      />

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Gold top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-60" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-yellow-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
          bg-yellow-500/10 border border-yellow-500/25
          text-yellow-400 text-[10px] font-semibold tracking-[0.2em] uppercase mb-6"
        >
          ✦ Traditional Kerala Consultation
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl font-bold text-white tracking-wide leading-tight drop-shadow-lg"
        >
          {company_name}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex items-center gap-3 mt-4"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-500" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 text-zinc-400 text-sm md:text-base leading-relaxed max-w-xs md:max-w-lg font-light tracking-wide"
        >
          Trusted Kerala practitioner offering personalized consultations for
          clarity, well-being, and confident life decisions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href={`tel:${phone_number}`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-md
            font-semibold text-sm text-black
            bg-gradient-to-r from-yellow-500 to-yellow-400
            shadow-lg shadow-yellow-500/25
            hover:shadow-yellow-500/50 hover:-translate-y-0.5
            transition-all duration-200"
          >
            <Phone size={15} /> Call Now
          </a>

          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-md
            font-semibold text-sm text-white
            bg-white/5 border border-white/15
            hover:bg-white/10 hover:border-yellow-500/30 hover:-translate-y-0.5
            transition-all duration-200"
          >
            <MessageCircle size={15} /> Chat Now
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 text-[10px] tracking-[0.2em] uppercase text-yellow-500/50"
        >
          ✦ Trusted &nbsp;•&nbsp; Confidential &nbsp;•&nbsp; Respectful
        </motion.p>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
};

export default ImageView;
