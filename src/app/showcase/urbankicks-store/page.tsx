"use client";

import { useState } from "react";
import {
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  Star,
  Truck,
  Shield,
  ChevronRight,
  Mail,
  Instagram,
  Twitter,
  MapPin,
  Heart,
} from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const products = [
  {
    name: "Air Phantom X",
    price: "\u20B98,999",
    badge: "NEW",
    gradient: "from-[#1a1a1a] via-[#2a1a0a] to-[#1a0d00]",
    accentGlow: "bg-orange-500/20",
    accent: "text-orange-400",
    glowRing: "group-hover:shadow-[0_8px_40px_rgba(249,115,22,0.15)]",
  },
  {
    name: "Shadow Runner Pro",
    price: "\u20B912,499",
    badge: "NEW",
    gradient: "from-[#1a1a1a] via-[#0a1a2a] to-[#000d1a]",
    accentGlow: "bg-blue-500/20",
    accent: "text-blue-400",
    glowRing: "group-hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)]",
  },
  {
    name: "Urban Glide 3.0",
    price: "\u20B96,999",
    badge: null,
    gradient: "from-[#1a1a1a] via-[#0a2a1a] to-[#001a0d]",
    accentGlow: "bg-emerald-500/20",
    accent: "text-emerald-400",
    glowRing: "group-hover:shadow-[0_8px_40px_rgba(16,185,129,0.15)]",
  },
  {
    name: "Blaze Retro High",
    price: "\u20B914,999",
    badge: null,
    gradient: "from-[#1a1a1a] via-[#2a0a0a] to-[#1a0000]",
    accentGlow: "bg-red-500/20",
    accent: "text-red-400",
    glowRing: "group-hover:shadow-[0_8px_40px_rgba(239,68,68,0.15)]",
  },
];

const categories = [
  {
    name: "Running",
    tagline: "Engineered for Speed",
    gradient: "from-[#171717] via-[#262626] to-[#F97316]/20",
  },
  {
    name: "Lifestyle",
    tagline: "Everyday Statement",
    gradient: "from-[#171717] via-[#262626] to-[#737373]/30",
  },
  {
    name: "Limited Edition",
    tagline: "Exclusive & Rare",
    gradient: "from-[#171717] via-[#262626] to-[#FBBF24]/20",
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

export default function UrbanKicksStorePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Next.js App Router hoists <title> from client components */}
      <title>UrbanKicks | Premium Streetwear &amp; Sneakers</title>
      <meta
        name="description"
        content="Shop exclusive sneaker drops, limited edition streetwear, and premium kicks at UrbanKicks. Built by Nexovate Digital."
      />

      <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] font-[family-name:var(--font-inter)] overflow-x-hidden">
        {/* ═══════════════════════════════════════════════
            1. NAVIGATION BAR
            ═══════════════════════════════════════════════ */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-[72px]">
              {/* Logo */}
              <Link href="/showcase/urbankicks-store" className="flex items-center gap-2.5">
                <ShoppingBag className="w-6 h-6 text-[#F97316]" strokeWidth={2.5} />
                <span className="font-[family-name:var(--font-montserrat)] text-xl font-extrabold tracking-wider uppercase">
                  Urban<span className="text-[#F97316]">Kicks</span>
                </span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-10">
                {["New Drops", "Collections", "About"].map((item) => (
                  <button
                    key={item}
                    className="text-[13px] font-medium text-[#FAFAFA]/60 hover:text-[#F97316] transition-colors duration-300 tracking-widest uppercase"
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-5">
                <button className="relative group" aria-label="Shopping cart">
                  <ShoppingBag className="w-[22px] h-[22px] text-[#FAFAFA]/60 group-hover:text-[#F97316] transition-colors duration-300" />
                  <span className="absolute -top-2 -right-2.5 min-w-[20px] h-5 rounded-full bg-[#F97316] text-[#0A0A0A] text-[10px] font-bold flex items-center justify-center px-1">
                    3
                  </span>
                </button>

                <button
                  className="md:hidden text-[#FAFAFA]/60 hover:text-[#FAFAFA] transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden bg-[#0A0A0A] border-t border-white/[0.06] overflow-hidden transition-all duration-300 ${
              mobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 py-6 space-y-5">
              {["New Drops", "Collections", "About"].map((item) => (
                <button
                  key={item}
                  className="block w-full text-left text-base font-medium text-[#FAFAFA]/60 hover:text-[#F97316] transition-colors tracking-wide uppercase"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* ═══════════════════════════════════════════════
            2. HERO SECTION
            ═══════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
              {/* Left: Copy */}
              <div className="space-y-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F97316]/30 bg-[#F97316]/5">
                  <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
                  <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#FB923C]">
                    Exclusive Drop &mdash; Feb 2026
                  </span>
                </div>

                <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-extrabold leading-[0.92] tracking-tight">
                  Step Into
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#F97316]">
                    The Future
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-[#737373] max-w-lg leading-relaxed">
                  Exclusive drops. Limited runs. Premium streetwear sneakers
                  designed for those who set trends, not follow them.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#F97316] hover:bg-[#FB923C] text-[#0A0A0A] font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:shadow-[0_0_50px_rgba(249,115,22,0.35)]">
                    Shop Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="inline-flex items-center gap-2 px-8 py-4 border border-[#FAFAFA]/15 hover:border-[#FAFAFA]/40 text-[#FAFAFA] font-semibold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-white/[0.04]">
                    View Collections
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6 pt-4">
                  {[
                    { icon: Truck, text: "Free Shipping" },
                    { icon: Shield, text: "100% Authentic" },
                    { icon: Star, text: "Top Rated" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-[#737373]">
                      <Icon className="w-4 h-4 text-[#F97316]/60" />
                      <span className="text-xs font-medium tracking-wide">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Shoe Visual */}
              <div className="relative flex items-center justify-center lg:justify-end">
                {/* Orange glow */}
                <div className="absolute w-72 h-72 sm:w-[380px] sm:h-[380px] rounded-full bg-[#F97316]/[0.12] blur-[120px]" />
                <div className="absolute w-48 h-48 rounded-full bg-[#FB923C]/[0.08] blur-[80px] translate-x-12 translate-y-12" />

                {/* Shoe container */}
                <div className="relative w-80 h-80 sm:w-[440px] sm:h-[440px]">
                  {/* Rotating orbits */}
                  <div className="absolute inset-2 rounded-full border border-[#F97316]/[0.12] uk-spin-slow" />
                  <div className="absolute inset-10 rounded-full border border-dashed border-[#FB923C]/[0.08] uk-spin-reverse" />

                  {/* Main shoe shape */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Shoe body */}
                      <div className="w-72 h-44 sm:w-[340px] sm:h-52 rounded-[44px] bg-gradient-to-br from-[#262626] via-[#1a1a1a] to-[#0A0A0A] border border-white/[0.06] shadow-2xl shadow-orange-500/[0.08] -rotate-[15deg] relative overflow-hidden">
                        {/* Swoosh line */}
                        <div className="absolute bottom-7 left-8 right-14 h-[3px] bg-gradient-to-r from-[#F97316] via-[#F97316]/60 to-transparent rounded-full" />
                        <div className="absolute bottom-11 left-12 right-24 h-[1.5px] bg-gradient-to-r from-[#FB923C]/40 to-transparent rounded-full" />
                        {/* Sole */}
                        <div className="absolute bottom-0 left-4 right-4 h-[14px] bg-gradient-to-r from-[#F97316]/20 via-[#F97316]/[0.08] to-transparent rounded-b-[44px]" />
                        {/* Upper texture */}
                        <div className="absolute top-7 left-10 w-20 h-[1px] bg-white/[0.04] rotate-[8deg]" />
                        <div className="absolute top-11 left-14 w-14 h-[1px] bg-white/[0.04] rotate-[8deg]" />
                        <div className="absolute top-15 left-18 w-10 h-[1px] bg-white/[0.04] rotate-[8deg]" />
                        {/* Inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#F97316]/[0.04] to-transparent" />
                        {/* Collar highlight */}
                        <div className="absolute top-3 right-6 w-16 h-16 rounded-full bg-white/[0.02]" />
                      </div>
                      {/* Shadow */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-52 h-5 bg-[#F97316]/[0.06] blur-2xl rounded-full" />
                    </div>
                  </div>

                  {/* Floating price tag */}
                  <div className="absolute top-6 right-2 sm:right-0 px-5 py-3 bg-[#171717]/90 backdrop-blur-sm border border-white/[0.08] rounded-2xl shadow-xl">
                    <span className="text-[11px] text-[#737373] font-medium tracking-wide">Starting at</span>
                    <p className="text-xl font-extrabold font-[family-name:var(--font-montserrat)] text-[#F97316]">
                      {"\u20B9"}6,999
                    </p>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute bottom-10 left-0 sm:-left-2 px-5 py-2.5 bg-[#F97316] rounded-2xl shadow-xl shadow-orange-500/25">
                    <p className="text-sm font-extrabold text-[#0A0A0A] tracking-wide">Limited Drop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            3. FEATURED PRODUCTS (NEW DROPS)
            ═══════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 relative">
          {/* Subtle top separator */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex items-end justify-between mb-14">
              <div>
                <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  New Drops
                </h2>
                <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#F97316] to-[#FB923C] rounded-full" />
              </div>
              <button className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:text-[#FB923C] transition-colors group">
                View All
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
                <div
                  key={product.name}
                  className={`group relative bg-[#171717] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer ${product.glowRing}`}
                >
                  {/* Product Image Area */}
                  <div className={`relative aspect-[3/4] bg-gradient-to-br ${product.gradient} overflow-hidden`}>
                    {/* Centered shoe shape */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`absolute w-28 h-28 sm:w-36 sm:h-36 ${product.accentGlow} blur-3xl rounded-full transition-all duration-500 group-hover:scale-125`} />

                      <div className="relative transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                        <div className="w-36 h-[88px] sm:w-44 sm:h-[100px] rounded-[24px] bg-gradient-to-br from-white/[0.09] to-white/[0.02] border border-white/[0.07] -rotate-12 shadow-xl relative overflow-hidden">
                          <div className="absolute bottom-3 left-4 right-8 h-[2px] bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                          <div className="absolute bottom-0 left-2 right-2 h-[6px] bg-white/[0.03] rounded-b-[24px]" />
                          <div className="absolute top-4 left-5 w-10 h-[1px] bg-white/[0.08] rotate-6" />
                          <div className="absolute top-7 left-7 w-7 h-[1px] bg-white/[0.08] rotate-6" />
                        </div>
                      </div>
                    </div>

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#F97316] rounded-lg">
                        <span className="text-[10px] font-extrabold tracking-widest text-[#0A0A0A] uppercase">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Wishlist heart */}
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50 hover:scale-110">
                      <Heart className="w-4 h-4 text-white/80" />
                    </button>

                    {/* Bottom label overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                      <p className={`text-[11px] font-bold tracking-[0.15em] uppercase ${product.accent}`}>
                        {product.name.split(" ").slice(0, 2).join(" ")}
                      </p>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-4 sm:p-5">
                    <div className="mb-3">
                      <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-sm sm:text-[15px] text-[#FAFAFA] tracking-wide leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-[#737373] text-[11px] mt-1 tracking-wide">Premium Streetwear</p>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="font-[family-name:var(--font-montserrat)] font-extrabold text-base sm:text-lg text-[#FAFAFA]">
                        {product.price}
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#F97316] text-[#F97316]" />
                        ))}
                      </div>
                    </div>

                    {/* Add to Cart - CSS-only hover reveal */}
                    <button className="w-full py-2.5 sm:py-3 rounded-xl bg-[#F97316] hover:bg-[#FB923C] text-[#0A0A0A] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:shadow-[0_0_24px_rgba(249,115,22,0.3)]">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View All */}
            <div className="mt-10 flex justify-center sm:hidden">
              <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316]">
                View All Drops
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            4. CATEGORIES SECTION
            ═══════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-14">
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Shop by Category
              </h2>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#F97316] to-[#FB923C] rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="group relative h-72 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* BG with hover zoom */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} transition-transform duration-700 ease-out group-hover:scale-110`}
                  />

                  {/* Dot texture */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  {/* Darkening overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/30 to-transparent" />

                  {/* Category content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#FB923C] mb-2">
                      {cat.tagline}
                    </p>
                    <h3 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl font-extrabold text-[#FAFAFA]">
                      {cat.name}
                    </h3>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FAFAFA]/60 group-hover:text-[#F97316] transition-colors duration-300">
                      Explore
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            5. BRAND STORY SECTION
            ═══════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32">
          {/* Subtle separator */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Visual Block */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#171717] via-[#1f1f1f] to-[#171717] border border-white/[0.05] overflow-hidden relative">
                  {/* Decorative glows */}
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-[#F97316]/[0.08] blur-[100px]" />
                  <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-[#FB923C]/[0.05] blur-[80px]" />

                  {/* Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-montserrat)] text-[120px] sm:text-[180px] font-extrabold text-white/[0.015] leading-none select-none">
                      UK
                    </span>
                  </div>

                  {/* Layered shoe shapes */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-52 h-32 sm:w-64 sm:h-36 rounded-[36px] bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/[0.05] -rotate-12 shadow-2xl" />
                    <div className="w-44 h-28 sm:w-56 sm:h-32 rounded-[32px] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.03] rotate-6 -mt-16 ml-8" />
                  </div>

                  {/* Year badge */}
                  <div className="absolute bottom-8 left-8 px-5 py-2.5 bg-[#F97316]/[0.08] border border-[#F97316]/20 rounded-2xl backdrop-blur-sm">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#FB923C] uppercase">
                      Est. 2021
                    </span>
                  </div>
                </div>

                {/* Offset border accent */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-[#F97316]/[0.08] -z-10" />
              </div>

              {/* Right: Story Text */}
              <div className="space-y-8">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F97316]">
                    Our Story
                  </span>
                  <h2 className="mt-5 font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                    Born on the
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FB923C]">
                      Streets
                    </span>
                  </h2>
                </div>

                <div className="space-y-5">
                  <p className="text-[#737373] text-base sm:text-[17px] leading-[1.8]">
                    UrbanKicks started with a simple belief: the streets are the real runway.
                    Born from late-night skate sessions and sunrise rooftop hangs, we set out
                    to create sneakers that speak louder than words. Every silhouette we design
                    carries the raw energy of the city &mdash; the grit, the hustle, the
                    unstoppable pulse of street culture.
                  </p>

                  <p className="text-[#737373] text-base sm:text-[17px] leading-[1.8]">
                    We don&apos;t follow trends. We don&apos;t chase hype for the sake of it.
                    We build for the ones who walk their own path and leave footprints
                    worth following.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.06]">
                  {[
                    { number: "50K+", label: "Kicks Sold" },
                    { number: "120+", label: "Countries" },
                    { number: "15", label: "Exclusive Collabs" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F97316]">
                        {stat.number}
                      </p>
                      <p className="text-xs sm:text-sm text-[#737373] mt-1.5 font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            6. NEWSLETTER SECTION
            ═══════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Orange gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F97316] via-[#FB923C] to-[#EA580C]" />

              {/* Texture overlay */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Glow blobs */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.08] rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/[0.08] rounded-full blur-[100px]" />

              {/* Content */}
              <div className="relative px-6 sm:px-12 lg:px-20 py-16 sm:py-24 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.08] mb-8">
                  <Mail className="w-4 h-4 text-[#0A0A0A]" />
                  <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#0A0A0A]">
                    Newsletter
                  </span>
                </div>

                <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight leading-tight">
                  Get First Access
                  <br />
                  to Drops
                </h2>

                <p className="mt-5 text-[#0A0A0A]/60 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
                  Be the first to know when new kicks drop. Exclusive early access,
                  restocks, and members-only deals.
                </p>

                {/* Email Form */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:flex-1 px-6 py-4 rounded-xl bg-[#0A0A0A]/[0.08] border border-[#0A0A0A]/[0.15] placeholder:text-[#0A0A0A]/35 text-[#0A0A0A] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#0A0A0A]/25 focus:bg-[#0A0A0A]/[0.12] transition-all"
                  />
                  <button className="w-full sm:w-auto px-8 py-4 bg-[#0A0A0A] hover:bg-[#171717] text-[#FAFAFA] font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:shadow-2xl whitespace-nowrap">
                    Subscribe
                  </button>
                </div>

                <p className="mt-6 text-[#0A0A0A]/40 text-sm font-medium">
                  Join{" "}
                  <span className="font-bold text-[#0A0A0A]/60">25,000+</span>{" "}
                  sneakerheads
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            7. FOOTER
            ═══════════════════════════════════════════════ */}
        <footer className="bg-[#0A0A0A] border-t border-white/[0.06] pt-16 sm:pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2.5 mb-5">
                  <ShoppingBag className="w-5 h-5 text-[#F97316]" strokeWidth={2.5} />
                  <span className="font-[family-name:var(--font-montserrat)] text-lg font-extrabold tracking-wider uppercase">
                    Urban<span className="text-[#F97316]">Kicks</span>
                  </span>
                </div>
                <p className="text-sm text-[#737373] leading-relaxed max-w-xs">
                  Premium streetwear sneakers for those who walk their own path.
                  Born on the streets, built for the future.
                </p>
                <div className="flex gap-3 mt-6">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Twitter, label: "Twitter" },
                  ].map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      className="w-10 h-10 rounded-xl bg-[#171717] hover:bg-[#262626] flex items-center justify-center transition-all duration-300 group hover:shadow-lg"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4 text-[#737373] group-hover:text-[#F97316] transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Shop Links */}
              <div>
                <h4 className="font-[family-name:var(--font-montserrat)] font-bold text-[13px] tracking-[0.12em] uppercase text-[#FAFAFA] mb-6">
                  Shop
                </h4>
                <ul className="space-y-3.5">
                  {["New Drops", "Collections", "Running", "Lifestyle", "Sale"].map((item) => (
                    <li key={item}>
                      <button className="text-sm text-[#737373] hover:text-[#F97316] transition-colors duration-300">
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help Links */}
              <div>
                <h4 className="font-[family-name:var(--font-montserrat)] font-bold text-[13px] tracking-[0.12em] uppercase text-[#FAFAFA] mb-6">
                  Help
                </h4>
                <ul className="space-y-3.5">
                  {["FAQs", "Shipping Info", "Returns & Exchange", "Size Guide", "Contact Us"].map(
                    (item) => (
                      <li key={item}>
                        <button className="text-sm text-[#737373] hover:text-[#F97316] transition-colors duration-300">
                          {item}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Follow */}
              <div>
                <h4 className="font-[family-name:var(--font-montserrat)] font-bold text-[13px] tracking-[0.12em] uppercase text-[#FAFAFA] mb-6">
                  Follow
                </h4>
                <ul className="space-y-3.5">
                  <li>
                    <button className="text-sm text-[#737373] hover:text-[#F97316] transition-colors duration-300 flex items-center gap-2.5">
                      <Instagram className="w-4 h-4" />
                      @urbankicks
                    </button>
                  </li>
                  <li>
                    <button className="text-sm text-[#737373] hover:text-[#F97316] transition-colors duration-300 flex items-center gap-2.5">
                      <Twitter className="w-4 h-4" />
                      @urbankicks
                    </button>
                  </li>
                  <li>
                    <button className="text-sm text-[#737373] hover:text-[#F97316] transition-colors duration-300 flex items-center gap-2.5">
                      <MapPin className="w-4 h-4" />
                      Mumbai, India
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-white/[0.06]">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#737373]">
                  <span>&copy; 2026 UrbanKicks. All rights reserved.</span>
                  <span className="hidden sm:inline text-white/10">|</span>
                  <Link
                    href="/"
                    className="text-[#F97316] hover:text-[#FB923C] transition-colors font-semibold"
                  >
                    Made by Nexovate Digital
                  </Link>
                </div>

                {/* Payment Methods */}
                <div className="flex items-center gap-2">
                  {["Visa", "Mastercard", "UPI", "RuPay"].map((method) => (
                    <span
                      key={method}
                      className="px-3 py-1.5 bg-[#171717] border border-white/[0.05] rounded-lg text-[10px] font-semibold text-[#737373] tracking-wider"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back to Nexovate */}
              <div className="mt-8 text-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs text-[#737373] hover:text-[#FB923C] transition-colors font-medium group"
                >
                  <ArrowRight className="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
                  Back to Nexovate Digital
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* ═══════════════════════════════════════════════
            GLOBAL STYLES (animations)
            ═══════════════════════════════════════════════ */}
        <style>{`
          @keyframes uk-spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes uk-spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          .uk-spin-slow {
            animation: uk-spin-slow 25s linear infinite;
          }
          .uk-spin-reverse {
            animation: uk-spin-reverse 35s linear infinite;
          }
        `}</style>
      </div>
    </>
  );
}
