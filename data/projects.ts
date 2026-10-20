export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  heroImage: string;
  description: string;
  objective: string;
  role: string[];
  duration: string;
  technologies: string[];
  features: string[];
  designApproach: string;
  developmentApproach: string;
  hosting: string;
  status: string;
  liveUrl: string | null;
  sourceUrl: string | null;
  gallery: string[];
  size: 'large' | 'medium' | 'small';
}

export const projects: Project[] = [
  {
    id: 'nucafy-lms',
    title: 'Nucafy',
    category: 'Learning Managment System',
    year: '2026',
    thumbnail:
      '/img/nucafy-thumbnail.png',
    heroImage:
      'https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    description:
      'A full-featured LMS built with Next.js 16 where instructors create and sell courses and ebooks, students purchase and stream lessons on any device, and admins manage users, content, and revenue from a dedicated control center. Three roles — Students, Instructors, and Admins — each get their own onboarding, dashboards, and permissions. Includes payments, video hosting, blogging, search, and analytics. Secured with Clerk, backed by Prisma and Supabase.',
    objective:
      'To create a digital presence that positions Aurora Studio as a premium creative agency and drives inbound project inquiries.',
    role: ['UI Design', 'UX', 'Frontend Development', 'Creative Direction'],
    duration: '4 Weeks',
    technologies: ['Next.js', 'React', 'Clerk', 'Prisma', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Scroll-driven section animations',
      'Animated project gallery with modal details',
      'Responsive across all breakpoints',
      'SEO-optimized with structured metadata',
      'Contact form with validation',
    ],
    designApproach:
      'A dark, editorial layout with large display typography and generous whitespace. The visual language emphasizes confidence and craftsmanship, using a restrained palette with a single accent color.',
    developmentApproach:
      'Built with Next.js App Router for optimal performance. Framer Motion handles scroll-triggered reveals and microinteractions. Images are optimized through Next/Image with lazy loading.',
    hosting: 'Vercel',
    status: 'Live',
    liveUrl: 'https://novara-puce.vercel.app/',
    sourceUrl: null,
    gallery: [
      'https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    size: 'large',
  },
  {
    id: 'CourseKingdom',
    title: 'CourseKingdom',
    category: 'Learning Managment System',
    year: '2025',
    thumbnail:
      '/img/coureskingdom.png',
    heroImage:
      'https://images.pexels.com/photos/904593/pexels-photo-904593.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    description:
      'A sleek e-commerce experience with a focus on product storytelling, fast browsing, and a frictionless checkout flow.',
    objective:
      'To increase conversion rates and reduce bounce by creating a product-first shopping experience.',
    role: ['UI Design', 'Frontend Development', 'Animation'],
    duration: '6 Weeks',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadCN'],
    features: [
      'Product quick-view modals',
      'Cart drawer with animated transitions',
      'Filtered and searchable product grid',
      'Optimized image delivery',
      'Mobile-first checkout flow',
    ],
    designApproach:
      'Product imagery takes center stage with a clean, minimal interface that gets out of the way. Subtle motion guides attention without distracting from the shopping experience.',
    developmentApproach:
      'Server components for product data with client-side interactivity for cart and filtering. Optimistic UI updates keep the experience feeling instant.',
    hosting: 'Vercel',
    status: 'Live',
    liveUrl: 'https://coursekingdom.vercel.app/',
    sourceUrl: null,
    gallery: [
      'https://images.pexels.com/photos/904593/pexels-photo-904593.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    size: 'medium',
  },
  {
    id: 'pulse-landing',
    title: 'Studio Hiroshima',
    category: 'Landing Page',
    year: '2025',
    thumbnail:
      '/img/hiroshima-thumbnail.png',
    heroImage:
      'https://images.pexels.com/photos/6308163/pexels-photo-6308163.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    description:
      'A high-impact landing page for Paris based studio specializing in production, publishing and artists representation.',
    objective:
      'To build  a simple landing page for studio hiroshima to just have an online digital presence as requested by the client',
    role: ['UI Design', 'Frontend Development', 'Creative Direction'],
    duration: '2 Weeks',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Animated hero with parallax layers',
      'Feature highlight carousel',
      'Email capture with inline validation',
      'Social proof section',
      'Optimized for Core Web Vitals',
    ],
    designApproach:
      'A single-page narrative structure that builds from problem to solution to action. Bold visual moments create emotional engagement before the CTA.',
    developmentApproach:
      'Static generation for instant load times. Minimal JavaScript for above-the-fold content. Framer Motion used selectively for hero and feature sections only.',
    hosting: 'OVHCloud',
    status: 'Live',
    liveUrl: 'https://studiohiroshima.fr/',
    sourceUrl: null,
    gallery: [
      'https://images.pexels.com/photos/6308163/pexels-photo-6308163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    size: 'medium',
  },
  {
    id: 'icast-school',
    title: 'Icast Schools Proposed Site',
    category: 'Interactive Web App',
    year: '2025',
    thumbnail:
      '/img/icast-thumbnail.png',
    heroImage:
      'https://images.pexels.com/photos/30530409/pexels-photo-30530409.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    description:
      'An interactive web application featuring real-time data visualization, dynamic filtering, and a rich, responsive interface.',
    objective:
      'To provide users with an intuitive, real-time dashboard for monitoring and analyzing complex data sets.',
    role: ['UI Design', 'UX', 'Frontend Development', 'Animation'],
    duration: '8 Weeks',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadCN'],
    features: [
      'Real-time data visualization',
      'Dynamic filtering and search',
      'Responsive dashboard layout',
      'Dark/light theme toggle',
      'Keyboard-accessible controls',
    ],
    designApproach:
      'A data-first interface that prioritizes clarity and speed. Dense information is organized through a consistent spacing system and clear visual hierarchy.',
    developmentApproach:
      'Component-driven architecture with shadCN/ui for consistency. Real-time updates handled through efficient state management. Type-safe throughout.',
    hosting: 'Vercel',
    status: 'Live',
    liveUrl: 'https://icast-schools.vercel.app/',
    sourceUrl: null,
    gallery: [
      'https://images.pexels.com/photos/30530409/pexels-photo-30530409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    size: 'large',
  },
  {
    id: 'anpa',
    title: 'ANPA',
    category: 'Healthcare Website',
    year: '2025',
    thumbnail:
      'https://res.cloudinary.com/djpdesqrs/image/upload/v1767430386/ANPA-1_mhoclc.png',
    heroImage:
      'https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    description:
      'A portfolio website for a photographer, featuring a full-bleed gallery, smooth lightbox interactions, and a minimal editorial layout.',
    objective:
      'To showcase photography work in a format that lets the imagery breathe while maintaining a strong personal brand presence.',
    role: ['UI Design', 'Frontend Development', 'Creative Direction'],
    duration: '3 Weeks',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Full-bleed image gallery',
      'Lightbox with keyboard navigation',
      'Category filtering',
      'Lazy-loaded images',
      'Responsive masonry layout',
    ],
    designApproach:
      'Photography-first design with a minimal chrome. The interface recedes so the work speaks. Typography is used sparingly but confidently.',
    developmentApproach:
      'Next/Image for responsive image delivery. Framer Motion AnimatePresence for lightbox transitions. Masonry layout via CSS columns for performance.',
    hosting: 'Vercel',
    status: 'Live',
    liveUrl: null,
    sourceUrl: null,
    gallery: [
      'https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    size: 'small',
  },
  {
    id: 'ihcp',
    title: 'IHCP',
    category: 'Healthcare',
    year: '2025',
    thumbnail:
      '/img/ihcp-thumbnail.png',
    heroImage:
      'https://images.pexels.com/photos/14553704/pexels-photo-14553704.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    description:
      'A developer documentation site with a clean, readable interface, interactive code examples, and a powerful search experience.',
    objective:
      'To make technical documentation approachable, searchable, and enjoyable to navigate.',
    role: ['UI Design', 'UX', 'Frontend Development'],
    duration: '5 Weeks',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadCN'],
    features: [
      'Full-text search with keyboard shortcut',
      'Syntax-highlighted code blocks',
      'Table of contents navigation',
      'Dark mode by default',
      'MDX content support',
    ],
    designApproach:
      'A documentation interface that feels like a well-designed book. Clear typographic hierarchy, generous line height, and a persistent sidebar for navigation.',
    developmentApproach:
      'Static generation with incremental builds. Search powered by client-side indexing. Code blocks with copy-to-clipboard and syntax highlighting.',
    hosting: 'Vercel',
    status: 'Live',
    liveUrl: 'https://ihcp.vercel.app/',
    sourceUrl: null,
    gallery: [
      'https://images.pexels.com/photos/14553704/pexels-photo-14553704.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    size: 'small',
  },

  {
    id: 'fitpro',
    title: 'FitPro Fitness',
    category: 'Gymnastics',
    year: '2025',
    thumbnail:
      'https://res.cloudinary.com/djpdesqrs/image/upload/v1767431022/Screenshot_2026-01-03_100153_gus5uz.png',
    heroImage:
      'https://images.pexels.com/photos/14553704/pexels-photo-14553704.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    description:
      'A developer documentation site with a clean, readable interface, interactive code examples, and a powerful search experience.',
    objective:
      'To make technical documentation approachable, searchable, and enjoyable to navigate.',
    role: ['UI Design', 'UX', 'Frontend Development'],
    duration: '5 Weeks',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadCN'],
    features: [
      'Full-text search with keyboard shortcut',
      'Syntax-highlighted code blocks',
      'Table of contents navigation',
      'Dark mode by default',
      'MDX content support',
    ],
    designApproach:
      'A documentation interface that feels like a well-designed book. Clear typographic hierarchy, generous line height, and a persistent sidebar for navigation.',
    developmentApproach:
      'Static generation with incremental builds. Search powered by client-side indexing. Code blocks with copy-to-clipboard and syntax highlighting.',
    hosting: 'Vercel',
    status: 'Live',
    liveUrl: '',
    sourceUrl: null,
    gallery: [
      'https://images.pexels.com/photos/14553704/pexels-photo-14553704.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    size: 'small',
  },

  {
    id: 'reminet',
    title: 'Reminet',
    category: 'Landing Page',
    year: '2025',
    thumbnail:
      'https://res.cloudinary.com/djpdesqrs/image/upload/v1767431022/Screenshot_2026-01-03_100153_gus5uz.png',
    heroImage:
      'https://images.pexels.com/photos/14553704/pexels-photo-14553704.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    description:
      'A developer documentation site with a clean, readable interface, interactive code examples, and a powerful search experience.',
    objective:
      'To make technical documentation approachable, searchable, and enjoyable to navigate.',
    role: ['UI Design', 'UX', 'Frontend Development'],
    duration: '5 Weeks',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadCN', 'Chart.js'],
    features: [
      'Full-text search with keyboard shortcut',
      'Syntax-highlighted code blocks',
      'Table of contents navigation',
      'Dark mode by default',
      'MDX content support',
    ],
    designApproach:
      'A documentation interface that feels like a well-designed book. Clear typographic hierarchy, generous line height, and a persistent sidebar for navigation.',
    developmentApproach:
      'Static generation with incremental builds. Search powered by client-side indexing. Code blocks with copy-to-clipboard and syntax highlighting.',
    hosting: 'Vercel',
    status: 'Live',
    liveUrl: 'https://ihcp.vercel.app/',
    sourceUrl: null,
    gallery: [
      'https://images.pexels.com/photos/14553704/pexels-photo-14553704.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    size: 'small',
  },

  {
    id: 'trophies',
    title: 'Trophies School Web Demo',
    category: 'School Website',
    year: '2026',
    thumbnail:
      'https://res.cloudinary.com/djpdesqrs/image/upload/v1790803810/trophies-sch_sr2g5r.png',
    heroImage:
      'https://res.cloudinary.com/djpdesqrs/image/upload/v1790805255/trophies-about_n6ke1x.png',
    description:
      'A developer documentation site with a clean, readable interface, interactive code examples, and a powerful search experience.',
    objective:
      'To make technical documentation approachable, searchable, and enjoyable to navigate.',
    role: ['UI Design', 'UX', 'Frontend Development'],
    duration: '5 Weeks',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadCN'],
    features: [
      'Full-text search with keyboard shortcut',
      'Syntax-highlighted code blocks',
      'Table of contents navigation',
      'Dark mode by default',
      'MDX content support',
    ],
    designApproach:
      'A documentation interface that feels like a well-designed book. Clear typographic hierarchy, generous line height, and a persistent sidebar for navigation.',
    developmentApproach:
      'Static generation with incremental builds. Search powered by client-side indexing. Code blocks with copy-to-clipboard and syntax highlighting.',
    hosting: 'Vercel',
    status: 'Live',
    liveUrl: 'https://the-trophies-school.vercel.app/',
    sourceUrl: null,
    gallery: [
      'https://images.pexels.com/photos/14553704/pexels-photo-14553704.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    size: 'small',
  },

  {
    id: '',
    title: 'IHCP',
    category: 'Web Development',
    year: '2025',
    thumbnail:
      'https://res.cloudinary.com/djpdesqrs/image/upload/v1767431022/Screenshot_2026-01-03_100153_gus5uz.png',
    heroImage:
      'https://images.pexels.com/photos/14553704/pexels-photo-14553704.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    description:
      'A developer documentation site with a clean, readable interface, interactive code examples, and a powerful search experience.',
    objective:
      'To make technical documentation approachable, searchable, and enjoyable to navigate.',
    role: ['UI Design', 'UX', 'Frontend Development'],
    duration: '5 Weeks',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadCN'],
    features: [
      'Full-text search with keyboard shortcut',
      'Syntax-highlighted code blocks',
      'Table of contents navigation',
      'Dark mode by default',
      'MDX content support',
    ],
    designApproach:
      'A documentation interface that feels like a well-designed book. Clear typographic hierarchy, generous line height, and a persistent sidebar for navigation.',
    developmentApproach:
      'Static generation with incremental builds. Search powered by client-side indexing. Code blocks with copy-to-clipboard and syntax highlighting.',
    hosting: 'Vercel',
    status: 'Live',
    liveUrl: 'https://ihcp.vercel.app/',
    sourceUrl: null,
    gallery: [
      'https://images.pexels.com/photos/14553704/pexels-photo-14553704.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    size: 'small',
  },
];
