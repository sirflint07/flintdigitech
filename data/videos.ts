export type VideoType = 'Tech Review' | 'Unboxing' | 'Tutorial' | 'Creative' | 'Other';

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  category: string;
  videoUrl: string | null;
  date: string;
  featured: boolean;
  type: VideoType;
}

export const videos: Video[] = [
  {
    id: 'tech-review-1',
    title: 'Flagship Smartphone Review',
    thumbnail:
      'https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A deep dive into the latest flagship smartphone — design, performance, camera, and real-world usage.',
    category: 'Smartphones',
    videoUrl: null,
    date: '2025-08',
    featured: true,
    type: 'Tech Review',
  },
  {
    id: 'tech-review-2',
    title: 'Ultrabook for Creators',
    thumbnail:
      'https://images.pexels.com/photos/5878303/pexels-photo-5878303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Testing a thin-and-light laptop for design and development workflows.',
    category: 'Laptops',
    videoUrl: null,
    date: '2025-07',
    featured: false,
    type: 'Tech Review',
  },
  {
    id: 'unboxing-1',
    title: 'Unboxing Wireless Earbuds',
    thumbnail:
      'https://images.pexels.com/photos/25809275/pexels-photo-25809275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'First look and unboxing of the latest wireless earbuds with ANC.',
    category: 'Accessories',
    videoUrl: null,
    date: '2025-09',
    featured: true,
    type: 'Unboxing',
  },
  {
    id: 'unboxing-2',
    title: 'Unboxing a Mechanical Keyboard',
    thumbnail:
      'https://images.pexels.com/photos/19124394/pexels-photo-19124394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Unboxing and first impressions of a premium mechanical keyboard.',
    category: 'Computer Peripherals',
    videoUrl: null,
    date: '2025-08',
    featured: false,
    type: 'Unboxing',
  },
  {
    id: 'unboxing-3',
    title: 'Unboxing a 360 Camera',
    thumbnail:
      'https://images.pexels.com/photos/39629726/pexels-photo-39629726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Opening up a 360-degree action camera and testing its features.',
    category: 'Gadgets',
    videoUrl: null,
    date: '2025-06',
    featured: false,
    type: 'Unboxing',
  },
  {
    id: 'tech-review-3',
    title: 'Desk Setup Tour 2025',
    thumbnail:
      'https://images.pexels.com/photos/37698747/pexels-photo-37698747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A complete tour of my 2025 creative and development desk setup.',
    category: 'Creative Tools',
    videoUrl: null,
    date: '2025-09',
    featured: false,
    type: 'Creative',
  },
];

export const featuredTech = [
  {
    id: 'smartphone',
    name: 'Flagship Smartphone',
    category: 'Smartphones',
    image:
      'https://images.pexels.com/photos/12249209/pexels-photo-12249209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    note: 'Exploring camera systems, battery life, and daily performance.',
  },
  {
    id: 'ultrabook',
    name: 'Creator Ultrabook',
    category: 'Laptops',
    image:
      'https://images.pexels.com/photos/6373128/pexels-photo-6373128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    note: 'Testing thin-and-light machines for design and code workflows.',
  },
  {
    id: 'keyboard',
    name: 'Mechanical Keyboard',
    category: 'Computer Peripherals',
    image:
      'https://images.pexels.com/photos/16284691/pexels-photo-16284691.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    note: 'Switches, sound, and the typing experience compared.',
  },
  {
    id: 'earbuds',
    name: 'Wireless Earbuds',
    category: 'Accessories',
    image:
      'https://images.pexels.com/photos/1422298/pexels-photo-1422298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    note: 'ANC performance, sound quality, and comfort over long sessions.',
  },
];
