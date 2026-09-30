'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';

const toolkit = {
  Development: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'shadCN', 'Git', 'GitHub', 'Vercel'],
  Design: ['Figma', 'Photoshop', 'Illustrator', 'Canva'],
  Content: ['YouTube', 'Video Editing', 'Photography', 'Video Production'],
};

export default function Toolkit() {
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
            Toolkit
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Tools of the Trade.
          </motion.h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {Object.entries(toolkit).map(([category, tools], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-border/40 bg-card p-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {category}
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {tools.map((tool, j) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportConfig}
                    transition={{ duration: 0.3, delay: j * 0.05 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="cursor-default rounded-full border border-border/50 bg-secondary/50 px-3.5 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
