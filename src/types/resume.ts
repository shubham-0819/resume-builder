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
  date: string;
  location: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  location: string;
}

export interface ResumeData {
  name: string;
  jobTitle: string;
  contact: Contact[];
  socialLinks: SocialLink[];
  summary: string;
  experience: Experience[];
  skills: SkillCategory[];
  education: Education[];
}