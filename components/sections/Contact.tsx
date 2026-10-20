'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Youtube,
  Instagram,
  Coffee,
  Send,
  Facebook,
} from 'lucide-react';
import {
  TikTokIcon,
  XIcon,
  PinterestIcon,
  BehanceIcon,
  WhatsAppIcon,
  GitHubIcon,
  YouTubeIcon,
  InstagramIcon,
  FacebookIcon
} from '@/components/icons/SocialIcons';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import { creatorLinks, contactEmail } from '@/data/creatorLinks';

const projectTypes = [
  'Web Development',
  'Creative Design',
  'UI/UX Design',
  'Brand & Digital Visuals',
  'Creative Technology',
  'Other',
];

const budgetRanges = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  "Let's discuss",
];

type IconType = React.ComponentType<{ className?: string }>;

const iconMap: Record<string, IconType> = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: GitHubIcon,
  YouTube: YouTubeIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
  X: XIcon,
  Pinterest: PinterestIcon,
  Behance: BehanceIcon,
  WhatsApp: WhatsAppIcon,
  'Buy Me a Coffee': Coffee,
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
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
            Contact
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Have an Idea?
          </motion.h2>
          <motion.h3
            variants={fadeUp}
            className="mt-2 font-display text-5xl font-bold leading-tight tracking-tight text-muted-foreground/40 sm:text-6xl lg:text-7xl"
          >
            Let&apos;s Make It Real.
          </motion.h3>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-border/40 bg-card p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label="Name" name="name" type="text" required />
                <FormField label="Email" name="email" type="email" required />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label="Company / Brand" name="company" type="text" />
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Budget
                </label>
                <select
                  name="budget"
                  className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
                >
                  {budgetRanges.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
              >
                {submitted ? (
                  <>
                    <Send className="h-4 w-4" />
                    Inquiry Sent — Thank You!
                  </>
                ) : (
                  <>
                    Send Project Inquiry
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact info + social grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="group mb-4 flex items-center gap-4 rounded-2xl border border-border/40 bg-card p-5 transition-colors hover:border-primary/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </div>
                  <div className="text-sm text-foreground">{contactEmail}</div>
                </div>
              </a>
            )}

            <div className="mb-4">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Connect
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {creatorLinks.map((link) => {
                  const Icon = iconMap[link.label] ?? Mail;
                  return (
                    <a
                      key={link.label}
                      href={`${link.url}`}
                      target={link.url ? '_blank' : undefined}
                      rel={link.url ? 'noopener noreferrer' : undefined}
                      className={`group flex items-center gap-3 rounded-xl border border-border/40 bg-card p-3.5 transition-all ${
                        link.url
                          ? 'hover:border-primary/40 hover:bg-secondary/50'
                          : 'cursor-default opacity-50'
                      }`}
                    >
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {link.label}
                        </div>
                        <div className="truncate text-xs text-foreground">
                          {link.handle}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {!contactEmail && (
              <p className="text-center text-xs text-muted-foreground">
                Social links will be active once provided.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
      />
    </div>
  );
}
