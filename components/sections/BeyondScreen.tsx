'use client';

import { motion } from 'framer-motion';
import { Cpu, Palette, Globe, Video, GraduationCap } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';

const interests = [
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Exploring devices, software, tools and digital products.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Studying typography, interfaces, visual systems and creative direction.',
  },
  {
    icon: Globe,
    title: 'Web',
    description: 'Experimenting with new technologies and interactive experiences.',
  },
  {
    icon: Video,
    title: 'Content',
    description: 'Creating videos, reviews and documenting technology experiences.',
  },
  {
    icon: GraduationCap,
    title: 'Learning',
    description: 'Exploring new tools and continuously improving creative and technical skills.',
  },
];

export default function BeyondScreen() {
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
            Beyond the Screen
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Things That Keep Me Curious.
          </motion.h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group rounded-2xl border border-border/40 bg-card p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
