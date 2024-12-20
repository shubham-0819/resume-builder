import { ResumeData } from '@/types/resume';
import { ResumeTemplate } from '@/types/template';
import { Mail, Phone, MapPin, Link } from 'lucide-react';

interface ResumePreviewProps {
  data: ResumeData;
  template: ResumeTemplate;
}

export function ResumePreview({ data, template }: ResumePreviewProps) {
  return (
    <div className="flex justify-center">
      <div 
        className="w-[210mm] min-h-[297mm] bg-white shadow-lg mx-auto"
        style={{
          color: template.styles.text,
          backgroundColor: template.styles.background,
        }}
      >
        {/* Header Section */}
        <header className="p-8 border-b" style={{ borderColor: template.styles.accent }}>
          <h1 className="text-3xl font-bold mb-2" style={{ color: template.styles.primary }}>
            {data.name}
          </h1>
          <h2 className="text-xl mb-4" style={{ color: template.styles.secondary }}>
            {data.jobTitle}
          </h2>
          <div className="flex flex-wrap gap-4 text-sm">
            {data.contact.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.icon === "📧" && <Mail size={16} />}
                {item.icon === "📱" && <Phone size={16} />}
                {item.icon === "📍" && <MapPin size={16} />}
                <span>{item.value}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            {data.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="flex items-center gap-2 hover:underline"
                style={{ color: template.styles.accent }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link size={16} />
                {link.platform}
              </a>
            ))}
          </div>
        </header>

        <div className="p-8">
          {/* Summary Section */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3" style={{ color: template.styles.primary }}>
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed">{data.summary}</p>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-4" style={{ color: template.styles.primary }}>
              Professional Experience
            </h3>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <div>
                    <h4 className="font-semibold" style={{ color: template.styles.secondary }}>
                      {exp.position}
                    </h4>
                    <div className="text-sm font-medium">{exp.company}</div>
                  </div>
                  <div className="text-sm text-right">
                    <div>{exp.date}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-4" style={{ color: template.styles.primary }}>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {data.skills.map((category, index) => (
                <div key={index}>
                  <h4 className="font-medium mb-2" style={{ color: template.styles.secondary }}>
                    {category.category}
                  </h4>
                  <ul className="list-disc list-inside text-sm">
                    {category.items.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h3 className="text-lg font-semibold mb-4" style={{ color: template.styles.primary }}>
              Education
            </h3>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-semibold" style={{ color: template.styles.secondary }}>
                      {edu.institution}
                    </h4>
                    <div className="text-sm">{edu.degree}</div>
                  </div>
                  <div className="text-sm text-right">
                    <div>{edu.date}</div>
                    <div>{edu.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}