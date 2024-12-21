import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import html2pdf from 'html2pdf.js';
import { PdfConfig } from "@/types/export";

interface PreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pdfConfig: PdfConfig;
}

export function PreviewModal({ open, onOpenChange, pdfConfig }: PreviewModalProps) {
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const generatePreview = async () => {
    const element = document.querySelector('.resume-preview');
    if (!element) return;

    const clonedElement = element.cloneNode(true) as HTMLElement;
    
    // Fix contact icon alignment
    const contactItems = clonedElement.querySelectorAll('.flex.items-center.gap-2');
    contactItems.forEach(item => {
      (item as HTMLElement).style.display = 'flex';
      (item as HTMLElement).style.alignItems = 'center';
      (item as HTMLElement).style.gap = '8px';
    });
    
    try {
      const pdf = await html2pdf().set({
        ...pdfConfig,
        jsPDF: {
          unit: 'mm',
          format: pdfConfig.pageSize,
          orientation: pdfConfig.orientation
        }
      }).from(clonedElement).output('datauristring');

      setPreviewUrl(pdf);
    } catch (error) {
      console.error('Preview generation failed:', error);
    }
  };

  useEffect(() => {
    if (open) {
      generatePreview();
    }
  }, [open, pdfConfig]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl h-[80vh]">
        {previewUrl ? (
          <iframe
            src={previewUrl}
            className="w-full h-full border rounded-lg"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            Generating preview...
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 