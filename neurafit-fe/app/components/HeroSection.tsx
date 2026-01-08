"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { HeroSectionProps } from "../types";

export default function HeroSection({
  headline,
  tagline,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  heroImage,
  heroImageAlt,
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950 ${className}`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/20 dark:bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              AI-Powered Fitness Platform
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 dark:text-white leading-tight mb-6">
              {headline.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={
                    word.toLowerCase() === "ai" ||
                    word.toLowerCase() === "neurafit"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                      : ""
                  }
                >
                  {word}{" "}
                </motion.span>
              ))}
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href={ctaLink}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 font-semibold rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all duration-300"
                >
                  <Play className="w-5 h-5 text-blue-500" />
                  {secondaryCtaText}
                </Link>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800"
            >
              {[
                { value: "50K+", label: "Active Users" },
                { value: "1M+", label: "Workouts Completed" },
                { value: "4.9", label: "App Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
              {/* Decorative rings */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 dark:border-blue-800 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <div
                className="absolute inset-4 rounded-full border-2 border-dashed border-purple-200 dark:border-purple-800 animate-spin"
                style={{
                  animationDuration: "15s",
                  animationDirection: "reverse",
                }}
              />

              {/* Main image container */}
              <div className="absolute inset-8 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-400 p-1">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-900">
                  <Image
                    src={heroImage}
                    alt={heroImageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -left-4 top-1/4 bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-500 text-lg">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                      Workout Complete
                    </div>
                    <div className="text-xs text-neutral-500">
                      +150 XP earned
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -right-4 bottom-1/4 bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-500 text-lg">🔥</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                      7 Day Streak!
                    </div>
                    <div className="text-xs text-neutral-500">Keep it up!</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-neutral-300 dark:border-neutral-600 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
