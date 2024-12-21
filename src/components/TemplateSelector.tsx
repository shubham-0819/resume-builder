import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { templates } from '@/data/templates';
import { ResumeTemplate } from '@/types/template';
import { useState } from 'react';

interface TemplateSelectorProps {
  onSelect: (template: ResumeTemplate) => void;
}

export function TemplateSelector({ onSelect }: TemplateSelectorProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (template: ResumeTemplate) => {
    onSelect(template);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Change Template</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Choose a Template</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {templates.map((template) => (
            <Button
              key={template.id}
              variant="outline"
              className="flex flex-col items-stretch p-0 h-auto hover:border-primary/50 transition-colors"
              onClick={() => handleSelect(template)}
            >
              <div className="p-4 text-left">
                <h3 className="font-semibold text-base">{template.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 whitespace-normal break-words">{template.description}</p>
              </div>
              <div className="relative aspect-square w-full border-t bg-muted">
                <div className="absolute inset-0 flex items-center justify-center text-4xl text-muted-foreground">
                  📄
                </div>
              </div>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}