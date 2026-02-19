"use client";

import { useState } from "react";
import {
  Rocket,
  BarChart3,
  Zap,
  Users,
  Plug,
  FileBarChart,
  Headphones,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Play,
  TrendingUp,
  DollarSign,
  UserCheck,
  Globe,
} from "lucide-react";

// ─── Color Tokens ───
const COLORS = {
  bg: "#0F0B1A",
  accent: "#7C3AED",
  accentLight: "#A78BFA",
  text: "#F8F5FF",
  subtle: "#6B5B8A",
  card: "#1A1428",
  gradientFrom: "#7C3AED",
  gradientTo: "#4F46E5",
};

// ─── FAQ Data ───
const faqData = [
  {
    q: "Is there really a free trial?",
    a: "Absolutely. Every new account starts with a full-featured 14-day free trial. No credit card required. You get access to all Pro features so you can evaluate JetRocket with zero risk.",
  },
  {
    q: "How secure is my data?",
    a: "Security is our top priority. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are SOC 2 Type II certified and undergo regular third-party penetration testing. Your data is hosted in ISO 27001-certified data centers.",
  },
  {
    q: "What integrations are available?",
    a: "JetRocket integrates with 200+ tools out of the box including Slack, HubSpot, Salesforce, Stripe, Google Analytics, Segment, Zapier, and more. Our open API lets you build custom integrations for anything else.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term contracts. If you cancel, you will retain access until the end of your current billing period.",
  },
  {
    q: "Do you offer custom enterprise plans?",
    a: "Yes. Enterprise plans include dedicated infrastructure, custom SLAs, priority support, SSO/SAML, and advanced compliance features. Contact our sales team for a tailored quote.",
  },
];

// ─── Feature Data ───
const features = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Watch your metrics update live. Track user behavior, conversion funnels, and revenue in real time with zero lag.",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description:
      "Automate repetitive workflows with intelligent triggers. Set up campaigns, alerts, and actions that run on autopilot.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Shared dashboards, role-based access, comments, and @mentions. Keep your entire team aligned and moving fast.",
  },
  {
    icon: Plug,
    title: "API Integrations",
    description:
      "Connect with 200+ tools you already use. REST & GraphQL APIs, webhooks, and native integrations with one click.",
  },
  {
    icon: FileBarChart,
    title: "Custom Reports",
    description:
      "Build pixel-perfect reports with drag-and-drop. Schedule automated delivery to stakeholders every week or month.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our support engineers are available around the clock. Average response time under 4 minutes via live chat.",
  },
];

// ─── Pricing Data ───
const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for side projects and early exploration.",
    features: [
      "Up to 1,000 events/mo",
      "3 dashboards",
      "7-day data retention",
      "Community support",
      "1 team member",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For growing startups that need real insights.",
    features: [
      "Unlimited events",
      "Unlimited dashboards",
      "12-month data retention",
      "Priority support",
      "Up to 10 team members",
      "Custom reports",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/mo",
    description: "For teams that need security, scale, and control.",
    features: [
      "Everything in Pro",
      "Unlimited retention",
      "Dedicated account manager",
      "SSO & SAML",
      "Custom SLA",
      "Audit logs",
      "SOC 2 compliance",
      "Unlimited team members",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

// ─── Trusted Companies ───
const trustedCompanies = [
  "TechCorp",
  "InnoVate",
  "DataFlow",
  "CloudSync",
  "ScaleUp",
  "NeuralOps",
];

// ─── Dashboard Table Data ───
const tableData = [
  { campaign: "Summer Launch", visitors: "4,281", conversion: "3.2%", revenue: "$12,840", status: "Active" },
  { campaign: "Product Hunt", visitors: "8,912", conversion: "5.7%", revenue: "$24,100", status: "Active" },
  { campaign: "Q4 Retarget", visitors: "2,347", conversion: "4.1%", revenue: "$8,420", status: "Paused" },
  { campaign: "Newsletter", visitors: "1,893", conversion: "2.8%", revenue: "$3,640", status: "Active" },
];

// ─── FAQ Accordion Item ───
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-[#2A2040] rounded-xl overflow-hidden transition-colors duration-300 hover:border-[#7C3AED]/50"
      style={{ backgroundColor: COLORS.card }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
      >
        <span
          className="font-heading text-lg font-bold"
          style={{ color: COLORS.text }}
        >
          {question}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 shrink-0 ml-4" style={{ color: COLORS.accentLight }} />
        ) : (
          <ChevronDown className="w-5 h-5 shrink-0 ml-4" style={{ color: COLORS.subtle }} />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p
          className="px-6 pb-5 leading-relaxed"
          style={{ color: COLORS.subtle }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
//  MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════

export default function JetRocketSaaSPage() {
  return (
    <div
      className="min-h-screen font-body"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
    >
      {/* ───────────── NAVIGATION ───────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl" style={{ backgroundColor: "rgba(15,11,26,0.85)" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${COLORS.gradientFrom}, ${COLORS.gradientTo})`,
              }}
            >
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-xl font-bold" style={{ color: COLORS.text }}>
              JetRocket
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium transition-colors duration-200 hover:text-[#A78BFA]" style={{ color: COLORS.subtle }}>
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium transition-colors duration-200 hover:text-[#A78BFA]" style={{ color: COLORS.subtle }}>
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium transition-colors duration-200 hover:text-[#A78BFA]" style={{ color: COLORS.subtle }}>
              FAQ
            </a>
          </div>

          {/* CTA */}
          <a
            href="#cta"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${COLORS.gradientFrom}, ${COLORS.gradientTo})`,
            }}
          >
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* ───────────── HERO SECTION ───────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
            style={{ background: COLORS.accent }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
            style={{ background: COLORS.gradientTo }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.07] blur-[80px]"
            style={{ background: COLORS.accentLight }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7C3AED]/30 mb-8" style={{ backgroundColor: "rgba(124,58,237,0.1)" }}>
            <div className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-xs font-medium" style={{ color: COLORS.accentLight }}>
              Now in public beta &mdash; join 2,400+ teams
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            Launch Your Startup{" "}
            <br className="hidden md:block" />
            at{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${COLORS.gradientFrom}, ${COLORS.accentLight}, ${COLORS.gradientTo})`,
              }}
            >
              Light Speed
            </span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: COLORS.subtle }}
          >
            JetRocket is the all-in-one analytics and growth platform that helps
            startups understand their users, optimize funnels, and scale revenue
            &mdash; without the enterprise complexity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${COLORS.gradientFrom}, ${COLORS.gradientTo})`,
              }}
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold border transition-all duration-200 hover:bg-white/5 hover:scale-105"
              style={{ borderColor: "rgba(124,58,237,0.4)", color: COLORS.accentLight }}
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </a>
          </div>

          {/* ─── Mini Dashboard Mockup ─── */}
          <div
            className="relative max-w-4xl mx-auto rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-500/10"
            style={{ backgroundColor: COLORS.card }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              <div className="flex-1 mx-4">
                <div className="max-w-xs mx-auto h-5 rounded-md bg-white/5 flex items-center justify-center">
                  <span className="text-[10px]" style={{ color: COLORS.subtle }}>
                    app.jetrocket.io/dashboard
                  </span>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
              {/* Stat Cards Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Total Users", value: "12,847", change: "+12%", icon: UserCheck },
                  { label: "Revenue", value: "$48.2K", change: "+23%", icon: DollarSign },
                  { label: "Growth Rate", value: "+23%", change: "+5%", icon: TrendingUp },
                  { label: "Active Now", value: "1,429", change: "+8%", icon: Globe },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4 border border-white/5"
                    style={{ backgroundColor: "rgba(15,11,26,0.6)" }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs" style={{ color: COLORS.subtle }}>
                        {stat.label}
                      </span>
                      <stat.icon className="w-3.5 h-3.5" style={{ color: COLORS.accentLight }} />
                    </div>
                    <div className="font-heading text-xl font-bold" style={{ color: COLORS.text }}>
                      {stat.value}
                    </div>
                    <span className="text-xs text-emerald-400">{stat.change}</span>
                  </div>
                ))}
              </div>

              {/* Mini Bar Chart */}
              <div
                className="rounded-xl p-4 border border-white/5"
                style={{ backgroundColor: "rgba(15,11,26,0.6)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium" style={{ color: COLORS.text }}>
                    Weekly Revenue
                  </span>
                  <span className="text-xs" style={{ color: COLORS.subtle }}>
                    Last 7 days
                  </span>
                </div>
                <div className="flex items-end justify-between gap-2 h-24">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-md transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          background: `linear-gradient(to top, ${COLORS.gradientFrom}, ${COLORS.accentLight})`,
                          opacity: 0.8 + i * 0.03,
                        }}
                      />
                      <span className="text-[9px]" style={{ color: COLORS.subtle }}>
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${COLORS.bg}, transparent)`,
          }}
        />
      </section>

      {/* ───────────── TRUSTED BY ───────────── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium mb-10 tracking-wide uppercase" style={{ color: COLORS.subtle }}>
            Trusted by 500+ companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {trustedCompanies.map((company) => (
              <span
                key={company}
                className="text-xl md:text-2xl font-heading font-bold tracking-wide opacity-25 hover:opacity-50 transition-opacity duration-300"
                style={{ color: COLORS.text }}
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FEATURES ───────────── */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#7C3AED]/30"
              style={{ color: COLORS.accentLight, backgroundColor: "rgba(124,58,237,0.08)" }}
            >
              Features
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${COLORS.gradientFrom}, ${COLORS.accentLight})`,
                }}
              >
                Grow
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-lg" style={{ color: COLORS.subtle }}>
              Powerful tools that work together seamlessly. From analytics to automation, we have got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-8 border border-white/5 transition-all duration-300 hover:border-[#7C3AED]/50 hover:shadow-lg hover:shadow-purple-500/5"
                style={{ backgroundColor: COLORS.card }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.06) 0%, transparent 70%)" }} />
                <div
                  className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(124,58,237,0.12)" }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: COLORS.accent }} />
                </div>
                <h3 className="relative z-10 font-heading text-lg font-bold mb-2" style={{ color: COLORS.text }}>
                  {feature.title}
                </h3>
                <p className="relative z-10 text-sm leading-relaxed" style={{ color: COLORS.subtle }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── DASHBOARD PREVIEW ───────────── */}
      <section id="dashboard" className="py-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: COLORS.accent }} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#7C3AED]/30"
              style={{ color: COLORS.accentLight, backgroundColor: "rgba(124,58,237,0.08)" }}
            >
              Product Preview
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Your Command Center
            </h2>
            <p className="max-w-xl mx-auto text-lg" style={{ color: COLORS.subtle }}>
              A single dashboard that gives you clarity on every metric that matters.
            </p>
          </div>

          {/* Full Dashboard Mockup */}
          <div
            className="relative max-w-5xl mx-auto rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-500/10"
            style={{ backgroundColor: COLORS.card }}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div className="flex items-center gap-6">
                {["Overview", "Analytics", "Campaigns", "Reports"].map((tab, i) => (
                  <button
                    key={tab}
                    className={`text-sm font-medium pb-1 transition-colors duration-200 ${
                      i === 0
                        ? "border-b-2 border-[#7C3AED]"
                        : "border-b-2 border-transparent hover:text-[#A78BFA]"
                    }`}
                    style={{ color: i === 0 ? COLORS.text : COLORS.subtle }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="h-8 w-32 rounded-lg flex items-center px-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <span className="text-xs" style={{ color: COLORS.subtle }}>
                    Search...
                  </span>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.gradientFrom}, ${COLORS.gradientTo})`,
                    color: "white",
                  }}
                >
                  A
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Total Users", value: "12,847", change: "+12.3%", positive: true },
                  { label: "Revenue", value: "$48.2K", change: "+23.1%", positive: true },
                  { label: "Growth", value: "+23%", change: "+5.4%", positive: true },
                  { label: "Churn Rate", value: "2.1%", change: "-0.8%", positive: true },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4 border border-white/5"
                    style={{ backgroundColor: "rgba(15,11,26,0.6)" }}
                  >
                    <p className="text-xs mb-1" style={{ color: COLORS.subtle }}>
                      {stat.label}
                    </p>
                    <p className="font-heading text-2xl font-bold" style={{ color: COLORS.text }}>
                      {stat.value}
                    </p>
                    <span className={`text-xs font-medium ${stat.positive ? "text-emerald-400" : "text-red-400"}`}>
                      {stat.change} vs last month
                    </span>
                  </div>
                ))}
              </div>

              {/* Chart + Sidebar */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {/* Chart */}
                <div
                  className="md:col-span-2 rounded-xl p-5 border border-white/5"
                  style={{ backgroundColor: "rgba(15,11,26,0.6)" }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-sm font-semibold" style={{ color: COLORS.text }}>
                        Revenue Over Time
                      </h4>
                      <p className="text-xs" style={{ color: COLORS.subtle }}>
                        Monthly recurring revenue
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {["6M", "1Y", "All"].map((range, i) => (
                        <button
                          key={range}
                          className={`text-xs px-3 py-1 rounded-md transition-colors duration-200 ${
                            i === 1 ? "text-white" : ""
                          }`}
                          style={{
                            backgroundColor: i === 1 ? "rgba(124,58,237,0.3)" : "transparent",
                            color: i === 1 ? COLORS.text : COLORS.subtle,
                          }}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Bar Chart */}
                  <div className="flex items-end gap-3 h-40">
                    {[
                      { label: "Jul", h: 30, val: "$18K" },
                      { label: "Aug", h: 42, val: "$22K" },
                      { label: "Sep", h: 38, val: "$20K" },
                      { label: "Oct", h: 55, val: "$28K" },
                      { label: "Nov", h: 48, val: "$25K" },
                      { label: "Dec", h: 62, val: "$32K" },
                      { label: "Jan", h: 72, val: "$38K" },
                      { label: "Feb", h: 58, val: "$30K" },
                      { label: "Mar", h: 80, val: "$42K" },
                      { label: "Apr", h: 68, val: "$35K" },
                      { label: "May", h: 88, val: "$45K" },
                      { label: "Jun", h: 95, val: "$48K" },
                    ].map((bar, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
                        <span className="text-[8px] opacity-0 group-hover/bar:opacity-100 transition-opacity" style={{ color: COLORS.accentLight }}>
                          {bar.val}
                        </span>
                        <div
                          className="w-full rounded-t-md transition-all duration-300 group-hover/bar:opacity-100"
                          style={{
                            height: `${bar.h}%`,
                            background: `linear-gradient(to top, ${COLORS.gradientFrom}, ${COLORS.accentLight})`,
                            opacity: 0.7,
                          }}
                        />
                        <span className="text-[9px]" style={{ color: COLORS.subtle }}>
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Side Stats */}
                <div
                  className="rounded-xl p-5 border border-white/5"
                  style={{ backgroundColor: "rgba(15,11,26,0.6)" }}
                >
                  <h4 className="text-sm font-semibold mb-4" style={{ color: COLORS.text }}>
                    Top Channels
                  </h4>
                  <div className="space-y-4">
                    {[
                      { name: "Organic Search", value: "42%", width: "42%" },
                      { name: "Direct", value: "28%", width: "28%" },
                      { name: "Referral", value: "18%", width: "18%" },
                      { name: "Social", value: "12%", width: "12%" },
                    ].map((channel, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs" style={{ color: COLORS.text }}>
                            {channel.name}
                          </span>
                          <span className="text-xs font-medium" style={{ color: COLORS.accentLight }}>
                            {channel.value}
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: channel.width,
                              background: `linear-gradient(to right, ${COLORS.gradientFrom}, ${COLORS.accentLight})`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Data Table */}
              <div
                className="rounded-xl border border-white/5 overflow-hidden"
                style={{ backgroundColor: "rgba(15,11,26,0.6)" }}
              >
                <div className="px-5 py-4 border-b border-white/5">
                  <h4 className="text-sm font-semibold" style={{ color: COLORS.text }}>
                    Recent Campaigns
                  </h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5">
                        {["Campaign", "Visitors", "Conversion", "Revenue", "Status"].map((header) => (
                          <th
                            key={header}
                            className="text-left text-xs font-medium px-5 py-3 uppercase tracking-wider"
                            style={{ color: COLORS.subtle }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors duration-200"
                        >
                          <td className="px-5 py-3.5 text-sm font-medium" style={{ color: COLORS.text }}>
                            {row.campaign}
                          </td>
                          <td className="px-5 py-3.5 text-sm" style={{ color: COLORS.subtle }}>
                            {row.visitors}
                          </td>
                          <td className="px-5 py-3.5 text-sm" style={{ color: COLORS.accentLight }}>
                            {row.conversion}
                          </td>
                          <td className="px-5 py-3.5 text-sm font-medium text-emerald-400">
                            {row.revenue}
                          </td>
                          <td className="px-5 py-3.5">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                row.status === "Active"
                                  ? "bg-emerald-400/10 text-emerald-400"
                                  : "bg-yellow-400/10 text-yellow-400"
                              }`}
                            >
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── PRICING ───────────── */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#7C3AED]/30"
              style={{ color: COLORS.accentLight, backgroundColor: "rgba(124,58,237,0.08)" }}
            >
              Pricing
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-xl mx-auto text-lg" style={{ color: COLORS.subtle }}>
              Start free. Upgrade when you are ready. No hidden fees, ever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] ${
                  tier.highlighted
                    ? "border-[#7C3AED] shadow-xl shadow-purple-500/10"
                    : "border-white/5 hover:border-white/10"
                }`}
                style={{ backgroundColor: COLORS.card }}
              >
                {/* Popular Badge */}
                {tier.highlighted && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.gradientFrom}, ${COLORS.gradientTo})`,
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <h3 className="font-heading text-xl font-bold mb-1" style={{ color: COLORS.text }}>
                  {tier.name}
                </h3>
                <p className="text-sm mb-6" style={{ color: COLORS.subtle }}>
                  {tier.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="font-heading text-5xl font-bold" style={{ color: COLORS.text }}>
                    {tier.price}
                  </span>
                  <span className="text-sm" style={{ color: COLORS.subtle }}>
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: COLORS.accent }} />
                      <span className="text-sm" style={{ color: COLORS.subtle }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] ${
                    tier.highlighted
                      ? "text-white hover:shadow-lg hover:shadow-purple-500/25"
                      : "border hover:bg-white/5"
                  }`}
                  style={
                    tier.highlighted
                      ? {
                          background: `linear-gradient(135deg, ${COLORS.gradientFrom}, ${COLORS.gradientTo})`,
                        }
                      : {
                          borderColor: "rgba(124,58,237,0.3)",
                          color: COLORS.accentLight,
                        }
                  }
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#7C3AED]/30"
              style={{ color: COLORS.accentLight, backgroundColor: "rgba(124,58,237,0.08)" }}
            >
              FAQ
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg" style={{ color: COLORS.subtle }}>
              Everything you need to know about JetRocket.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FINAL CTA ───────────── */}
      <section id="cta" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div
            className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${COLORS.gradientFrom}, ${COLORS.gradientTo})`,
            }}
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-[60px]" style={{ background: COLORS.accentLight }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20 blur-[60px]" style={{ background: "#4F46E5" }} />

            <div className="relative z-10">
              <Rocket className="w-12 h-12 mx-auto mb-6 text-white/80" />
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Launch?
              </h2>
              <p className="text-lg text-white/70 mb-10 max-w-lg mx-auto">
                Start your free 14-day trial today. No credit card required. Set up in under 2 minutes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:flex-1 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#7C3AED] text-sm font-bold transition-all duration-200 hover:shadow-lg hover:scale-105 whitespace-nowrap">
                  Get Started
                </button>
              </div>

              <p className="text-xs text-white/40 mt-4">
                Free for 14 days, then $29/mo. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.gradientFrom}, ${COLORS.gradientTo})`,
                  }}
                >
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                <span className="font-heading text-lg font-bold" style={{ color: COLORS.text }}>
                  JetRocket
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: COLORS.subtle }}>
                The all-in-one analytics and growth platform for modern startups.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-heading text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: COLORS.text }}>
                Product
              </h4>
              <ul className="space-y-2.5">
                {["Features", "Pricing", "Integrations", "Changelog", "Documentation"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-200 hover:text-[#A78BFA]" style={{ color: COLORS.subtle }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: COLORS.text }}>
                Company
              </h4>
              <ul className="space-y-2.5">
                {["About", "Blog", "Careers", "Press", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-200 hover:text-[#A78BFA]" style={{ color: COLORS.subtle }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-heading text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: COLORS.text }}>
                Legal
              </h4>
              <ul className="space-y-2.5">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-200 hover:text-[#A78BFA]" style={{ color: COLORS.subtle }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: COLORS.subtle }}>
              &copy; 2026 JetRocket. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/"
                className="text-sm font-medium transition-colors duration-200 hover:text-[#A78BFA]"
                style={{ color: COLORS.accentLight }}
              >
                &larr; Back to Nexovate Digital
              </a>
              <span className="text-sm" style={{ color: COLORS.subtle }}>
                Made by{" "}
                <a
                  href="/"
                  className="font-medium transition-colors duration-200 hover:text-[#A78BFA]"
                  style={{ color: COLORS.accentLight }}
                >
                  Nexovate Digital
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
