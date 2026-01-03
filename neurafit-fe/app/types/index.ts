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