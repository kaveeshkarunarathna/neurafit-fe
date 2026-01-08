"use client";

import {
  Navbar,
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  TestimonialsSection,
  CTASection,
  FooterSection,
} from "./components";
import {
  Brain,
  Utensils,
  Camera,
  ScanLine,
  Heart,
  Flame,
  BarChart3,
  Trophy,
  UserCircle,
  Target,
  TrendingUp,
  Award,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import {
  Feature,
  Step,
  Testimonial,
  FooterLinkGroup,
  SocialLink,
  NavItem,
} from "./types";

// Navigation Items
const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#cta" },
];

// Features Data
const features: Feature[] = [
  {
    icon: Brain,
    title: "Adaptive AI Workout Plans",
    description:
      "Personalized routines that evolve with your goals, fitness level, and performance. Your AI coach learns and adapts to optimize your results.",
    iconColor: "text-primary-500",
  },
  {
    icon: Utensils,
    title: "Custom AI Meal Plans",
    description:
      "Smart nutrition recommendations with macros, calories, and regional cuisine support. Eat what you love while hitting your goals.",
    iconColor: "text-secondary-500",
  },
  {
    icon: Camera,
    title: "Pose & Form Feedback",
    description:
      "Real-time exercise form correction using advanced AI pose detection. Prevent injuries and maximize workout effectiveness.",
    iconColor: "text-accent-500",
  },
  {
    icon: ScanLine,
    title: "Meal Scanner",
    description:
      "Snap a photo of your food to instantly estimate calories and nutritional content. Making tracking effortless and accurate.",
    iconColor: "text-success-500",
  },
  {
    icon: Heart,
    title: "Mood & Mind Tracker",
    description:
      "Log your emotional and mental wellness alongside physical metrics. A holistic approach to your overall health journey.",
    iconColor: "text-error-500",
  },
  {
    icon: Flame,
    title: "Habit & Streak Tracker",
    description:
      "Build lasting habits with our engaging streak system. Earn rewards and stay motivated with daily challenges.",
    iconColor: "text-warning-500",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics & Insights",
    description:
      "Comprehensive charts showing trends and AI-powered suggestions. Understand your progress and what's working for you.",
    iconColor: "text-primary-500",
  },
  {
    icon: Trophy,
    title: "Gamified Community & Challenges",
    description:
      "Join leaderboards, earn XP points, and compete in mini-challenges. Connect with a community that motivates you.",
    iconColor: "text-secondary-500",
  },
];

// How It Works Steps
const steps: Step[] = [
  {
    stepNumber: 1,
    title: "Create Your Profile",
    description:
      "Tell us about your fitness goals, preferences, and current level. Our AI analyzes your unique needs.",
    icon: UserCircle,
  },
  {
    stepNumber: 2,
    title: "Get Your AI Plan",
    description:
      "Receive personalized workout routines and meal plans crafted specifically for you by our AI.",
    icon: Target,
  },
  {
    stepNumber: 3,
    title: "Track Your Progress",
    description:
      "Log workouts, meals, and mood. Watch your streaks grow and unlock achievements along the way.",
    icon: TrendingUp,
  },
  {
    stepNumber: 4,
    title: "Achieve Your Goals",
    description:
      "See real results with AI that continuously adapts. Celebrate milestones and set new targets.",
    icon: Award,
  },
];

// Testimonials Data
const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "NeuraFiT transformed my fitness journey. The AI workouts adapt perfectly to my schedule and energy levels. I've never felt more in control of my health.",
    author: "Sarah Chen",
    role: "Marketing Manager",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "The meal scanner is a game-changer! I used to spend hours logging food manually. Now it takes seconds and the accuracy is impressive.",
    author: "Marcus Johnson",
    role: "Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "I love the community challenges! The gamification keeps me motivated, and I've made friends who hold me accountable. Down 30 lbs in 4 months!",
    author: "Emily Rodriguez",
    role: "Fitness Enthusiast",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
];

// Footer Link Groups
const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#cta" },
      { label: "Download App", href: "#" },
      { label: "API", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Community", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
];

// Social Links
const socialLinks: SocialLink[] = [
  { platform: "Twitter", href: "https://twitter.com", icon: Twitter },
  { platform: "Instagram", href: "https://instagram.com", icon: Instagram },
  { platform: "Facebook", href: "https://facebook.com", icon: Facebook },
  { platform: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { platform: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Navigation */}
      <Navbar
        logoText="NeuraFiT"
        navItems={navItems}
        ctaText="Get Started"
        ctaLink="#cta"
      />

      {/* Hero Section */}
      <HeroSection
        headline="Transform Your Fitness with AI-Powered Intelligence"
        tagline="NeuraFiT combines cutting-edge artificial intelligence with personalized fitness coaching to help you achieve your health goals faster, smarter, and with lasting results."
        ctaText="Start Free Trial"
        ctaLink="#cta"
        secondaryCtaText="Watch Demo"
        secondaryCtaLink="#"
        heroImage="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=800&fit=crop"
        heroImageAlt="Person working out with AI fitness technology"
      />

      {/* Features Section */}
      <FeaturesSection
        title="Everything You Need to Succeed"
        subtitle="Powerful AI-driven features designed to make your fitness journey effective, engaging, and sustainable."
        features={features}
      />

      {/* How It Works Section */}
      <HowItWorksSection
        title="Your Journey Starts Here"
        subtitle="Getting started with NeuraFiT is simple. Our AI guides you every step of the way."
        steps={steps}
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        title="Loved by Thousands"
        subtitle="See what our community has to say about their transformation with NeuraFiT."
        testimonials={testimonials}
      />

      {/* CTA Section */}
      <CTASection
        headline="Ready to Transform Your Life?"
        description="Join thousands of people who have already discovered the power of AI-driven fitness. Start your free trial today—no credit card required."
        primaryCtaText="Start Your Free Trial"
        primaryCtaLink="#"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#features"
      />

      {/* Footer */}
      <FooterSection
        logoText="NeuraFiT"
        tagline="AI-powered fitness platform that adapts to your lifestyle. Transform your health with personalized workouts, nutrition plans, and intelligent insights."
        linkGroups={footerLinkGroups}
        socialLinks={socialLinks}
        copyrightText={`© ${new Date().getFullYear()} NeuraFiT. All rights reserved.`}
      />
    </div>
  );
}
