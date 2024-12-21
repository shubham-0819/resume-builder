import { ResumeData } from '@/types/resume';

export const defaultResumeData: ResumeData = {
  name: "Shubham singh",
  jobTitle: "Software Developer",
  contact: [
    { icon: "📧", value: "shubhamsingh0819@gmail.com" },
    { icon: "📱", value: "+91 XXXXXXXXXX" },
    { icon: "📍", value: "New Delhi, India" }
  ],
  socialLinks: [
    { platform: "GitHub", icon: "🔗", url: "https://github.com/shubham-0819" },
    { platform: "Twitter", icon: "🔗", url: "https://twitter.com/shubham_0819" }
  ],
  summary: "Frontend-focused Software Developer with 3+ years of experience specializing in building responsive and scalable web applications. Expert in Angular, React, and modern JavaScript, with a strong focus on creating reusable UI components and optimizing application performance.",
  experience: [{
    company: "MapMyIndia",
    position: "Software Developer",
    startDate: "Oct, 2021",
    endDate: "Present",
    location: "New Delhi",
    bulletPoints: [
      "Architected and developed a comprehensive computer vision workflow platform, incorporating inference viewing, data labeling, and quality control capabilities",
      "Led frontend architecture decisions and established coding standards for a team of 4 developers",
      "Optimized performance and scalability of web applications",
      "Developed and maintained a geospatial analytics platform integrating computer vision capabilities with mapping functionalities, serving 10K+ daily users",
      "Created a reusable UI component library using web components that reduced development time by 50%"
    ]
  },
  {
    company: "MapMyIndia",
    position: "Software Developer Intern",
    startDate: "Apr, 2021",
    endDate: "Sep, 2021",
    location: "New Delhi",
    bulletPoints: [
      "Contributed to developing training program for new interns, focusing on Angular, TypeScript, and web component development",
      "Developed a web application for ML team to view and analyze inference results",
      "Used web scraping to automate data extraction from external sources",
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
      startDate: "Aug 2017",
      endDate: "Sep 2021",
      location: "Greater Noida",
      description: "Graduated with First Class Honours"
    }
  ]
};