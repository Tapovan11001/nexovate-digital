export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  showcaseUrl: string;
  stats: PortfolioStat[];
  tags: string[];
}

export interface PortfolioStat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface NavLink {
  label: string;
  href: string;
}
