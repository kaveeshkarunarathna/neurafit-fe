"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TestimonialsSectionProps, TestimonialCardProps } from "../types";
import { Quote, Star } from "lucide-react";

function TestimonialCard({
  testimonial,
  className = "",
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`relative bg-white dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Quote icon */}
      <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
        <Quote className="w-4 h-4 text-white" />
      </div>

      {/* Rating */}
      {testimonial.rating && (
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < testimonial.rating!
                  ? "text-accent-400 fill-accent-400"
                  : "text-neutral-300 dark:text-neutral-600"
              }`}
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 text-base sm:text-lg">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary-200 dark:ring-primary-800">
          <Image
            src={testimonial.avatar}
            alt={`${testimonial.author}'s avatar`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-neutral-900 dark:text-white">
            {testimonial.author}
          </div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            {testimonial.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection({
  title,
  subtitle,
  testimonials,
  className = "",
}: TestimonialsSectionProps) {
  return (
    <section
      className={`py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-primary-950 ${className}`}
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/50 text-accent-700 dark:text-accent-300 text-sm font-medium mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400">
            {subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-500 dark:text-neutral-400 mb-6">
            Trusted by fitness enthusiasts worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "Featured in",
              "Apple App Store",
              "Google Play",
              "Product Hunt",
            ].map((brand, index) => (
              <span
                key={index}
                className="text-neutral-400 dark:text-neutral-600 font-semibold text-lg"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
