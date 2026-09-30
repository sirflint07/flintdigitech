'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

const floatingLabels = ['DESIGN', 'CODE', 'CREATE', 'EXPLORE', 'BUILD'];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 mt-0 md:mt-6 lg:mt-10 xl:mt-16"
    >
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-8">
        {/* Left: Editorial text */}
        <motion.div
          style={{ opacity }}
          className="flex flex-col justify-center lg:col-span-7"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} className="flex gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xxs uppercase tracking-[0.2em] text-muted-foreground">
                Available for freelance projects &amp; collaborations
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
              I Design Ideas
              <br />
              <span className="text-muted-foreground/50">And Build Them</span>
              <br />
              <span className="text-primary">Into Digital Experiences.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Creative designer and web developer building thoughtful visuals,
              modern websites and digital experiences for brands, businesses and
              ambitious ideas.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Designer
              </span>
              <span className="text-primary">×</span>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Developer
              </span>
              <span className="text-primary">×</span>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Tech Enthusiast
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/20"
              >
                Explore My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-border/60 px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
              >
                Let&apos;s Work Together
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: Editorial visual composition */}
        <motion.div
          style={{ y }}
          className="relative hidden lg:col-span-5 lg:flex"
        >
          <div className="relative h-[520px] w-full">
            {/* Main visual card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-8 h-[360px] w-[280px] overflow-hidden rounded-2xl border border-border/40 shadow-2xl"
            >
              <div className="relative h-full w-full bg-gradient-to-br from-secondary via-secondary to-background">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                  <div className="font-display text-6xl font-bold text-primary/20">
                    F
                  </div>
                  <div className="text-center">
                    <div className="font-display text-xl font-bold text-foreground">
                      FlintDigitech
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Design × Code × Technology
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                    {['Next.js', 'React', 'Tailwind', 'Framer Motion'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border/50 px-2.5 py-1 font-mono text-[9px] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary card - code snippet */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-[200px] w-[240px] overflow-hidden rounded-2xl border border-border/40 bg-card shadow-2xl"
            >
              <div className="flex items-center gap-1.5 border-b border-border/30 px-4 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground">
                  experience.tsx
                </span>
              </div>
              <pre className="p-4 font-mono text-[10px] leading-relaxed text-muted-foreground">
                <code>{`const experience = {
  design: 'thoughtful',
  build: 'modern',
  explore: 'technology',
  create: 'digital'
};`}</code>
              </pre>
            </motion.div>

            {/* Tertiary card - browser mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 right-8 h-[180px] w-[200px] overflow-hidden rounded-2xl border border-border/40 bg-card shadow-2xl"
            >
              <div className="flex items-center gap-1.5 border-b border-border/30 px-3 py-2.5">
                <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
              </div>
              <div className="space-y-2 p-4">
                <div className="h-2 w-3/4 rounded bg-primary/30" />
                <div className="h-2 w-1/2 rounded bg-muted-foreground/20" />
                <div className="mt-3 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
                <div className="h-2 w-1/2 rounded bg-muted-foreground/20" />
              </div>
            </motion.div>

            {/* Floating labels */}
            {floatingLabels.map((label, i) => {
              const positions = [
                'left-[35%] top-2',
                'right-[-10px] top-[45%]',
                'left-[10%] bottom-4',
                'right-[15%] bottom-[-10px]',
                'left-[-15px] top-[40%]',
              ];
              return (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`absolute ${positions[i]} rounded-full border border-primary/30 bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-primary backdrop-blur-sm`}
                >
                  {label}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
