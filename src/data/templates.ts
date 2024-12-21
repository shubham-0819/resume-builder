import { ResumeTemplate } from '@/types/template';

export const templates: ResumeTemplate[] = [
  {
    id: 'minimal',
    name: 'Minimal Classic',
    description: 'Clean and professional with classic typography',
    thumbnail: '/templates/minimal.jpeg',
    styles: {
      // Colors
      primary: '#374151',
      secondary: '#6B7280',
      accent: '#D1D5DB',
      background: '#FFFFFF',
      text: '#1F2937',
      
      // Typography
      headingFont: 'Nunito, sans-serif',
      bodyFont: 'Nunito, sans-serif',
      fontSize: {
        h1: '1.5rem',
        h2: '1rem',
        h3: '0.9rem',
        body: '0.875rem',
        small: '0.75rem',
      },
      
      // Spacing
      sectionSpacing: '3rem',
      itemSpacing: '2rem',
      contentPadding: '2.5rem',
      
      // Layout
      headerStyle: 'left',
      sectionStyle: 'divided',
      skillStyle: 'grid',
      
      // Borders & Shadows
      borderRadius: '0',
      borderWidth: '1px',
      borderColor: '#E5E7EB',
      shadowColor: 'transparent',
      shadowSize: 'none',
    },
  },
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Contemporary design with balanced spacing',
    thumbnail: '/templates/modern.png',
    styles: {
      // Colors
      primary: '#2563EB',
      secondary: '#3B82F6',
      accent: '#60A5FA',
      background: '#FFFFFF',
      text: '#1F2937',
      
      // Typography
      headingFont: 'system-ui, sans-serif',
      bodyFont: 'system-ui, sans-serif',
      fontSize: {
        h1: '2.25rem',
        h2: '1.75rem',
        h3: '1.375rem',
        body: '0.9375rem',
        small: '0.8125rem',
      },
      
      // Spacing
      sectionSpacing: '2.5rem',
      itemSpacing: '2rem',
      contentPadding: '3rem',
      
      // Layout
      headerStyle: 'centered',
      sectionStyle: 'divided',
      skillStyle: 'tags',
      
      // Borders & Shadows
      borderRadius: '0.5rem',
      borderWidth: '1px',
      borderColor: '#E5E7EB',
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowSize: '0 4px 6px',
    },
  },
  {
    id: 'creative',
    name: 'Creative Bold',
    description: 'Stand out with unique layout and accents',
    thumbnail: '/templates/creative.png',
    styles: {
      // Colors
      primary: '#7C3AED',
      secondary: '#9333EA',
      accent: '#A855F7',
      background: '#F9FAFB',
      text: '#111827',
      
      // Typography
      headingFont: 'Poppins, sans-serif',
      bodyFont: 'Inter, sans-serif',
      fontSize: {
        h1: '2.5rem',
        h2: '2rem',
        h3: '1.5rem',
        body: '1rem',
        small: '0.875rem',
      },
      
      // Spacing
      sectionSpacing: '3rem',
      itemSpacing: '2.5rem',
      contentPadding: '4rem',
      
      // Layout
      headerStyle: 'split',
      sectionStyle: 'card',
      skillStyle: 'grid',
      
      // Borders & Shadows
      borderRadius: '1rem',
      borderWidth: '2px',
      borderColor: '#F3F4F6',
      shadowColor: 'rgba(124, 58, 237, 0.1)',
      shadowSize: '0 8px 16px',
    },
  },
];