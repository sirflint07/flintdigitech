'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Layout, Eye, Sparkles } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Modern responsive websites and digital experiences.',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Promotional graphics, social media visuals, flyers, posters and marketing materials.',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Interfaces designed around usability, clarity and visual hierarchy.',
  },
  {
    icon: Eye,
    title: 'Brand & Digital Visuals',
    description: 'Visual systems that help businesses communicate professionally.',
  },
  {
    icon: Sparkles,
    title: 'Creative Technology',
    description: 'Digital experiences combining design, interaction, motion and technology.',
  },
];

export default function Services() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.2em] text-primary"
          >
            Services
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            What FlintDigitech Can Do for You.
          </motion.h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 ${
                i === 4 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
