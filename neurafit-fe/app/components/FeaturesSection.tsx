"use client";

import { motion } from "framer-motion";
import { FeatureCardProps, FeaturesSectionProps } from "../types";

function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = "text-primary-500",
  className = "",
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`group relative p-6 sm:p-8 bg-white dark:bg-neutral-800/50 rounded-2xl border border-neutral-100 dark:border-neutral-700/50 hover:border-primary-200 dark:hover:border-primary-700/50 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="relative mb-5">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-7 h-7 ${iconColor}`} />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default function FeaturesSection({
  title,
  subtitle,
  features,
  className = "",
}: FeaturesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      className={`py-20 sm:py-28 lg:py-32 bg-neutral-50 dark:bg-neutral-900 ${className}`}
      id="features"
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
            className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4"
          >
            Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400">
            {subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
