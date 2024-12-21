import { ResumeData } from '@/types/resume';
import { ResumeTemplate } from '@/types/template';
import { Mail, Phone, MapPin, Link } from 'lucide-react';

interface ResumePreviewProps {
  data: ResumeData;
  template: ResumeTemplate;
}

export function ResumePreview({ data, template }: ResumePreviewProps) {
  const { styles } = template;
  
  return (
    <div className="resume-preview flex justify-center">
      <div 
        className="w-[210mm] min-h-[297mm] bg-white"
        style={{
          color: styles.text,
          backgroundColor: styles.background,
          fontFamily: styles.bodyFont,
          boxShadow: `${styles.shadowSize} ${styles.shadowColor}`,
          padding: styles.contentPadding,
        }}
      >
        {/* Header Section */}
        <header 
          className={`mb-${styles.sectionSpacing} pb-6 border-b`}
          style={{ 
            borderBottomColor: styles.accent,
            borderBottomWidth: styles.borderWidth
          }}
        >
          <h1 
            style={{ 
              color: styles.primary,
              fontFamily: styles.headingFont,
              fontSize: styles.fontSize.h1,
            }}
            className="mb-2"
          >
            {data.name}
          </h1>
          <h2 className="text-xl mb-4" style={{ color: styles.secondary }}>
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
                style={{ color: styles.accent }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link size={16} />
                {link.platform}
              </a>
            ))}
          </div>
        </header>

        <div className={`space-y-${styles.sectionSpacing}`}>
          {/* Summary Section */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3" style={{ color: styles.primary }}>
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed">{data.summary}</p>
          </section>

          {/* Experience Section */}
          <section>
            <h2 
              className="mb-4"
              style={{ 
                color: styles.primary,
                fontFamily: styles.headingFont,
                fontSize: styles.fontSize.h2,
              }}
            >
              Professional Experience
            </h2>
            <div className={`space-y-${styles.itemSpacing}`}>
              {data.experience.map((exp, index) => (
                <div 
                  key={index}
                  className={`${
                    styles.sectionStyle === 'card' 
                      ? 'p-4 rounded-lg shadow-sm' 
                      : styles.sectionStyle === 'divided' 
                      ? 'pb-4 border-b' 
                      : ''
                  }`}
                  style={{
                    borderColor: styles.borderColor,
                    borderRadius: styles.borderRadius,
                  }}
                >
                  <div className="flex justify-between mb-2">
                    <div>
                      <h4 className="font-semibold" style={{ color: styles.secondary }}>
                        {exp.position}
                      </h4>
                      <div className="text-sm font-medium">{exp.company}</div>
                    </div>
                    <div className="text-sm text-right">
                      <div>{exp.startDate} - {exp.endDate}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {exp.bulletPoints.map((bullet, i: number) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 
              className="mb-6"
              style={{ 
                color: styles.primary,
                fontFamily: styles.headingFont,
                fontSize: styles.fontSize.h2,
              }}
            >
              Technical Skills
            </h2>
            <div className={
              styles.skillStyle === 'grid' 
                ? 'grid grid-cols-3 gap-6'
                : styles.skillStyle === 'tags'
                ? 'flex flex-wrap gap-3'
                : 'space-y-3'
            }>
              {data.skills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <h3 
                    className="mb-3"
                    style={{ 
                      color: styles.secondary,
                      fontFamily: styles.headingFont,
                      fontSize: styles.fontSize.h3,
                    }}
                  >
                    {skill.category}
                  </h3>
                  <div className={
                    styles.skillStyle === 'tags'
                      ? 'flex flex-wrap gap-2'
                      : 'space-y-2'
                  }>
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className={
                          styles.skillStyle === 'tags'
                            ? 'px-3 py-1 rounded-full text-sm'
                            : 'block text-sm'
                        }
                        style={{
                          backgroundColor: styles.skillStyle === 'tags' ? styles.accent + '20' : 'transparent',
                          color: styles.text,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h3 className="text-lg font-semibold mb-4" style={{ color: styles.primary }}>
              Education
            </h3>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-semibold" style={{ color: styles.secondary }}>
                      {edu.institution}
                    </h4>
                    <div className="text-sm">{edu.degree}</div>
                    <div className="text-sm mt-1">{edu.description}</div>
                  </div>
                  <div className="text-sm text-right">
                    <div>{edu.startDate} - {edu.endDate}</div>
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