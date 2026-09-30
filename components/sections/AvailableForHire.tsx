'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import { contactEmail } from '@/data/creatorLinks';

export default function AvailableForHire() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Currently available for projects &amp; collaborations
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Ready to Build
            <br />
            <span className="text-primary">Something?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Whether you need a website, visual campaign, creative direction,
            digital experience or simply someone who can turn an idea into
            something tangible — let&apos;s talk.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-2xl hover:shadow-primary/20"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="group inline-flex items-center gap-2 rounded-xl border border-border/60 px-7 py-4 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
              >
                <Mail className="h-4 w-4" />
                Email Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
