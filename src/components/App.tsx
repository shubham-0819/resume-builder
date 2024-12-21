'use client'

import { useState } from 'react'
import { defaultResumeData } from '@/data/defaultResumeData'
import { templates } from '@/data/templates'
import { ResumeData } from '@/types/resume'
import { ResumeTemplate } from '@/types/template'
import { Header } from './Header'
import { ResumeForm } from './ResumeForm'
import { ResumePreview } from './ResumePreview'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export default function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData)
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate>(templates[0])
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  const handleTemplateSelect = (template: ResumeTemplate) => {
    setSelectedTemplate(template)
  }

  const handleDataChange = (data: ResumeData) => {
    setResumeData(data)
  }

  const handleImportJSON = (data: ResumeData) => {
    setResumeData(data)
  }

  return (
    <div className="flex flex-col h-full bg-slate-200">
      <Header 
        onTemplateSelect={handleTemplateSelect}
        resumeData={resumeData}
        onImportJSON={handleImportJSON}
        isSidebarVisible={isSidebarVisible}
        onToggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)}
      />
      
      <main className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {isSidebarVisible && (
            <>
              <ResizablePanel 
                defaultSize={25} 
                minSize={20} 
                maxSize={40} 
                className="p-2"
              >
                <div className="h-full overflow-y-auto">
                  <ResumeForm data={resumeData} onChange={handleDataChange} />
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
            </>
          )}
          <ResizablePanel className="p-2 bg-slate-100">
            <div className="h-full overflow-y-auto p-8 flex justify-center">
              <div className="bg-white rounded-lg shadow-lg p-8 w-[210mm] h-fit">
                <ResumePreview data={resumeData} template={selectedTemplate} />
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  )
} 