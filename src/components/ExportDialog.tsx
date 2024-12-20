import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { ResumeData } from '@/types/resume';
import { FileJson, FileDown, FileText } from 'lucide-react';
import { exportToPDF, exportToHTML } from '@/lib/export-utils';

interface ExportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resumeData: ResumeData;
}

export function ExportDialog({ open, onOpenChange, resumeData }: ExportDialogProps) {
  const [fileName, setFileName] = useState(resumeData.name.toLowerCase().replace(/\s+/g, '-'));

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(resumeData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExportPDF = () => {
    exportToPDF(resumeData, fileName);
  };

  const handleExportHTML = () => {
    exportToHTML(resumeData, fileName);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Export Resume</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="fileName">File Name</Label>
            <Input
              id="fileName"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Enter file name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Button onClick={handleExportJSON} variant="outline">
              <FileJson className="mr-2 h-4 w-4" />
              Export as JSON
            </Button>
            
            <Button onClick={handleExportPDF} variant="outline">
              <FileDown className="mr-2 h-4 w-4" />
              Export as PDF
            </Button>
            
            <Button onClick={handleExportHTML} variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Export as HTML
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}