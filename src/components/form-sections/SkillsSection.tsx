import { ResumeData } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SkillsSectionProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export function SkillsSection({ data, onChange }: SkillsSectionProps) {
  const addSkillCategory = () => {
    onChange({
      ...data,
      skills: [...data.skills, { category: "", items: [] }]
    });
  };

  const addSkillItem = (index: number, newItem: string) => {
    const newSkills = [...data.skills];
    const trimmedItem = newItem.trim();
    
    if (!trimmedItem || newSkills[index].items.includes(trimmedItem)) {
      return;
    }

    newSkills[index] = {
      ...newSkills[index],
      items: [...newSkills[index].items, trimmedItem]
    };
    onChange({ ...data, skills: newSkills });
  };

  const removeSkillItem = (skillIndex: number, itemIndex: number) => {
    const newSkills = [...data.skills];
    newSkills[skillIndex] = {
      ...newSkills[skillIndex],
      items: newSkills[skillIndex].items.filter((_, i) => i !== itemIndex)
    };
    onChange({ ...data, skills: newSkills });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Skills</h2>
      <div className="space-y-4">
        <Button onClick={addSkillCategory} size="sm" variant="outline" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Skill Category
        </Button>
        
        {data.skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="space-y-4 p-4 border rounded-lg">
            <div className="flex justify-between items-center gap-2">
              <div className="flex-1">
                <Label>Category Name</Label>
                <Input
                  value={skill.category}
                  onChange={(e) => {
                    const newSkills = [...data.skills];
                    newSkills[skillIndex] = { ...skill, category: e.target.value };
                    onChange({ ...data, skills: newSkills });
                  }}
                  placeholder="e.g., Frontend, Backend, DevOps"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="mt-6"
                onClick={() =>
                  onChange({
                    ...data,
                    skills: data.skills.filter((_, i) => i !== skillIndex)
                  })
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Label>Skills</Label>
              <Input
                placeholder="Type a skill and press Enter"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addSkillItem(skillIndex, e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }}
              />
              
              <div className="flex flex-wrap gap-2 mt-2">
                {skill.items.map((item, itemIndex) => (
                  <Badge key={itemIndex} variant="secondary" className="px-2 py-1">
                    {item}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 ml-1 hover:bg-transparent"
                      onClick={() => removeSkillItem(skillIndex, itemIndex)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 