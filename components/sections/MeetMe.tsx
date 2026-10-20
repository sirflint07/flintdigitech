'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Quote } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import { introVideoUrl } from '@/data/creatorLinks';

export default function MeetMe() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
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

        {/* Grid Layout: Image/Quote on left, Video on right */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Profile & Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* Profile Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/40 bg-card shadow-xl">
              {/* REPLACE THE SRC BELOW WITH YOUR ACTUAL IMAGE PATH, e.g., "/profile.jpg" */}
              <img
                src="/img/profile.png"
                alt="Profile portrait"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Quote Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-[85%] sm:w-[90%] rounded-xl border border-primary/20 bg-background/90 p-5 shadow-2xl backdrop-blur-md">
              <Quote className="mb-2 h-5 w-5 text-primary opacity-50" />
              <p className="font-display text-sm italic leading-relaxed text-foreground">
                &quot;Luck is what happens when preparation meets opportunity. I focus on the preparation, so when the opportunity arrives, I&apos;m ready for it.&quot;
              </p>
            </div>
          </motion.div>

          {/* Right Column: Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-7 w-full"
          >
            <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-border/40 bg-card shadow-2xl">
              {playing && introVideoUrl ? (
                <iframe
                  src={introVideoUrl}
                  title="Introduction video"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  frameBorder="0"
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
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-20 flex justify-center"
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