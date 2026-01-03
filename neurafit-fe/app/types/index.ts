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
