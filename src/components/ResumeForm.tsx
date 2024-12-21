import { ResumeData } from '@/types/resume';
import { Card, CardContent } from '@/components/ui/card';
import { PersonalInfoSection } from './form-sections/PersonalInfoSection';
import { ExperienceSection } from './form-sections/ExperienceSection';
import { SkillsSection } from './form-sections/SkillsSection';
import { EducationSection } from './form-sections/EducationSection';

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export function ResumeForm({ data, onChange }: ResumeFormProps) {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <PersonalInfoSection data={data} onChange={onChange} />
        <ExperienceSection 
          experiences={data.experience} 
          onChange={(experiences) => onChange({ ...data, experience: experiences })} 
        />
        <SkillsSection data={data} onChange={onChange} />
        <EducationSection data={data} onChange={onChange} />
      </CardContent>
    </Card>
  );
}