import { ResumeTemplate } from '@/types/template';

export const templates: ResumeTemplate[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'A clean and professional template with a modern layout',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80',
    styles: {
      primary: '#1a365d',
      secondary: '#2d3748',
      accent: '#3182ce',
      background: '#ffffff',
      text: '#2d3748'
    }
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'A minimalist design focusing on content clarity',
    thumbnail: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400&q=80',
    styles: {
      primary: '#1a202c',
      secondary: '#4a5568',
      accent: '#3182ce',
      background: '#ffffff',
      text: '#2d3748'
    }
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Stand out with this creative and bold design',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80',
    styles: {
      primary: '#44337a',
      secondary: '#553c9a',
      accent: '#805ad5',
      background: '#ffffff',
      text: '#2d3748'
    }
  }
];