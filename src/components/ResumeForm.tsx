import { ResumeData } from '@/types/resume';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion } from '@/components/ui/accordion';
import { PersonalInfoSection } from './form-sections/PersonalInfoSection';
// import { ExperienceSection } from './form-sections/experience-section';
// import { SkillsSection } from './form-sections/SkillsSection';
// import { EducationSection } from './form-sections/EducationSection';

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export function ResumeForm({ data, onChange }: ResumeFormProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <PersonalInfoSection data={data} onChange={onChange} />
          {/* <ExperienceSection data={data} onChange={onChange} />
          <SkillsSection data={data} onChange={onChange} />
          <EducationSection data={data} onChange={onChange} /> */}
        </Accordion>
      </CardContent>
    </Card>
  );
}