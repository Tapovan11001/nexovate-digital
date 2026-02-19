import type { Metadata } from "next";
import {
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChefHat,
  Utensils,
  Wine,
  CalendarDays,
  ArrowRight,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Savory Bistro | Fine Dining Experience",
  description:
    "Experience culinary excellence at Savory Bistro. Farm-to-table fine dining with seasonal menus crafted by award-winning chefs. Reserve your table today.",
};

/* ─────────────────────────────────────────────
   Inline style constants (used for backgrounds
   that Tailwind arbitrary values can't cleanly do)
   ───────────────────────────────────────────── */
const palette = {
  bg: "#1a1a0e",
  accent: "#D4A06B",
  accentDark: "#B8884F",
  text: "#F5F0EB",
  subtle: "#8B7355",
  card: "#2A2A1E",
  cardBorder: "#3A3A2E",
} as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */
export default function SavoryBistroPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: palette.bg,
        color: palette.text,
        fontFamily: "var(--font-inter), var(--font-body), system-ui, sans-serif",
      }}
    >
      {/* ───────── NAVIGATION ───────── */}
      <Navigation />

      {/* ───────── HERO ───────── */}
      <HeroSection />

      {/* ───────── ABOUT ───────── */}
      <AboutSection />

      {/* ───────── MENU HIGHLIGHTS ───────── */}
      <MenuSection />

      {/* ───────── TESTIMONIALS ───────── */}
      <TestimonialsSection />

      {/* ───────── RESERVATION CTA ───────── */}
      <ReservationSection />

      {/* ───────── FOOTER ───────── */}
      <Footer />
    </div>
  );
}

/* ================================================================
   1. NAVIGATION BAR
   ================================================================ */
function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: `${palette.bg}e6`,
        borderColor: palette.cardBorder,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl tracking-wide font-bold"
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', var(--font-montserrat), serif",
              color: palette.accent,
            }}
          >
            Savory Bistro
          </a>

          {/* Nav Links — hidden on mobile, shown on md+ */}
          <div
            className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            {["Menu", "About", "Reservations", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative py-1 transition-colors duration-300 hover:opacity-100"
                style={{ color: palette.text, opacity: 0.8 }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#reservations"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: palette.accent,
              color: palette.bg,
            }}
          >
            Reserve a Table
          </a>

          {/* Mobile menu icon (decorative — no JS toggle for server component) */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className="block w-6 h-0.5 rounded"
              style={{ backgroundColor: palette.accent }}
            />
            <span
              className="block w-6 h-0.5 rounded"
              style={{ backgroundColor: palette.accent }}
            />
            <span
              className="block w-4 h-0.5 rounded"
              style={{ backgroundColor: palette.accent }}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ================================================================
   2. HERO SECTION
   ================================================================ */
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 40%, ${palette.accent}18 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 20%, ${palette.subtle}12 0%, transparent 50%),
          radial-gradient(ellipse 50% 40% at 20% 80%, ${palette.accent}0a 0%, transparent 50%),
          linear-gradient(175deg, #1a1a0e 0%, #0f0f08 40%, #1a1610 70%, #1a1a0e 100%)
        `,
      }}
    >
      {/* Decorative top-left ornament */}
      <div
        className="absolute top-32 left-8 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: palette.accent }}
      />
      {/* Decorative bottom-right ornament */}
      <div
        className="absolute bottom-20 right-12 w-80 h-80 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ backgroundColor: palette.accent }}
      />

      {/* Faint decorative lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(${palette.accent} 1px, transparent 1px),
            linear-gradient(90deg, ${palette.accent} 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Small label */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.25em] uppercase font-medium mb-8 border"
          style={{
            borderColor: `${palette.accent}40`,
            color: palette.accent,
            backgroundColor: `${palette.accent}0d`,
          }}
        >
          <Utensils size={14} />
          Est. 2010 &mdash; New Delhi
        </div>

        {/* Main heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
          style={{
            fontFamily:
              "Georgia, 'Times New Roman', var(--font-montserrat), serif",
            color: palette.text,
          }}
        >
          Experience
          <br />
          <span style={{ color: palette.accent }}>Culinary Excellence</span>
        </h1>

        {/* Sub-heading */}
        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: `${palette.text}b3` }}
        >
          Where farm-to-table philosophy meets timeless craft. Every dish is a
          story — seasonal ingredients, bold flavours, and artful presentation
          that celebrates the essence of fine dining.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: palette.accent,
              color: palette.bg,
            }}
          >
            View Our Menu
            <ArrowRight size={18} />
          </a>
          <a
            href="#reservations"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-300 hover:scale-105 border"
            style={{
              borderColor: palette.accent,
              color: palette.accent,
              backgroundColor: "transparent",
            }}
          >
            Reserve a Table
          </a>
        </div>

        {/* Scroll hint */}
        <div
          className="mt-16 flex flex-col items-center gap-2 opacity-40"
          style={{ color: palette.text }}
        >
          <span className="text-xs tracking-[0.2em] uppercase">
            Scroll to explore
          </span>
          <div
            className="w-px h-10"
            style={{ backgroundColor: palette.accent }}
          />
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   3. ABOUT SECTION
   ================================================================ */
function AboutSection() {
  const stats = [
    { value: "15+", label: "Years" },
    { value: "50+", label: "Dishes" },
    { value: "10K+", label: "Happy Guests" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Text ── */}
          <div>
            <span
              className="inline-block text-xs tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: palette.accent }}
            >
              Our Story
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
              style={{
                fontFamily:
                  "Georgia, 'Times New Roman', var(--font-montserrat), serif",
              }}
            >
              A Passion for
              <br />
              <span style={{ color: palette.accent }}>Authentic Flavours</span>
            </h2>
            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ color: `${palette.text}cc` }}
            >
              <p>
                Savory Bistro was born from a simple belief: extraordinary meals
                begin with extraordinary ingredients. Founded in 2010 by Chef
                Arjun Mehta, our kitchen is a celebration of India&apos;s rich
                produce, married with global culinary techniques refined over
                decades.
              </p>
              <p>
                Every morning, our team hand-selects seasonal vegetables from
                local organic farms, sources sustainably caught seafood, and
                partners with artisanal producers who share our commitment to
                quality. The result is a menu that changes with the seasons — yet
                always feels like home.
              </p>
              <p>
                From the warmth of our open kitchen to the curated wine list,
                every detail is designed to make your evening unforgettable.
              </p>
            </div>

            {/* Stats row */}
            <div
              className="flex gap-10 mt-10 pt-10 border-t"
              style={{ borderColor: palette.cardBorder }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl sm:text-4xl font-bold"
                    style={{
                      color: palette.accent,
                      fontFamily:
                        "Georgia, 'Times New Roman', var(--font-montserrat), serif",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-sm mt-1 tracking-wide uppercase"
                    style={{ color: palette.subtle }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Decorative "photo" placeholder ── */}
          <div className="relative">
            {/* Main rectangle */}
            <div
              className="w-full aspect-[4/5] rounded-2xl overflow-hidden"
              style={{
                background: `
                  linear-gradient(135deg, ${palette.card} 0%, #1a1610 50%, ${palette.card} 100%)
                `,
              }}
            >
              {/* Inner decorative layers */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: `
                    radial-gradient(circle at 40% 35%, ${palette.accent}22 0%, transparent 50%),
                    radial-gradient(circle at 70% 70%, ${palette.subtle}18 0%, transparent 40%)
                  `,
                }}
              >
                <div className="text-center">
                  <ChefHat
                    size={64}
                    strokeWidth={1}
                    style={{ color: palette.accent, opacity: 0.5 }}
                  />
                  <p
                    className="mt-4 text-sm tracking-[0.2em] uppercase"
                    style={{ color: palette.subtle }}
                  >
                    Chef Arjun Mehta
                  </p>
                  <p
                    className="mt-1 text-xs italic"
                    style={{ color: `${palette.subtle}99` }}
                  >
                    &ldquo;Cooking is an act of love made visible.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent square */}
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-xl -z-10"
              style={{ backgroundColor: `${palette.accent}15` }}
            />
            <div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-xl -z-10"
              style={{ backgroundColor: `${palette.accent}10` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   4. MENU HIGHLIGHTS SECTION
   ================================================================ */
function MenuSection() {
  const dishes = [
    {
      name: "Truffle Risotto",
      price: "1,200",
      description:
        "Arborio rice slow-cooked in a parmesan broth, finished with black truffle shavings and aged pecorino. A dish of pure, earthy elegance.",
      gradient: `linear-gradient(160deg, #3d3520 0%, ${palette.card} 50%, #2a2418 100%)`,
      icon: <Utensils size={28} strokeWidth={1.5} />,
    },
    {
      name: "Pan-Seared Salmon",
      price: "1,500",
      description:
        "Wild-caught Atlantic salmon with a crispy skin crust, served on a bed of saffron-infused couscous with a delicate dill beurre blanc.",
      gradient: `linear-gradient(160deg, #2a2c20 0%, ${palette.card} 50%, #1e2018 100%)`,
      icon: <Wine size={28} strokeWidth={1.5} />,
    },
    {
      name: "Wagyu Steak",
      price: "2,800",
      description:
        "A5-grade Wagyu beef, seared to perfection and rested. Accompanied by truffle mashed potato, roasted heritage carrots, and a red wine reduction.",
      gradient: `linear-gradient(160deg, #352020 0%, ${palette.card} 50%, #2a1a1a 100%)`,
      icon: <ChefHat size={28} strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      id="menu"
      className="py-24 sm:py-32"
      style={{ backgroundColor: `${palette.bg}` }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs tracking-[0.25em] uppercase font-medium mb-4"
            style={{ color: palette.accent }}
          >
            Curated Selection
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', var(--font-montserrat), serif",
            }}
          >
            Chef&apos;s Specials
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: `${palette.text}99` }}
          >
            Our most celebrated creations — crafted with seasonal ingredients
            and served with passion.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border"
              style={{
                backgroundColor: palette.card,
                borderColor: palette.cardBorder,
              }}
            >
              {/* Image placeholder */}
              <div
                className="relative h-56 flex items-center justify-center overflow-hidden"
                style={{ background: dish.gradient }}
              >
                {/* Subtle animated glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${palette.accent}1a 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="transition-transform duration-500 group-hover:scale-110"
                  style={{ color: palette.accent, opacity: 0.35 }}
                >
                  {dish.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="text-xl font-bold"
                    style={{
                      fontFamily:
                        "Georgia, 'Times New Roman', var(--font-montserrat), serif",
                    }}
                  >
                    {dish.name}
                  </h3>
                  <span
                    className="text-lg font-semibold whitespace-nowrap"
                    style={{ color: palette.accent }}
                  >
                    &#8377;{dish.price}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: `${palette.text}99` }}
                >
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View full menu link */}
        <div className="text-center mt-14">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:gap-4"
            style={{ color: palette.accent }}
          >
            View Full Menu
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   5. TESTIMONIALS SECTION
   ================================================================ */
function TestimonialsSection() {
  const reviews = [
    {
      text: "An absolutely unforgettable dining experience. The Wagyu steak was the best I've ever tasted — cooked to absolute perfection. The ambience, the service, everything was flawless.",
      author: "Priya Sharma",
      role: "Food Critic, The Delhi Table",
      stars: 5,
    },
    {
      text: "We celebrated our anniversary here and it was magical. The truffle risotto is heaven on a plate. The wine pairing recommendations from the sommelier were spot-on.",
      author: "Rahul & Meera Kapoor",
      role: "Regular Guests",
      stars: 5,
    },
    {
      text: "Savory Bistro sets the standard for fine dining in the city. Their commitment to seasonal, locally-sourced ingredients shines through in every single dish.",
      author: "Vikram Desai",
      role: "Executive Chef, The Oberoi",
      stars: 5,
    },
  ];

  return (
    <section
      className="py-24 sm:py-32"
      style={{ backgroundColor: palette.card }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs tracking-[0.25em] uppercase font-medium mb-4"
            style={{ color: palette.accent }}
          >
            Guest Voices
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', var(--font-montserrat), serif",
            }}
          >
            What Our Guests Say
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: palette.bg,
                borderColor: palette.cardBorder,
              }}
            >
              {/* Quote mark */}
              <Quote
                size={32}
                className="mb-4"
                style={{ color: `${palette.accent}40` }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={palette.accent}
                    style={{ color: palette.accent }}
                  />
                ))}
              </div>

              {/* Review text */}
              <p
                className="text-sm leading-relaxed mb-6 italic"
                style={{ color: `${palette.text}cc` }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div
                className="pt-4 border-t"
                style={{ borderColor: palette.cardBorder }}
              >
                <div className="font-semibold text-sm">{review.author}</div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: palette.subtle }}
                >
                  {review.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   6. RESERVATION CTA SECTION
   ================================================================ */
function ReservationSection() {
  return (
    <section
      id="reservations"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, ${palette.accent} 0%, ${palette.accentDark} 40%, #96703A 100%)
        `,
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, ${palette.bg} 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium mb-4"
            style={{ color: `${palette.bg}cc` }}
          >
            <CalendarDays size={14} />
            Book Your Experience
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', var(--font-montserrat), serif",
              color: palette.bg,
            }}
          >
            Reserve Your Table
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto text-base leading-relaxed"
            style={{ color: `${palette.bg}cc` }}
          >
            Join us for an unforgettable evening. Select your preferred date and
            time, and we&apos;ll take care of the rest.
          </p>
        </div>

        {/* Form */}
        <div
          className="rounded-2xl p-8 sm:p-10 border"
          style={{
            backgroundColor: `${palette.bg}f2`,
            borderColor: palette.cardBorder,
          }}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                className="block text-xs tracking-[0.15em] uppercase font-medium mb-2"
                style={{ color: palette.subtle }}
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300 focus:ring-2 border"
                style={{
                  backgroundColor: palette.card,
                  borderColor: palette.cardBorder,
                  color: palette.text,
                }}
                readOnly
              />
            </div>

            {/* Date */}
            <div>
              <label
                className="block text-xs tracking-[0.15em] uppercase font-medium mb-2"
                style={{ color: palette.subtle }}
              >
                Preferred Date
              </label>
              <input
                type="text"
                placeholder="February 25, 2026"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300 focus:ring-2 border"
                style={{
                  backgroundColor: palette.card,
                  borderColor: palette.cardBorder,
                  color: palette.text,
                }}
                readOnly
              />
            </div>

            {/* Guests */}
            <div>
              <label
                className="block text-xs tracking-[0.15em] uppercase font-medium mb-2"
                style={{ color: palette.subtle }}
              >
                Number of Guests
              </label>
              <input
                type="text"
                placeholder="2 Guests"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300 focus:ring-2 border"
                style={{
                  backgroundColor: palette.card,
                  borderColor: palette.cardBorder,
                  color: palette.text,
                }}
                readOnly
              />
            </div>

            {/* Time */}
            <div>
              <label
                className="block text-xs tracking-[0.15em] uppercase font-medium mb-2"
                style={{ color: palette.subtle }}
              >
                Preferred Time
              </label>
              <input
                type="text"
                placeholder="7:30 PM"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300 focus:ring-2 border"
                style={{
                  backgroundColor: palette.card,
                  borderColor: palette.cardBorder,
                  color: palette.text,
                }}
                readOnly
              />
            </div>
          </div>

          {/* Special requests */}
          <div className="mt-6">
            <label
              className="block text-xs tracking-[0.15em] uppercase font-medium mb-2"
              style={{ color: palette.subtle }}
            >
              Special Requests
            </label>
            <textarea
              placeholder="Allergies, celebrations, seating preferences..."
              rows={3}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none transition-all duration-300 focus:ring-2 border"
              style={{
                backgroundColor: palette.card,
                borderColor: palette.cardBorder,
                color: palette.text,
              }}
              readOnly
            />
          </div>

          {/* Submit */}
          <div className="mt-8 text-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{
                backgroundColor: palette.accent,
                color: palette.bg,
              }}
            >
              Book Now
              <ArrowRight size={18} />
            </button>
            <p
              className="mt-4 text-xs"
              style={{ color: palette.subtle }}
            >
              We&apos;ll confirm your reservation via email within 2 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   7. FOOTER
   ================================================================ */
function Footer() {
  return (
    <footer
      id="contact"
      className="pt-20 pb-8 border-t"
      style={{ backgroundColor: palette.bg, borderColor: palette.cardBorder }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{
                fontFamily:
                  "Georgia, 'Times New Roman', var(--font-montserrat), serif",
                color: palette.accent,
              }}
            >
              Savory Bistro
            </h3>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: `${palette.text}99` }}
            >
              An intimate fine-dining destination in the heart of New Delhi,
              dedicated to celebrating the art of seasonal, farm-to-table
              cuisine.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase font-semibold mb-6"
              style={{ color: palette.accent }}
            >
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm" style={{ color: `${palette.text}cc` }}>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: palette.accent }}
                />
                42 Lodhi Road, New Delhi, India 110003
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" style={{ color: palette.accent }} />
                +91 11 2461 0000
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" style={{ color: palette.accent }} />
                hello@savorybistro.in
              </li>
            </ul>
          </div>

          {/* Column 3: Hours */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase font-semibold mb-6"
              style={{ color: palette.accent }}
            >
              Opening Hours
            </h4>
            <ul
              className="space-y-3 text-sm"
              style={{ color: `${palette.text}cc` }}
            >
              <li className="flex items-center gap-3">
                <Clock size={16} className="shrink-0" style={{ color: palette.accent }} />
                <div>
                  <div className="font-medium" style={{ color: palette.text }}>
                    Monday &ndash; Friday
                  </div>
                  <div>12:00 PM &ndash; 3:00 PM, 7:00 PM &ndash; 11:00 PM</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="shrink-0" style={{ color: palette.accent }} />
                <div>
                  <div className="font-medium" style={{ color: palette.text }}>
                    Saturday &ndash; Sunday
                  </div>
                  <div>12:00 PM &ndash; 11:30 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: palette.cardBorder }}
        >
          <p className="text-xs" style={{ color: palette.subtle }}>
            &copy; {new Date().getFullYear()} Savory Bistro. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs" style={{ color: palette.subtle }}>
            <a
              href="/"
              className="transition-colors duration-300 hover:underline"
              style={{ color: palette.accent }}
            >
              Made by Nexovate Digital
            </a>
            <span className="hidden sm:inline" style={{ color: palette.cardBorder }}>|</span>
            <a
              href="/"
              className="transition-colors duration-300 hover:underline"
              style={{ color: palette.subtle }}
            >
              &larr; Back to Nexovate Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
