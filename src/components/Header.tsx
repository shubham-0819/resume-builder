import { Button } from '@/components/ui/button';
import { TemplateSelector } from './TemplateSelector';
import { ResumeTemplate } from '@/types/template';
import { Download, FileUp, Briefcase, PanelLeftClose, PanelLeftOpen, Github as GithubIcon } from 'lucide-react';
import { ExportDialog } from './ExportDialog';
import { useState, useRef } from 'react';
import { ResumeData } from '@/types/resume';

interface HeaderProps {
  onTemplateSelect: (template: ResumeTemplate) => void;
  resumeData: ResumeData;
  onImportJSON: (data: ResumeData) => void;
  isSidebarVisible: boolean;
  onToggleSidebar: () => void;
}

export function Header({ 
  onTemplateSelect, 
  resumeData, 
  onImportJSON,
  isSidebarVisible,
  onToggleSidebar 
}: HeaderProps) {
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
    <header className="border-b px-4 py-2 flex items-center gap-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggleSidebar}
        className="shrink-0"
      >
        {isSidebarVisible ? <PanelLeftClose /> : <PanelLeftOpen />}
      </Button>
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

      <a
        href="https://github.com/shubham-0819"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="ghost" size="icon">
          <GithubIcon className="h-5 w-5" />
        </Button>
      </a>

      <ExportDialog 
        open={isExportOpen} 
        onOpenChange={setIsExportOpen}
        resumeData={resumeData}
      />
    </header>
  );
}