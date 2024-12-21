import { useState, useEffect } from 'react';
import { ResumePreview } from '@/components/ResumePreview';
import { Header } from '@/components/Header';
import { ResumeData } from '@/types/resume';
import { ResumeTemplate } from '@/types/template';
import { defaultResumeData } from '@/data/defaultResumeData';
import { templates } from '@/data/templates';
import '@/styles/scrollbar.css';
import { ResumeForm } from '@/components/ResumeForm';
import { GripVertical } from 'lucide-react';

export default function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [currentTemplate, setCurrentTemplate] = useState<ResumeTemplate>(templates[0]);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(400);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleTemplateSelect = (template: ResumeTemplate) => {
    setCurrentTemplate(template);
  };

  const handleImportJSON = (data: ResumeData) => {
    setResumeData(data);
  };

  const startResizing = (e: React.MouseEvent) => {
    setSidebarWidth(e.clientX);
    setIsResizing(true);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopResizing);
  };

  const stopResizing = () => {
    setIsResizing(false);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', stopResizing);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing) {
      const newWidth = Math.min(Math.max(300, e.clientX), 600);
      setSidebarWidth(newWidth);
    }
  };

  useEffect(() => {
    if (isResizing) {
      document.body.style.userSelect = 'none';
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', stopResizing);
    }

    return () => {
      document.body.style.userSelect = '';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing]);

  return (
    <div className="h-screen flex flex-col bg-background">
      <Header 
        onTemplateSelect={handleTemplateSelect}
        resumeData={resumeData}
        onImportJSON={handleImportJSON}
        isSidebarVisible={isSidebarVisible}
        onToggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)}
      />
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel */}
        {isSidebarVisible && (
          <div 
            className="h-full overflow-y-auto"
            style={{ width: `${sidebarWidth}px`, minWidth: '300px', maxWidth: '600px' }}
          >
            <div className="h-full">
              <ResumeForm data={resumeData} onChange={setResumeData} />
            </div>
          </div>
        )}

        {/* Resizer */}
        {isSidebarVisible && (
          <div
            className="w-1 hover:w-2 group cursor-col-resize relative flex items-center justify-center"
            onMouseDown={startResizing}
          >
            <div className="absolute h-8 w-4 bg-border group-hover:bg-primary/50 rounded flex items-center justify-center">
              <GripVertical className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 h-full p-4 overflow-y-auto bg-slate-50">
          <ResumePreview data={resumeData} template={currentTemplate} />
        </div>
      </div>
    </div>
  );
}