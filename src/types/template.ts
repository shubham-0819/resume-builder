export interface ResumeTemplate {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  styles: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
}