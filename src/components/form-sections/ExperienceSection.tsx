import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Experience } from "@/types/resume";
import { Plus, Trash2, GripVertical } from "lucide-react";
import { Textarea } from "../ui/textarea";

interface ExperienceSectionProps {
  experiences: Experience[];
  onChange: (experiences: Experience[]) => void;
}

export function ExperienceSection({ experiences = [], onChange }: ExperienceSectionProps) {
  const addExperience = () => {
    onChange([
      ...experiences,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        bulletPoints: [""],
      },
    ]);
  };

  const updateExperience = (index: number, field: keyof Experience, value: string) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: value };
    onChange(updatedExperiences);
  };

  const removeExperience = (index: number) => {
    onChange(experiences.filter((_, i) => i !== index));
  };

  const addBulletPoint = (experienceIndex: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[experienceIndex].bulletPoints.push("");
    onChange(updatedExperiences);
  };

  const updateBulletPoint = (experienceIndex: number, bulletIndex: number, value: string) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[experienceIndex].bulletPoints[bulletIndex] = value;
    onChange(updatedExperiences);
  };

  const removeBulletPoint = (experienceIndex: number, bulletIndex: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[experienceIndex].bulletPoints = updatedExperiences[experienceIndex].bulletPoints.filter((_, i) => i !== bulletIndex);
    onChange(updatedExperiences);
  };

  return (
    <div className="space-y-4">
      {experiences.map((experience, index) => (
        <div key={index} className="space-y-4 p-4 border rounded-lg">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Experience {index + 1}</h4>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeExperience(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Company"
              value={experience.company}
              onChange={(e) => updateExperience(index, "company", e.target.value)}
            />
            <Input
              placeholder="Position"
              value={experience.position}
              onChange={(e) => updateExperience(index, "position", e.target.value)}
            />
            <Input
              placeholder="Start Date"
              value={experience.startDate}
              onChange={(e) => updateExperience(index, "startDate", e.target.value)}
            />
            <Input
              placeholder="End Date"
              value={experience.endDate}
              onChange={(e) => updateExperience(index, "endDate", e.target.value)}
            />
            <Input
              placeholder="Location"
              value={experience.location}
              onChange={(e) => updateExperience(index, "location", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h5 className="text-sm font-medium">Bullet Points</h5>
              <Button
                variant="outline"
                size="sm"
                onClick={() => addBulletPoint(index)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Point
              </Button>
            </div>
            
            {experience.bulletPoints.map((bullet, bulletIndex) => (
              <div key={bulletIndex} className="flex gap-2 items-start">
                <GripVertical className="h-4 w-4 mt-2 text-gray-400" />
                <Textarea
                  placeholder="Enter bullet point..."
                  value={bullet}
                  onChange={(e) => updateBulletPoint(index, bulletIndex, e.target.value)}
                  className="flex-1"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeBulletPoint(index, bulletIndex)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Button onClick={addExperience} variant="outline" className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        Add Experience
      </Button>
    </div>
  );
} 