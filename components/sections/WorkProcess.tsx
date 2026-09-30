'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';

const steps = [
  { number: '01', title: 'Discover', description: 'Understand the idea, audience and goals.' },
  { number: '02', title: 'Explore', description: 'Research possibilities and establish direction.' },
  { number: '03', title: 'Design', description: 'Create the visual language and user experience.' },
  { number: '04', title: 'Build', description: 'Turn the concept into a functional responsive experience.' },
  { number: '05', title: 'Refine', description: 'Test, optimize and polish the final result.' },
];

export default function WorkProcess() {
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
            Process
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            How I Turn Ideas Into Experiences.
          </motion.h2>
        </motion.div>

        <div className="mt-16 space-y-px">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center gap-6 border-b border-border/30 py-6 transition-colors hover:border-primary/30"
            >
              <span className="font-display text-3xl font-bold text-muted-foreground/20 transition-colors group-hover:text-primary/40 md:text-5xl">
                {step.number}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground md:text-base">
                  {step.description}
                </p>
              </div>
              <motion.div
                className="h-px w-0 bg-primary transition-all duration-500 group-hover:w-12 md:w-16"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
