'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { designProjects, type DesignProject } from '@/data/designProjects';
import { fadeUp, staggerContainer, viewportConfig, modalVariants, overlayVariants } from '@/lib/animations';

export default function DesignPortfolio() {
  const [selected, setSelected] = useState<DesignProject | null>(null);

  return (
    <section id="design" className="relative py-24 lg:py-32">
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
            Design Portfolio
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Design Is Where the Story Starts.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Before the browser loads the final experience, there is an idea, a
            visual direction and a reason for every detail.
          </motion.p>
        </motion.div>

        {/* Masonry gallery */}
        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {designProjects.map((project, i) => (
            <motion.button
              key={project.id}
              onClick={() => setSelected(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border/40"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    View Design
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <DesignLightbox project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function DesignLightbox({ project, onClose }: { project: DesignProject; onClose: () => void }) {
  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/90 backdrop-blur-md"
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="relative my-4 w-full max-w-4xl rounded-2xl border border-border/40 bg-background shadow-2xl md:my-8"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
          aria-label="Close lightbox"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="scrollbar-hide max-h-[calc(100vh-2rem)] overflow-y-auto md:max-h-[calc(100vh-4rem)]">
          <div className="relative h-72 w-full overflow-hidden rounded-t-2xl md:h-96">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-primary">
                {project.category}
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="font-mono text-xs text-muted-foreground">
                {project.year}
              </span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground">
              {project.title}
            </h2>
            {project.client && (
              <p className="mt-1 text-sm text-muted-foreground">
                Client: {project.client}
              </p>
            )}
            <p className="mt-4 text-sm leading-relaxed text-foreground/90">
              {project.description}
            </p>

            {project.gallery.length > 1 && (
              <div className="mt-8">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Gallery
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="h-48 overflow-hidden rounded-xl border border-border/40"
                    >
                      <img
                        src={img}
                        alt={`${project.title} ${idx + 1}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
