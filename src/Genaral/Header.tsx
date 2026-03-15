import { MenuIcon, X, Phone, MapPin, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { address, company_name, phone_number } from "./secrete";

const NAV_ITEMS = ["Home", "About", "Services", "Contact"] as const;
const MOBILE_NAV_ITEMS = [
  "Home",
  "About",
  "Services",
  "Testimonials",
  "Contact",
] as const;

// ─── Header ───────────────────────────────────────────────────────────────────

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <GlobalStyles />
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-[#080810]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(212,175,55,0.15),0_8px_32px_rgba(0,0,0,0.6)]"
              : "bg-[linear-gradient(180deg,#080810_0%,#0d0d1a_100%)]"
          }
        `}
      >
        {/* Top utility strip */}
        <TopStrip />

        {/* Main header row */}
        <div className="relative">
          {/* Dot grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #d4af37 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative w-full max-w-[1400px] mx-auto px-5 md:px-10 py-4 md:py-5">
            <div className="flex items-center justify-between gap-6">
              <LogoBlock />
              <DesktopNav />
              <MobileToggle />
            </div>
          </div>
        </div>

        {/* Bottom shimmer line */}
        <div className="h-px bg-[linear-gradient(90deg,transparent_0%,rgba(212,175,55,0.5)_30%,rgba(245,226,122,0.8)_50%,rgba(212,175,55,0.5)_70%,transparent_100%)]" />
      </header>

      {/* Push content below fixed header */}
      <div className="h-28 md:h-32" />
    </>
  );
};

export default Header;

// ─── Top Strip ────────────────────────────────────────────────────────────────

const TopStrip = () => (
  <div className="border-b border-[#d4af37]/10 bg-[#d4af37]/[0.03] px-5 md:px-10 py-1.5">
    <div className="max-w-[1400px] mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-mono text-[0.6rem] text-white/35 tracking-widest uppercase">
          Est. 1950 · 75 Years of Excellence
        </span>
      </div>
      <a
        href={`tel:+91${phone_number}`}
        className="flex items-center gap-1.5 group no-underline"
      >
        <Phone
          size={9}
          className="text-[#d4af37]/50 group-hover:text-[#d4af37] transition-colors duration-200"
          strokeWidth={2.5}
        />
        <span className="font-mono text-[0.6rem] text-[#d4af37]/50 group-hover:text-[#d4af37] transition-colors duration-200 tracking-wider">
          +91 {phone_number}
        </span>
      </a>
    </div>
  </div>
);

// ─── Logo Block ───────────────────────────────────────────────────────────────

const LogoBlock = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/"
      className="flex items-center gap-4 md:gap-5 no-underline group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Logo medallion */}
      <div className="relative flex-shrink-0 w-[60px] h-[60px]">
        {/* Glow halo */}
        <div
          className={`
            absolute -inset-2 rounded-full pointer-events-none
            bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_70%)]
            transition-opacity duration-500
            ${hovered ? "opacity-100" : "opacity-0"}
          `}
        />
        {/* Spinning ring */}
        <div
          className={`
            absolute -inset-1 rounded-full
            bg-[conic-gradient(from_0deg,#d4af37_0%,#f5e27a_25%,#8b6914_50%,#f5e27a_75%,#d4af37_100%)]
            animate-spin-ring transition-opacity duration-300
            ${hovered ? "opacity-100" : "opacity-50"}
          `}
        />
        {/* Gap ring */}
        <div className="absolute inset-0.5 rounded-full bg-[#080810]" />
        {/* Photo */}
        <div className="absolute inset-[3px] rounded-full overflow-hidden ring-1 ring-[#d4af37]/20">
          <img
            src="https://i.pinimg.com/1200x/19/6b/2d/196b2d46fb8864dfb588c18655d4a3f1.jpg"
            alt={`${company_name} logo`}
            className={`
              w-full h-full object-cover transition-transform duration-700
              ${hovered ? "scale-[1.12]" : "scale-100"}
            `}
          />
          {/* Gold shimmer on hover */}
          <div
            className={`
              absolute inset-0
              bg-[linear-gradient(135deg,rgba(212,175,55,0.28),transparent_50%)]
              transition-opacity duration-300
              ${hovered ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>
        {/* Corner diamonds */}
        {[
          "-top-0.5 -left-0.5",
          "-top-0.5 -right-0.5",
          "-bottom-0.5 -left-0.5",
          "-bottom-0.5 -right-0.5",
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-1.5 h-1.5 bg-[#d4af37] rotate-45 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-35"}`}
          />
        ))}
      </div>

      {/* Text stack */}
      <div className="flex flex-col gap-0.5">
        {/* Ornament row */}
        <div className="flex items-center gap-1.5 mb-0.5">
          <div className="h-px w-5 bg-[linear-gradient(90deg,rgba(212,175,55,0.7),transparent)]" />
          <span
            className="text-[#d4af37]/45 text-[0.55rem] tracking-[0.24em] uppercase"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            ✦ Premium ✦
          </span>
          <div className="h-px w-5 bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.7))]" />
        </div>

        {/* Company name */}
        <h1
          className={`
            leading-none font-bold text-white tracking-tight
            transition-colors duration-300
            ${hovered ? "text-[#f5e27a]" : "text-white"}
          `}
          style={{
            fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
            fontSize: "clamp(1.05rem, 2.4vw, 1.55rem)",
            textShadow: hovered ? "0 0 36px rgba(212,175,55,0.45)" : "none",
            transition: "text-shadow 0.3s ease, color 0.3s ease",
          }}
        >
          {company_name}
        </h1>

        {/* Location — desktop only */}
        <p className="hidden md:flex items-center gap-1.5 mt-1 text-white/35">
          <MapPin
            size={9}
            className="text-[#d4af37]/40 flex-shrink-0"
            strokeWidth={2}
          />
          <span
            className="leading-none"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.035em",
            }}
          >
            {address.line1}, {address.District}, {address.state}
          </span>
        </p>
      </div>
    </Link>
  );
};

// ─── Desktop Nav ──────────────────────────────────────────────────────────────

const DesktopNav = () => {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center gap-0.5">
      {NAV_ITEMS.map((item) => {
        const to = item === "Home" ? "/" : `/${item.toLowerCase()}`;
        const active = location.pathname === to;
        return (
          <DesktopNavLink key={item} to={to} active={active}>
            {item}
          </DesktopNavLink>
        );
      })}

      {/* Separator */}
      <div className="w-px h-5 bg-[#d4af37]/20 mx-3" />

      {/* CTA */}
      <Link
        to="/contact"
        className="
          relative group overflow-hidden no-underline
          flex items-center gap-2
          px-5 py-2.5 rounded-sm
          text-[#080810] font-semibold text-[0.78rem] tracking-[0.1em] uppercase
          shadow-[0_2px_20px_rgba(212,175,55,0.4),inset_0_1px_0_rgba(255,255,255,0.25)]
          hover:shadow-[0_4px_30px_rgba(212,175,55,0.6)]
          transition-all duration-300
          active:scale-[0.97]
        "
        style={{
          fontFamily: "'Outfit', sans-serif",
          background:
            "linear-gradient(135deg, #d4af37 0%, #f5e27a 50%, #d4af37 100%)",
          backgroundSize: "200% 100%",
          backgroundPosition: "left",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundPosition = "right";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundPosition = "left";
        }}
      >
        Get in Touch
        <ChevronRight
          size={13}
          strokeWidth={2.5}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
        {/* Corner notches */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#08080a]/20" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#08080a]/20" />
      </Link>
    </nav>
  );
};

// ─── Desktop NavLink ──────────────────────────────────────────────────────────

const DesktopNavLink = ({
  to,
  children,
  active,
}: {
  to: string;
  children: React.ReactNode;
  active: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const lit = hovered || active;

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative px-4 py-2.5 no-underline block"
      style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.82rem",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: lit ? "#d4af37" : "rgba(255,255,255,0.6)",
        transition: "color 0.2s ease",
      }}
    >
      {children}

      {/* Dot indicator */}
      <span
        className={`
          absolute top-2 right-2 w-1 h-1 rounded-full bg-[#d4af37]
          transition-all duration-200
          ${lit ? "opacity-100 scale-100" : "opacity-0 scale-0"}
        `}
      />

      {/* Underline */}
      <span
        className={`
          absolute bottom-1 left-4 right-4 h-px
          bg-[linear-gradient(90deg,transparent,#d4af37,#f5e27a,#d4af37,transparent)]
          transition-all duration-300
          ${lit ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
        `}
        style={{ transformOrigin: "center" }}
      />
    </Link>
  );
};

// ─── Mobile Toggle ────────────────────────────────────────────────────────────

const MobileToggle = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="
          relative flex items-center justify-center w-11 h-11 rounded-md
          border border-[#d4af37]/30 bg-[#d4af37]/[0.06]
          transition-all duration-200
          hover:border-[#d4af37]/60 hover:bg-[#d4af37]/[0.12]
          active:scale-95
        "
        aria-label="Open menu"
      >
        <MenuIcon size={18} color="#d4af37" strokeWidth={1.75} />
        <span className="absolute top-1 left-1 w-0.5 h-0.5 bg-[#d4af37]/40 rounded-full" />
        <span className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-[#d4af37]/40 rounded-full" />
      </button>

      {open && <MobileMenu setOpen={setOpen} />}
    </div>
  );
};

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

const MobileMenu = ({ setOpen }: { setOpen: (v: boolean) => void }) => {
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] flex animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/65 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Slide-in panel */}
      <div
        className="
          relative ml-auto w-full max-w-[320px] h-full flex flex-col
          bg-[linear-gradient(160deg,#09090f_0%,#0e0e1c_45%,#09090f_100%)]
          border-l border-[#d4af37]/15
          shadow-[-20px_0_60px_rgba(0,0,0,0.75)]
          animate-slide-in-right
        "
      >
        {/* Top shimmer */}
        <div className="h-px bg-[linear-gradient(90deg,transparent,#d4af37,#f5e27a,transparent)]" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#d4af37]/10">
          <div className="flex flex-col gap-0.5">
            <span
              className="text-[#d4af37] font-bold tracking-wide leading-tight"
              style={{
                fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                fontSize: "0.95rem",
              }}
            >
              {company_name}
            </span>
            <span
              className="text-white/25 tracking-[0.2em] uppercase"
              style={{ fontFamily: "monospace", fontSize: "0.58rem" }}
            >
              Est. 1950
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="
              w-9 h-9 rounded-full flex items-center justify-center
              border border-[#d4af37]/20 bg-[#d4af37]/[0.06]
              hover:border-[#d4af37]/50 hover:bg-[#d4af37]/[0.12]
              transition-all duration-200 active:scale-90
            "
          >
            <X size={15} color="#d4af37" strokeWidth={2} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-4 py-4 overflow-y-auto">
          <ul className="space-y-1.5 list-none p-0 m-0">
            {MOBILE_NAV_ITEMS.map((item, i) => {
              const to = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const active = location.pathname === to;
              return (
                <MobileNavItem
                  key={item}
                  item={item}
                  to={to}
                  active={active}
                  delay={i}
                  setOpen={setOpen}
                />
              );
            })}
          </ul>

          {/* Mobile CTA */}
          <div className="mt-5 pt-5 border-t border-[#d4af37]/10">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="
                flex items-center justify-center gap-2 w-full py-3.5
                rounded-sm no-underline
                text-[#080810] font-semibold text-sm tracking-[0.08em] uppercase
                bg-[linear-gradient(135deg,#d4af37,#f5e27a)]
                shadow-[0_4px_20px_rgba(212,175,55,0.35)]
                active:scale-[0.98] transition-transform duration-150
              "
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Get in Touch
              <ChevronRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </nav>

        {/* Address card */}
        <div className="px-4 pb-6">
          <div className="p-4 rounded-md bg-[#d4af37]/[0.04] border border-[#d4af37]/10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
              <span
                className="text-[#d4af37]/55 tracking-[0.2em] uppercase"
                style={{ fontFamily: "monospace", fontSize: "0.58rem" }}
              >
                Location
              </span>
            </div>
            <p
              className="text-white/45 leading-relaxed m-0"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
              }}
            >
              <span className="text-white/65 font-medium">{address.line1}</span>
              {", "}
              {address.line2}
              <br />
              {address.District}, {address.state} – {address.pincode}
              <br />
              {address.country}
            </p>
            <a
              href={`tel:+91${phone_number}`}
              className="
                flex items-center gap-1.5 mt-3
                text-[#d4af37] no-underline
                hover:text-[#f5e27a] transition-colors duration-200
              "
              style={{
                fontFamily: "monospace",
                fontSize: "0.73rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              <Phone size={10} strokeWidth={2.5} />
              +91 {phone_number}
            </a>
          </div>
        </div>

        {/* Bottom shimmer */}
        <div className="h-px bg-[linear-gradient(90deg,transparent,#d4af37,#f5e27a,transparent)]" />
      </div>
    </div>
  );
};

// ─── Mobile Nav Item ──────────────────────────────────────────────────────────

const MobileNavItem = ({
  item,
  to,
  active,
  delay,
  setOpen,
}: {
  item: string;
  to: string;
  active: boolean;
  delay: number;
  setOpen: (v: boolean) => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const lit = hovered || active;

  return (
    <li
      className="animate-slide-up"
      style={{
        animationDelay: `${delay * 0.05 + 0.1}s`,
        animationFillMode: "both",
        opacity: 0,
      }}
    >
      <Link
        to={to}
        onClick={() => setOpen(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center justify-between px-4 py-3.5 rounded-md no-underline transition-all duration-200"
        style={{
          background: active
            ? "rgba(212,175,55,0.1)"
            : hovered
              ? "rgba(255,255,255,0.04)"
              : "transparent",
          border: lit
            ? "1px solid rgba(212,175,55,0.22)"
            : "1px solid transparent",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-1 h-4 rounded-full transition-all duration-200 ${
              active
                ? "bg-[#d4af37]"
                : hovered
                  ? "bg-[#d4af37]/40"
                  : "bg-white/10"
            }`}
          />
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.9rem",
              fontWeight: active ? 600 : 500,
              letterSpacing: "0.04em",
              color: lit ? "#d4af37" : "rgba(255,255,255,0.7)",
              transition: "color 0.2s ease",
            }}
          >
            {item}
          </span>
        </div>
        <ChevronRight
          size={14}
          strokeWidth={2}
          style={{
            color: lit ? "#d4af37" : "rgba(255,255,255,0.18)",
            transition: "color 0.2s ease, transform 0.2s ease",
            transform: hovered ? "translateX(2px)" : "translateX(0)",
          }}
        />
      </Link>
    </li>
  );
};

// ─── Global Styles ────────────────────────────────────────────────────────────

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');

    @keyframes spin-ring    { to { transform: rotate(360deg); } }
    @keyframes shimmer      { 0%,100% { opacity:.4 } 50% { opacity:1 } }
    @keyframes fadeIn       { from { opacity:0 } to { opacity:1 } }
    @keyframes slideUp      { from { opacity:0; transform:translateY(10px) } to { opacity:1; transform:translateY(0) } }
    @keyframes slideInRight { from { opacity:0; transform:translateX(24px) } to { opacity:1; transform:translateX(0) } }

    .animate-spin-ring      { animation: spin-ring 10s linear infinite; }
    .animate-shimmer        { animation: shimmer 2.5s ease-in-out infinite; }
    .animate-fade-in        { animation: fadeIn 0.25s ease forwards; }
    .animate-slide-up       { animation: slideUp 0.35s cubic-bezier(0.16,1,0.3,1) forwards; }
    .animate-slide-in-right { animation: slideInRight 0.35s cubic-bezier(0.16,1,0.3,1) forwards; }
  `}</style>
);
