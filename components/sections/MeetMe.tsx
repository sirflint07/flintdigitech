'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import { introVideoUrl } from '@/data/creatorLinks';

export default function MeetMe() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="about" className="relative py-24 lg:py-32">
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
            Meet Me
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Meet the Person Behind the Work.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Rather than just showing you what I make, here&apos;s a little about who I
            am, what I do, how I approach my work, and what keeps me interested in
            technology and creativity.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mt-12 aspect-video w-full overflow-hidden rounded-2xl border border-border/40 bg-card shadow-2xl"
        >
          {playing && introVideoUrl ? (
            <iframe
              src={introVideoUrl}
              title="Introduction video"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="relative flex h-full w-full items-center justify-center"
              aria-label="Play introduction video"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-card to-background" />
              <div className="absolute inset-0 opacity-20">
                <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
              </div>

              {/* Content */}
              <div className="relative flex flex-col items-center gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 bg-background/80 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:border-primary">
                  <Play className="ml-1 h-8 w-8 fill-primary text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-display text-lg font-medium text-foreground">
                    {introVideoUrl ? 'Watch My Introduction' : 'Introduction Video Coming Soon'}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {introVideoUrl ? '2 min · 16:9' : 'Placeholder — video URL to be added'}
                  </p>
                </div>
              </div>
            </button>
          )}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 flex justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-border/60 px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
          >
            Let&apos;s Work Together
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
