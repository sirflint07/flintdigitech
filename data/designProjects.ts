export interface DesignProject {
  id: string;
  title: string;
  category: string;
  client: string | null;
  year: string;
  image: string;
  description: string;
  gallery: string[];
}

export const designProjects: DesignProject[] = [
  {
    id: 'urban-campaign',
    title: 'Urban Pulse Campaign',
    category: 'Creative Campaign',
    client: null,
    year: '2025',
    image:
      'https://images.pexels.com/photos/3964758/pexels-photo-3964758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'A multi-piece promotional campaign combining bold typography, street-inspired layouts, and a vibrant color system designed for social and print.',
    gallery: [
      'https://images.pexels.com/photos/3964758/pexels-photo-3964758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/3964576/pexels-photo-3964576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'minimal-poster',
    title: 'Minimal Motion Poster',
    category: 'Poster Design',
    client: null,
    year: '2025',
    image:
      'https://images.pexels.com/photos/3964671/pexels-photo-3964671.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'A series of minimalist posters exploring geometric forms, negative space, and typographic hierarchy.',
    gallery: [
      'https://images.pexels.com/photos/3964671/pexels-photo-3964671.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'product-advertising',
    title: 'Product Spotlight Series',
    category: 'Product Advertising',
    client: null,
    year: '2024',
    image:
      'https://images.pexels.com/photos/3964580/pexels-photo-3964580.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Product advertising visuals combining clean photography with bold graphic overlays for social media campaigns.',
    gallery: [
      'https://images.pexels.com/photos/3964580/pexels-photo-3964580.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'social-graphics',
    title: 'Social Media Graphics Set',
    category: 'Social Media Graphics',
    client: null,
    year: '2025',
    image:
      'https://images.pexels.com/photos/3964837/pexels-photo-3964837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'A cohesive set of social media graphics designed for engagement, featuring consistent visual language across carousel posts, stories, and headers.',
    gallery: [
      'https://images.pexels.com/photos/3964837/pexels-photo-3964837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'brand-visuals',
    title: 'Brand Visual System',
    category: 'Brand Visuals',
    client: null,
    year: '2024',
    image:
      'https://images.pexels.com/photos/3964499/pexels-photo-3964499.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'A complete brand visual system including logo variations, color palette, typography guidelines, and application examples across digital and print.',
    gallery: [
      'https://images.pexels.com/photos/3964499/pexels-photo-3964499.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'flyer-design',
    title: 'Event Flyer Series',
    category: 'Flyer Design',
    client: null,
    year: '2025',
    image:
      'https://images.pexels.com/photos/3964452/pexels-photo-3964452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Eye-catching event flyers designed for maximum visibility, combining bold type with dynamic layout compositions.',
    gallery: [
      'https://images.pexels.com/photos/3964452/pexels-photo-3964452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
];
