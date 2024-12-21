export interface TemplateStyles {
  // Colors
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  
  // Typography
  headingFont: string;
  bodyFont: string;
  fontSize: {
    h1: string;
    h2: string;
    h3: string;
    body: string;
    small: string;
  };
  
  // Spacing
  sectionSpacing: string;
  itemSpacing: string;
  contentPadding: string;
  
  // Layout
  headerStyle: 'centered' | 'left' | 'split';
  sectionStyle: 'card' | 'divided' | 'minimal';
  skillStyle: 'tags' | 'list' | 'grid';
  
  // Borders & Shadows
  borderRadius: string;
  borderWidth: string;
  borderColor: string;
  shadowColor: string;
  shadowSize: string;
}

export interface ResumeTemplate {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  styles: TemplateStyles;
}