'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Github, Calendar, User, Clock, Server, CheckCircle2 } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import { fadeUp, staggerContainer, viewportConfig, modalVariants, overlayVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';

export default function SelectedWork() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-24 lg:py-32">
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
            Selected Work
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Selected Digital Work
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-lg text-muted-foreground"
          >
            Websites and digital experiences I&apos;ve designed and built.
          </motion.p>
        </motion.div>

        {/* Editorial grid with varied card sizes */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const colSpan =
              project.size === 'large'
                ? 'lg:col-span-2'
                : project.size === 'medium'
                ? 'lg:col-span-1'
                : 'lg:col-span-1';
            const rowSpan = project.size === 'large' ? 'lg:row-span-2' : '';
            return (
              <motion.button
                key={project.id}
                onClick={() => setSelected(project)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border border-border/40 bg-card text-left transition-shadow hover:shadow-2xl',
                  colSpan,
                  rowSpan
                )}
              >
                <div className={cn(
                  'relative overflow-hidden',
                  project.size === 'large' ? 'h-72 lg:h-96' : 'h-56'
                )}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full border border-border/50 bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border/50 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="relative my-4 w-full max-w-5xl rounded-2xl border border-border/40 bg-background shadow-2xl md:my-8"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
          aria-label="Close project details"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Scrollable content */}
        <div className="scrollbar-hide max-h-[calc(100vh-2rem)] overflow-y-auto md:max-h-[calc(100vh-4rem)]">
          {/* Hero image */}
          <div className="relative h-64 w-full overflow-hidden rounded-t-2xl md:h-96">
            <img
              src={project.heroImage}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </div>

          <div className="p-6 md:p-10">
            {/* Title section */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <span className="text-muted-foreground">·</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {project.title}
              </h2>
            </div>

            {/* Info grid */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Left: description and approach */}
              <div className="space-y-6 lg:col-span-2">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Project Overview
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                    {project.description}
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Objective
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                    {project.objective}
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Design Approach
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                    {project.designApproach}
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Development Approach
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                    {project.developmentApproach}
                  </p>
                </div>
              </div>

              {/* Right: metadata */}
              <div className="space-y-5">
                <InfoRow icon={User} label="Role" value={project.role.join(', ')} />
                <InfoRow icon={Clock} label="Duration" value={project.duration} />
                <InfoRow icon={Server} label="Hosting" value={project.hosting} />
                <InfoRow icon={CheckCircle2} label="Status" value={project.status} />

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Tech Stack
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 font-mono text-[10px] text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Key features */}
            <div className="mt-10">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Key Features
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground/90"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            {project.gallery.length > 1 && (
              <div className="mt-10">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Project Gallery
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="h-48 overflow-hidden rounded-xl border border-border/40"
                    >
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4 border-t border-border/40 pt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
                >
                  Visit Live Project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-border/60 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50"
                >
                  <Github className="h-4 w-4" />
                  View Source
                </a>
              )}
              {!project.liveUrl && !project.sourceUrl && (
                <p className="text-sm text-muted-foreground">
                  Project links will be added soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
      <div>
        <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </h4>
        <p className="mt-0.5 text-sm text-foreground/90">{value}</p>
      </div>
    </div>
  );
}
