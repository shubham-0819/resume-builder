import { useState } from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ResumeForm } from '@/components/ResumeForm';
import { ResumePreview } from '@/components/ResumePreview';
import { Header } from '@/components/Header';
import { ResumeData } from '@/types/resume';
import { ResumeTemplate } from '@/types/template';
import { defaultResumeData } from '@/data/defaultResumeData';
import { templates } from '@/data/templates';

export default function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [currentTemplate, setCurrentTemplate] = useState<ResumeTemplate>(templates[0]);

  const handleTemplateSelect = (template: ResumeTemplate) => {
    setCurrentTemplate(template);
  };

  const handleImportJSON = (data: ResumeData) => {
    setResumeData(data);
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <Header 
        onTemplateSelect={handleTemplateSelect}
        resumeData={resumeData}
        onImportJSON={handleImportJSON}
      />
      <div className="flex-1">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={30} minSize={25} maxSize={40}>
            <div className="h-full p-4 overflow-y-auto">
              <ResumeForm data={resumeData} onChange={setResumeData} />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={70}>
            <div className="h-full p-4 overflow-y-auto">
              <ResumePreview data={resumeData} template={currentTemplate} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}