import type {
  Service,
  ProcessStep,
  PortfolioItem,
  Testimonial,
  PricingTier,
  NavLink,
  FAQItem,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const SERVICES: Service[] = [
  {
    icon: "Globe",
    title: "Website Development",
    description:
      "Custom-built, responsive websites engineered for speed, SEO, and conversion. From corporate sites to complex web applications.",
  },
  {
    icon: "Layout",
    title: "Landing Page Design",
    description:
      "High-converting landing pages designed to capture leads and drive action. Every element optimized for maximum impact.",
  },
  {
    icon: "ShoppingCart",
    title: "E-commerce Websites",
    description:
      "Scalable online stores with seamless checkout, inventory management, and payment integration that drive revenue growth.",
  },
  {
    icon: "RefreshCw",
    title: "Website Redesign",
    description:
      "Transform your outdated website into a modern, high-performing digital asset. Better UX, faster load times, higher conversions.",
  },
  {
    icon: "Search",
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that boost your organic visibility, drive qualified traffic, and improve search engine rankings.",
  },
  {
    icon: "Figma",
    title: "UI/UX Design",
    description:
      "User-centered design that delights. We craft intuitive interfaces and seamless experiences that keep users engaged and coming back.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    icon: "Phone",
    title: "Strategy Call",
    description:
      "We dive deep into your business goals, target audience, and vision to craft a tailored strategy.",
  },
  {
    number: 2,
    icon: "PenTool",
    title: "Wireframe & Design",
    description:
      "Pixel-perfect designs and interactive prototypes that bring your vision to life before a line of code.",
  },
  {
    number: 3,
    icon: "Code2",
    title: "Development",
    description:
      "Clean, performant code built with modern technologies. Fully responsive and optimized for speed.",
  },
  {
    number: 4,
    icon: "Rocket",
    title: "Launch & Support",
    description:
      "Seamless deployment with ongoing support, analytics monitoring, and continuous optimization.",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "savory-bistro",
    title: "Savory Bistro",
    category: "Restaurant Website",
    description:
      "A premium restaurant experience brought to life with warm aesthetics, online reservation system, and a menu that makes you hungry.",
    image: "/images/portfolio/savory-bistro.webp",
    showcaseUrl: "/showcase/savory-bistro",
    stats: [
      { label: "Conversion Rate", value: 180, suffix: "%", prefix: "+" },
      { label: "Load Time", value: 0.8, suffix: "s" },
      { label: "Bounce Rate", value: 45, suffix: "%", prefix: "-" },
    ],
    tags: ["Web Design", "SEO", "Responsive"],
  },
  {
    id: "jetrocket-saas",
    title: "JetRocket",
    category: "SaaS Landing Page",
    description:
      "A modern SaaS landing page with sleek dashboard previews, feature breakdowns, and a conversion-optimized pricing section.",
    image: "/images/portfolio/jetrocket-saas.webp",
    showcaseUrl: "/showcase/jetrocket-saas",
    stats: [
      { label: "Sign-up Rate", value: 240, suffix: "%", prefix: "+" },
      { label: "Page Speed", value: 98, suffix: "/100" },
      { label: "Organic Traffic", value: 340, suffix: "%", prefix: "+" },
    ],
    tags: ["SaaS", "Landing Page", "UI/UX"],
  },
  {
    id: "urbankicks-store",
    title: "UrbanKicks",
    category: "E-commerce Store",
    description:
      "A streetwear sneaker store with dynamic product grids, smooth cart interactions, and a brand identity that pops.",
    image: "/images/portfolio/urbankicks-store.webp",
    showcaseUrl: "/showcase/urbankicks-store",
    stats: [
      { label: "Revenue Growth", value: 320, suffix: "%", prefix: "+" },
      { label: "Cart Completion", value: 67, suffix: "%" },
      { label: "Return Visitors", value: 4.2, suffix: "x" },
    ],
    tags: ["E-commerce", "Branding", "UI/UX"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arjun Mehta",
    role: "Founder",
    company: "TechVenture Labs",
    quote:
      "Nexovate Digital transformed our online presence completely. The website they built doesn't just look stunning — it actually converts visitors into customers. Best investment we made.",
    initials: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "GrowthStack",
    quote:
      "Professional, fast, and incredibly detail-oriented. They delivered a website that exceeded our expectations. Our organic traffic increased by 200% within three months.",
    initials: "PS",
  },
  {
    name: "Rahul Kapoor",
    role: "CEO",
    company: "UrbanEdge Retail",
    quote:
      "From strategy to launch, the process was seamless. The team understood our brand perfectly and built an e-commerce platform that our customers love using.",
    initials: "RK",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "₹14,999",
    description: "Perfect for small businesses getting started online",
    features: [
      "5–7 Page Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form + WhatsApp Button",
      "Google Maps Integration",
      "2 Rounds of Revisions",
      "30 Days Support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Business",
    price: "₹24,999",
    description: "For businesses ready to scale their digital presence",
    features: [
      "10+ Page Custom Website",
      "Advanced Responsive Design",
      "Full SEO Optimization",
      "Razorpay Payment Integration",
      "Booking / Appointment System",
      "Blog Section",
      "3 Rounds of Revisions",
      "90 Days Support",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "₹49,999+",
    description: "Full e-commerce solution for maximum impact",
    features: [
      "Full E-commerce Store",
      "Admin Dashboard + CMS",
      "Shipping & Inventory Management",
      "Razorpay + UPI Payments",
      "Email Marketing Setup",
      "Unlimited Revisions",
      "6 Months Priority Support",
      "Advanced Analytics",
      "Speed & Performance Optimization",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
  {
    name: "Monthly Care",
    price: "₹3,999/mo",
    description: "Ongoing maintenance so your site stays fresh and fast",
    features: [
      "Monthly Content Updates",
      "Hosting & Domain Management",
      "Security Monitoring",
      "Performance Optimization",
      "Priority WhatsApp Support",
      "Monthly Analytics Report",
    ],
    highlighted: false,
    cta: "Get Started",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects take 2\u20134 weeks from kickoff to launch. Complex e-commerce or web application projects may take 4\u20138 weeks. We\u2019ll give you a clear timeline during our strategy call.",
  },
  {
    question: "What\u2019s included in the price?",
    answer:
      "Every package includes custom design, responsive development, basic SEO setup, and post-launch support. We also offer a Monthly Care plan for ongoing maintenance. No hidden fees \u2014 what you see is what you get.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Absolutely. We work with businesses globally. Communication happens over WhatsApp, Zoom, or email \u2014 whatever works best for you.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "100%. Every website we build is fully responsive and tested across all devices and browsers. Mobile-first design is standard in all our projects.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. All packages include post-launch support (30\u2013365 days depending on the plan). We also offer monthly maintenance retainers for ongoing updates, security, and performance optimization.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Of course! Check out our portfolio section above. Each project includes a live demo you can interact with to see the quality of our work firsthand.",
  },
];

export const SITE_CONFIG = {
  name: "Nexovate Digital",
  tagline: "We Build High-Converting Websites That Drive Revenue.",
  description:
    "Premium web design and development agency. We create stunning, high-converting websites for ambitious businesses.",
  url: "https://nexovatedigital.in",
  email: "support@nexovatedigital.in",
  whatsapp: "+91 8802868821",
  instagram: "@nexovatedigital",
  instagramUrl: "https://instagram.com/nexovatedigital",
  whatsappLink:
    "https://wa.me/918802868821?text=Hi%20Nexovate!%20I'd%20like%20to%20discuss%20a%20project.",
};
