'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Palette, Code2, Sparkles, ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';

const steps = [
  { icon: Lightbulb, label: 'Idea', description: 'The spark — a concept worth building' },
  { icon: Palette, label: 'Design', description: 'Visual language and user experience' },
  { icon: Code2, label: 'Code', description: 'Technical execution and functionality' },
  { icon: Sparkles, label: 'Experience', description: 'A polished, living digital product' },
];

export default function DesignCode() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center"
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.2em] text-primary"
          >
            Signature
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Design <span className="text-primary">×</span> Code
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            I don&apos;t see design and development as separate disciplines. The
            strongest digital experiences happen when visual thinking and
            technical execution work together.
          </motion.p>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-20 flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-center md:gap-0"
        >
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center md:flex-row">
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex h-40 w-40 flex-col items-center justify-center gap-3 rounded-2xl border border-border/40 bg-card p-6 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold text-foreground">
                    {step.label}
                  </div>
                  <div className="mt-1 text-[11px] leading-tight text-muted-foreground">
                    {step.description}
                  </div>
                </div>
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary font-mono text-[10px] text-primary-foreground">
                  {i + 1}
                </span>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.div
                  variants={fadeUp}
                  className="flex items-center justify-center px-4 py-2 md:py-0"
                >
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                  >
                    <ArrowRight className="h-5 w-5 text-primary/50 md:rotate-0" />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
