'use client';

import { motion } from 'framer-motion';
import {
  Youtube,
  Instagram,
  Github,
  Linkedin,
  Coffee,
  Facebook,
} from 'lucide-react';
import {
  TikTokIcon,
  XIcon,
  PinterestIcon,
  BehanceIcon,
  WhatsAppIcon,
} from '@/components/icons/SocialIcons';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import { creatorLinks } from '@/data/creatorLinks';

const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Design', href: '#design' },
  { label: 'Creator', href: '#creator' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

type IconType = React.ComponentType<{ className?: string }>;

const iconMap: Record<string, IconType> = {
  YouTube: Youtube,
  Instagram: Instagram,
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  TikTok: TikTokIcon,
  X: XIcon,
  Pinterest: PinterestIcon,
  Behance: BehanceIcon,
  WhatsApp: WhatsAppIcon,
  'Buy Me a Coffee': Coffee,
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center gap-10 text-center"
        >
          <motion.div variants={fadeUp}>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Flint<span className="text-primary">Digitech</span>
            </h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Design × Code × Technology
            </p>
          </motion.div>

          <motion.p variants={fadeUp} className="max-w-md text-sm text-muted-foreground">
            Designing visuals. Building experiences. Exploring technology.
          </motion.p>

          <motion.nav
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social icon grid */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {creatorLinks.map((link) => {
              const Icon = iconMap[link.label];
              if (!Icon) return null;
              return (
                <a
                  key={link.label}
                  href={link.url ?? '#'}
                  target={link.url ? '_blank' : undefined}
                  rel={link.url ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className={`group flex h-11 w-11 items-center justify-center rounded-xl border border-border/40 bg-card transition-all ${
                    link.url
                      ? 'hover:border-primary/40 hover:bg-primary/10 hover:text-primary'
                      : 'cursor-default opacity-40'
                  }`}
                >
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Available for new projects
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="w-full border-t border-border/30 pt-8"
          >
            <p className="font-mono text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} FlintDigitech. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
