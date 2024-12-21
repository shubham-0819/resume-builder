export interface Contact {
  icon: string;
  value: string;
}

export interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  bulletPoints: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface ResumeData {
  name: string;
  jobTitle: string;
  contact: Contact[];
  socialLinks: SocialLink[];
  summary: string;
  experience: Experience[];
  skills: Skill[];
  education: Education[];
}