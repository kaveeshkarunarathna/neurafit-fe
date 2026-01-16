import { LucideIcon } from "lucide-react";

// Common Props
export interface BaseProps {
  className?: string;
}

// Hero Section
export interface HeroSectionProps extends BaseProps {
  headline: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  heroImage: string;
  heroImageAlt: string;
}
// How It Works Section
export interface Step {
  stepNumber: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export interface HowItWorksSectionProps extends BaseProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

// Feature Card & Features Section
export interface FeatureCardProps extends BaseProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export interface FeaturesSectionProps extends BaseProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

// Testimonials Section
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating?: number;
}

export interface TestimonialCardProps extends BaseProps {
  testimonial: Testimonial;
}

export interface TestimonialsSectionProps extends BaseProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

// CTA Section
export interface CTASectionProps extends BaseProps {
  headline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

// Footer Section
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: LucideIcon;
}

export interface FooterSectionProps extends BaseProps {
  logoText: string;
  tagline: string;
  linkGroups: FooterLinkGroup[];
  socialLinks: SocialLink[];
  copyrightText: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps extends BaseProps {
  logoText: string;
  navItems: NavItem[];
  ctaText: string;
  ctaLink: string;
}
