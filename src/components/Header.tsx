import { Button } from '@/components/ui/button';
import { TemplateSelector } from './TemplateSelector';
import { ResumeTemplate } from '@/types/template';
import { Download, FileJson, FileUp, Briefcase } from 'lucide-react';
import { ExportDialog } from './ExportDialog';
import { useState, useRef } from 'react';
import { ResumeData } from '@/types/resume';

interface HeaderProps {
  onTemplateSelect: (template: ResumeTemplate) => void;
  resumeData: ResumeData;
  onImportJSON: (data: ResumeData) => void;
}

export function Header({ onTemplateSelect, resumeData, onImportJSON }: HeaderProps) {
  const [isExportOpen, setIsExportOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target?.result as string);
          onImportJSON(importedData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="flex items-center gap-2 flex-1">
          <Briefcase className="h-6 w-6" />
          <h2 className="text-lg font-semibold">Resume Builder</h2>
        </div>
        
        <TemplateSelector onSelect={onTemplateSelect} />
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".json"
          className="hidden"
        />
        
        <Button variant="outline" onClick={handleImportClick}>
          <FileUp className="mr-2 h-4 w-4" />
          Import
        </Button>
        
        <Button onClick={() => setIsExportOpen(true)}>
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>

        <ExportDialog 
          open={isExportOpen} 
          onOpenChange={setIsExportOpen}
          resumeData={resumeData}
        />
      </div>
    </div>
  );
}