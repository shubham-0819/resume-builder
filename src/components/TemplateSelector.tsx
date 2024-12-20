import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { templates } from '@/data/templates';
import { ResumeTemplate } from '@/types/template';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface TemplateSelectorProps {
  onSelect: (template: ResumeTemplate) => void;
}

export function TemplateSelector({ onSelect }: TemplateSelectorProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Change Template</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Choose a Template</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {templates.map((template) => (
            <Card 
              key={template.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onSelect(template)}
            >
              <CardHeader>
                <CardTitle>{template.name}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={template.thumbnail} 
                  alt={template.name}
                  className="w-full h-40 object-cover rounded-md"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}