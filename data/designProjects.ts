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
    title: 'Aurium Automotive Page',
    category: 'Figma Landing Page',
    client: null,
    year: '2025',
    image:
      'https://res.cloudinary.com/djpdesqrs/image/upload/v1793595421/Gig-Image-3_qrzvwv.png',
    description:
      'A multi-piece promotional campaign combining bold typography, street-inspired layouts, and a vibrant color system designed for social and print.',
    gallery: [
      'https://res.cloudinary.com/djpdesqrs/image/upload/v1793595420/Gig-Image-2_rzfq01.png',
      'https://res.cloudinary.com/djpdesqrs/image/upload/v1793595422/Gig-Image-4_ewlaid.png',
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
      'https://res.cloudinary.com/djpdesqrs/image/upload/v1722508565/Pepsi_Thumbnail_mcov5a.png',
    description:
      'Product advertising visuals combining clean photography with bold graphic overlays for social media campaigns.',
    gallery: [
      'https://res.cloudinary.com/djpdesqrs/image/upload/v1722508563/Redbull_Thumb_x5keqh.png',
      'https://res.cloudinary.com/djpdesqrs/image/upload/v1722508562/nivea_thumbnail_osneqe.png',
      'https://res.cloudinary.com/djpdesqrs/image/upload/v1722508562/Lays_Thumbnail_psdqjl.png'
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
