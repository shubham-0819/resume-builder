import { useState } from 'react';
import { ResumePreview } from '@/components/ResumePreview';
import { Header } from '@/components/Header';
import { ResumeData } from '@/types/resume';
import { ResumeTemplate } from '@/types/template';
import { defaultResumeData } from '@/data/defaultResumeData';
import { templates } from '@/data/templates';
import '@/styles/scrollbar.css';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PanelLeftOpen } from "lucide-react";
import { ResumeForm } from '@/components/ResumeForm';

export default function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [currentTemplate, setCurrentTemplate] = useState<ResumeTemplate>(templates[0]);
  const [isOpen, setIsOpen] = useState(true);

  const handleTemplateSelect = (template: ResumeTemplate) => {
    setCurrentTemplate(template);
  };

  const handleImportJSON = (data: ResumeData) => {
    setResumeData(data);
  };

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Header 
        onTemplateSelect={handleTemplateSelect}
        resumeData={resumeData}
        onImportJSON={handleImportJSON}
      />
      <div className="flex-1 overflow-hidden relative">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="icon"
              className="absolute left-4 top-4 z-10"
            >
              <PanelLeftOpen className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="left" 
            className="w-[400px] overflow-y-auto"
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <div className="pt-8">
              <ResumeForm data={resumeData} onChange={setResumeData} />
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="h-full p-4 overflow-y-auto">
          <ResumePreview data={resumeData} template={currentTemplate} />
        </div>
      </div>
    </div>
  );
}