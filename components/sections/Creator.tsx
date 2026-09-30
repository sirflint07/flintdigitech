'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube, ArrowRight } from 'lucide-react';
import { videos, featuredTech } from '@/data/videos';
import { creatorLinks } from '@/data/creatorLinks';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';

function getYouTubeLink() {
  return creatorLinks.find((l) => l.label === 'YouTube')?.url ?? null;
}

export default function Creator() {
  return (
    <section id="creator" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Creator intro */}
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
            Creator
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Beyond Client Work.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            FlintDigitech isn&apos;t only about client work. Outside of design and
            development, I spend time exploring technology, testing gadgets,
            creating videos and sharing some of the things I discover along the way.
          </motion.p>
        </motion.div>

        {/* YouTube section */}
        <div className="mt-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.h3
              variants={fadeUp}
              className="font-display text-2xl font-bold text-foreground sm:text-3xl"
            >
              Watch Me Explore Technology.
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-xl text-base text-muted-foreground"
            >
              I also create content around technology, gadgets, experiences and the
              things I&apos;m curious enough to test.
            </motion.p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos
              .filter((v) => v.type === 'Tech Review' || v.type === 'Creative')
              .slice(0, 3)
              .map((video, i) => (
                <VideoCard key={video.id} video={video} index={i} />
              ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-8"
          >
            {getYouTubeLink() ? (
              <a
                href={getYouTubeLink()!}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-medium text-white transition-all hover:opacity-90"
              >
                <Youtube className="h-4 w-4" />
                Visit My YouTube Channel
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border border-border/60 px-6 py-3.5 text-sm text-muted-foreground">
                <Youtube className="h-4 w-4" />
                YouTube channel link to be added
              </span>
            )}
          </motion.div>
        </div>

        {/* Featured Tech Content */}
        <div className="mt-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.h3
              variants={fadeUp}
              className="font-display text-2xl font-bold text-foreground sm:text-3xl"
            >
              Tech I&apos;ve Been Exploring.
            </motion.h3>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTech.map((tech, i) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-2xl border border-border/40 bg-card"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-border/50 bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
                    {tech.category}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-base font-semibold text-foreground">
                    {tech.name}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {tech.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Unboxing section */}
        <div className="mt-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.h3
              variants={fadeUp}
              className="font-display text-2xl font-bold text-foreground sm:text-3xl"
            >
              Unboxing Something New.
            </motion.h3>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Large featured video */}
            {(() => {
              const featured = videos.find((v) => v.type === 'Unboxing' && v.featured);
              if (!featured) return null;
              return (
                <VideoCard video={featured} index={0} large />
              );
            })()}

            {/* Two smaller stacked videos */}
            <div className="flex flex-col gap-6">
              {videos
                .filter((v) => v.type === 'Unboxing' && !v.featured)
                .slice(0, 2)
                .map((video, i) => (
                  <VideoCard key={video.id} video={video} index={i + 1} compact />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  video,
  index,
  large,
  compact,
}: {
  video: (typeof videos)[number];
  index: number;
  large?: boolean;
  compact?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={compact ? 'flex gap-4 overflow-hidden rounded-2xl border border-border/40 bg-card p-3' : 'group overflow-hidden rounded-2xl border border-border/40 bg-card'}
    >
      {compact ? (
        <>
          <div className="relative h-28 w-40 flex-shrink-0 overflow-hidden rounded-xl">
            {playing && video.videoUrl ? (
              <iframe
                src={video.videoUrl}
                title={video.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="relative h-full w-full"
                aria-label={`Play ${video.title}`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/20">
                  <Play className="h-6 w-6 fill-white text-white" />
                </div>
              </button>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
              {video.category}
            </span>
            <h4 className="mt-1 font-display text-sm font-semibold text-foreground">
              {video.title}
            </h4>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
              {video.description}
            </p>
            <span className="mt-2 font-mono text-[10px] text-muted-foreground">
              {video.date}
            </span>
          </div>
        </>
      ) : (
        <>
          <div className={`relative overflow-hidden ${large ? 'h-72 lg:h-80' : 'h-52'}`}>
            {playing && video.videoUrl ? (
              <iframe
                src={video.videoUrl}
                title={video.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="relative h-full w-full"
                aria-label={`Play ${video.title}`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/40 backdrop-blur-sm transition-all group-hover:scale-110">
                    <Play className="ml-1 h-6 w-6 fill-white text-white" />
                  </div>
                </div>
              </button>
            )}
            <div className="absolute right-3 top-3">
              <span className="flex items-center gap-1 rounded-full border border-border/50 bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
                <Youtube className="h-3 w-3 text-red-500" />
                {video.type}
              </span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                {video.category}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {video.date}
              </span>
            </div>
            <h4 className="mt-2 font-display text-lg font-semibold text-foreground">
              {video.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {video.description}
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
}
