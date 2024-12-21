import { ResumeData } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";

interface EducationSectionProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export function EducationSection({ data, onChange }: EducationSectionProps) {
  const addEducation = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        { 
          institution: "", 
          degree: "", 
          startDate: "", 
          endDate: "", 
          location: "",
          description: "" 
        }
      ]
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Education</h2>
      <div className="space-y-4">
        <Button onClick={addEducation} size="sm" variant="outline" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </Button>
        
        {data.education.map((edu, index) => (
          <div key={index} className="space-y-4 p-4 border rounded-lg">
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  onChange({
                    ...data,
                    education: data.education.filter((_, i) => i !== index)
                  })
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label>Institution</Label>
                <Input
                  value={edu.institution}
                  onChange={(e) => {
                    const newEdu = [...data.education];
                    newEdu[index] = { ...edu, institution: e.target.value };
                    onChange({ ...data, education: newEdu });
                  }}
                />
              </div>
              
              <div>
                <Label>Degree</Label>
                <Input
                  value={edu.degree}
                  onChange={(e) => {
                    const newEdu = [...data.education];
                    newEdu[index] = { ...edu, degree: e.target.value };
                    onChange({ ...data, education: newEdu });
                  }}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Start Date</Label>
                  <Input
                    value={edu.startDate}
                    onChange={(e) => {
                      const newEdu = [...data.education];
                      newEdu[index] = { ...edu, startDate: e.target.value };
                      onChange({ ...data, education: newEdu });
                    }}
                  />
                </div>
                <div>
                  <Label>End Date</Label>
                  <Input
                    value={edu.endDate}
                    onChange={(e) => {
                      const newEdu = [...data.education];
                      newEdu[index] = { ...edu, endDate: e.target.value };
                      onChange({ ...data, education: newEdu });
                    }}
                  />
                </div>
              </div>
              
              <div>
                <Label>Location</Label>
                <Input
                  value={edu.location}
                  onChange={(e) => {
                    const newEdu = [...data.education];
                    newEdu[index] = { ...edu, location: e.target.value };
                    onChange({ ...data, education: newEdu });
                  }}
                />
              </div>
              
              <div>
                <Label>Description</Label>
                <Textarea
                  value={edu.description}
                  onChange={(e) => {
                    const newEdu = [...data.education];
                    newEdu[index] = { ...edu, description: e.target.value };
                    onChange({ ...data, education: newEdu });
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 