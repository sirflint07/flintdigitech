'use client';

import { motion } from 'framer-motion';
import { Palette, Code2, Video } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';

const pillars = [
  {
    icon: Palette,
    title: 'Creative Design',
    description:
      'Graphic design, promotional graphics, visual campaigns, product advertising and digital visuals.',
    number: '01',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Modern responsive websites, interactive interfaces and digital experiences.',
    number: '02',
  },
  {
    icon: Video,
    title: 'Technology & Content',
    description:
      'Exploring technology, creating videos, reviewing products and documenting interesting things.',
    number: '03',
  },
];

export default function WhatIDo() {
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
            What I Do
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            I Design. I Build. I Create.
          </motion.h2>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8"
              >
                <div className="absolute right-4 top-4 font-display text-6xl font-bold text-muted-foreground/5 transition-colors group-hover:text-primary/10">
                  {pillar.number}
                </div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
