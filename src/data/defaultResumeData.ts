import { ResumeData } from '@/types/resume';

export const defaultResumeData: ResumeData = {
  name: "Your name",
  jobTitle: "Senior Software Developer",
  contact: [
    { icon: "📧", value: "your-username@gmail.com" },
    { icon: "📱", value: "+91 XXXXXXXXXX" },
    { icon: "📍", value: "New Delhi, India" }
  ],
  socialLinks: [
    { platform: "GitHub", icon: "🔗", url: "https://github.com/gitub-username" },
    { platform: "Twitter", icon: "🔗", url: "https://twitter.com/twitter-handle" }
  ],
  summary: "Results-driven Software Developer with 3+ years of experience specializing in full-stack web development. Proven expertise in JavaScript, Angular, and Node.js, with a strong focus on building scalable applications and reusable components. Experienced team lead with a track record of mentoring developers and delivering innovative solutions in geospatial and computer vision domains.",
  experience: [
    {
      company: "Your Company",
      position: "Software Developer / Team Lead",
      date: "Apr 2021 - Present",
      location: "New Delhi",
      achievements: [
        "Architected and developed a comprehensive computer vision workflow platform, incorporating inference viewing, data labeling, and quality control capabilities, leading to a 40% improvement in ML model development efficiency",
        "Designed and implemented a framework-agnostic UI component library and AI API SDKs, reducing development time by 50% for subsequent projects",
        "Built a distributed AI data management system using Express, SQLite, and PostgreSQL, handling 10TB+ of vision data",
        "Developed and maintained a geospatial analytics platform integrating computer vision capabilities with mapping functionalities, serving 100K+ daily users",
        "Led implementation of enterprise-grade web applications using Angular and custom web components",
        "Mentored a team of four developers through weekly workshops, resulting in 30% faster project delivery times"
      ]
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        "JavaScript (ES6+)",
        "Angular",
        "React",
        "HTML5/CSS3",
        "WebGL"
      ]
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "SQLite"
      ]
    },
    {
      category: "DevOps & Tools",
      items: [
        "Docker",
        "Jenkins",
        "Git/GitLab",
        "Linux",
        "Shell Scripting"
      ]
    }
  ],
  education: [
    {
      institution: "ITS Engineering College, AKTU",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      date: "Aug 2017 - Sep 2021",
      location: "Greater Noida"
    }
  ]
};