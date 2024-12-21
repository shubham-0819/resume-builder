import { ResumeData } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ExperienceSectionProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export function ExperienceSection({ data, onChange }: ExperienceSectionProps) {
  const addExperience = () => {
    onChange({
      ...data,
      experience: [
        ...data.experience,
        { company: "", position: "", startDate: "", endDate: "", description: "" }
      ]
    });
  };

  return (
    <AccordionItem value="experience">
      <AccordionTrigger>Work Experience</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4">
          <Button onClick={addExperience} size="sm" variant="outline" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Experience
          </Button>
          
          {data.experience.map((exp, index) => (
            <div key={index} className="space-y-4 p-4 border rounded-lg">
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    onChange({
                      ...data,
                      experience: data.experience.filter((_, i) => i !== index)
                    })
                  }
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label>Company</Label>
                  <Input
                    value={exp.company}
                    onChange={(e) => {
                      const newExp = [...data.experience];
                      newExp[index] = { ...exp, company: e.target.value };
                      onChange({ ...data, experience: newExp });
                    }}
                  />
                </div>
                
                <div>
                  <Label>Position</Label>
                  <Input
                    value={exp.position}
                    onChange={(e) => {
                      const newExp = [...data.experience];
                      newExp[index] = { ...exp, position: e.target.value };
                      onChange({ ...data, experience: newExp });
                    }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Start Date</Label>
                    <Input
                      value={exp.startDate}
                      onChange={(e) => {
                        const newExp = [...data.experience];
                        newExp[index] = { ...exp, startDate: e.target.value };
                        onChange({ ...data, experience: newExp });
                      }}
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      value={exp.endDate}
                      onChange={(e) => {
                        const newExp = [...data.experience];
                        newExp[index] = { ...exp, endDate: e.target.value };
                        onChange({ ...data, experience: newExp });
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={exp.description}
                    onChange={(e) => {
                      const newExp = [...data.experience];
                      newExp[index] = { ...exp, description: e.target.value };
                      onChange({ ...data, experience: newExp });
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
} 