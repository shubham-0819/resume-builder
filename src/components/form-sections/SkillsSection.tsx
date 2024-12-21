import { ResumeData } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

interface SkillsSectionProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export function SkillsSection({ data, onChange }: SkillsSectionProps) {
  const addSkill = () => {
    onChange({
      ...data,
      skills: [...data.skills, { name: "", level: "Intermediate" }]
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Skills</h2>
      <div className="space-y-4">
        <Button onClick={addSkill} size="sm" variant="outline" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Skill
        </Button>
        
        {data.skills.map((skill, index) => (
          <div key={index} className="space-y-4 p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <Label>Skill Name</Label>
                <Input
                  value={skill.name}
                  onChange={(e) => {
                    const newSkills = [...data.skills];
                    newSkills[index] = { ...skill, name: e.target.value };
                    onChange({ ...data, skills: newSkills });
                  }}
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={() =>
                  onChange({
                    ...data,
                    skills: data.skills.filter((_, i) => i !== index)
                  })
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 