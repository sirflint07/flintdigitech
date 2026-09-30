'use client';

import { motion } from 'framer-motion';
import { Coffee, ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import { creatorLinks } from '@/data/creatorLinks';

export default function BuyMeCoffee() {
  const coffeeLink = creatorLinks.find((l) => l.label === 'Buy Me a Coffee')?.url ?? null;

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative overflow-hidden rounded-3xl border border-border/40 bg-card p-10 text-center md:p-16"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[100px]" />
          </div>

          <div className="relative">
            <motion.div
              variants={fadeUp}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500"
            >
              <Coffee className="h-8 w-8" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Support the Creative Journey.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground"
            >
              If you enjoy the content, find my work useful, or simply want to
              support what I&apos;m building, you can buy me a coffee.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              {coffeeLink ? (
                <a
                  href={coffeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-medium text-amber-950 transition-all hover:bg-amber-400"
                >
                  <Coffee className="h-4 w-4" />
                  Buy Me a Coffee
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-xl border border-border/60 px-6 py-3.5 text-sm text-muted-foreground">
                  <Coffee className="h-4 w-4" />
                  Buy Me a Coffee link to be added
                </span>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
