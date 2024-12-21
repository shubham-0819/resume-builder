import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ResumeData } from "@/types/resume";
import { ExportFormat, ExportConfig } from "@/types/export";
import { exportToPDF, exportToHTML, exportToJSON } from "@/lib/export-utils";
import { FileDown, Eye } from "lucide-react";
import { PreviewModal } from "./PreviewModal";

interface ExportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resumeData: ResumeData;
}

export function ExportDialog({ open, onOpenChange, resumeData }: ExportDialogProps) {
  const [config, setConfig] = useState<ExportConfig>({
    format: 'pdf',
    fileName: 'resume',
    pdf: {
      pageSize: 'a4',
      orientation: 'portrait',
      imageQuality: 98,
      scale: 2
    },
    html: {
      includeStyles: true,
      minified: false
    },
    json: {
      pretty: true
    }
  });

  const [previewOpen, setPreviewOpen] = useState(false);

  const handleExport = () => {
    switch (config.format) {
      case 'pdf':
        exportToPDF(config.fileName, config.pdf);
        break;
      case 'html':
        exportToHTML(resumeData, config.fileName, config.html);
        break;
      case 'json':
        exportToJSON(resumeData, config.fileName, config.json);
        break;
    }
    onOpenChange(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Export Resume</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Export Format</Label>
              <Select
                value={config.format}
                onValueChange={(value: ExportFormat) => 
                  setConfig({ ...config, format: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF Document</SelectItem>
                  <SelectItem value="html">HTML File</SelectItem>
                  <SelectItem value="json">JSON Data</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label>File Name</Label>
              <Input
                value={config.fileName}
                onChange={(e) => setConfig({ ...config, fileName: e.target.value })}
                placeholder="Enter file name"
              />
            </div>

            {config.format === 'pdf' && (
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Page Size</Label>
                    <Select
                      value={config.pdf?.pageSize}
                      onValueChange={(value) => 
                        setConfig({
                          ...config,
                          pdf: { ...config.pdf!, pageSize: value as 'a4' | 'letter' }
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a4">A4</SelectItem>
                        <SelectItem value="letter">Letter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Orientation</Label>
                    <Select
                      value={config.pdf?.orientation}
                      onValueChange={(value) => 
                        setConfig({
                          ...config,
                          pdf: { ...config.pdf!, orientation: value as 'portrait' | 'landscape' }
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="portrait">Portrait</SelectItem>
                        <SelectItem value="landscape">Landscape</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {config.format === 'html' && (
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <Label>Include Styles</Label>
                  <Switch
                    checked={config.html?.includeStyles}
                    onCheckedChange={(checked) =>
                      setConfig({
                        ...config,
                        html: { ...config.html!, includeStyles: checked }
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Minify Output</Label>
                  <Switch
                    checked={config.html?.minified}
                    onCheckedChange={(checked) =>
                      setConfig({
                        ...config,
                        html: { ...config.html!, minified: checked }
                      })
                    }
                  />
                </div>
              </div>
            )}

            {config.format === 'json' && (
              <div className="flex items-center justify-between">
                <Label>Pretty Print</Label>
                <Switch
                  checked={config.json?.pretty}
                  onCheckedChange={(checked) =>
                    setConfig({
                      ...config,
                      json: { ...config.json!, pretty: checked }
                    })
                  }
                />
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2">
            {config.format === 'pdf' && (
              <Button variant="outline" onClick={() => setPreviewOpen(true)}>
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
            )}
            <Button onClick={handleExport}>
              <FileDown className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {config.format === 'pdf' && (
        <PreviewModal
          open={previewOpen}
          onOpenChange={setPreviewOpen}
          pdfConfig={config.pdf!}
        />
      )}
    </>
  );
}