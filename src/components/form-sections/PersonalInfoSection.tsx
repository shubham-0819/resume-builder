import { ResumeData, Contact, SocialLink } from '@/types/resume';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';

interface PersonalInfoSectionProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export function PersonalInfoSection({ data, onChange }: PersonalInfoSectionProps) {
  const updateField = (field: keyof ResumeData, value: string | Contact[] | SocialLink[]) => {
    onChange({ ...data, [field]: value });
  };

  const addContact = () => {
    updateField('contact', [...data.contact, { icon: "📧", value: "" }]);
  };

  const removeContact = (index: number) => {
    const newContact = data.contact.filter((_, i) => i !== index);
    updateField('contact', newContact);
  };

  const updateContact = (index: number, value: string) => {
    const newContact = [...data.contact];
    newContact[index] = { ...newContact[index], value };
    updateField('contact', newContact);
  };

  const addSocialLink = () => {
    updateField('socialLinks', [...data.socialLinks, { platform: "", icon: "🔗", url: "" }]);
  };

  const removeSocialLink = (index: number) => {
    const newLinks = data.socialLinks.filter((_, i) => i !== index);
    updateField('socialLinks', newLinks);
  };

  const updateSocialLink = (index: number, field: 'platform' | 'url', value: string) => {
    const newLinks = [...data.socialLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    updateField('socialLinks', newLinks);
  };

  return (
    <AccordionItem value="personal">
      <AccordionTrigger>Personal Information</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e) => updateField('name', e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input
              id="jobTitle"
              value={data.jobTitle}
              onChange={(e) => updateField('jobTitle', e.target.value)}
            />
          </div>

          <div>
            <Label>Contact Information</Label>
            {data.contact.map((item, index) => (
              <div key={index} className="flex gap-2 mt-2">
                <Input
                  value={item.value}
                  onChange={(e) => updateContact(index, e.target.value)}
                  placeholder="Contact info"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => removeContact(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={addContact}
              className="mt-2"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Contact
            </Button>
          </div>

          <div>
            <Label>Social Links</Label>
            {data.socialLinks.map((link, index) => (
              <div key={index} className="flex gap-2 mt-2">
                <Input
                  value={link.platform}
                  onChange={(e) => updateSocialLink(index, 'platform', e.target.value)}
                  placeholder="Platform"
                  className="flex-1"
                />
                <Input
                  value={link.url}
                  onChange={(e) => updateSocialLink(index, 'url', e.target.value)}
                  placeholder="URL"
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => removeSocialLink(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={addSocialLink}
              className="mt-2"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Social Link
            </Button>
          </div>

          <div>
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea
              id="summary"
              value={data.summary}
              onChange={(e) => updateField('summary', e.target.value)}
              className="h-32"
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}