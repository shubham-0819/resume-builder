import { ResumeData } from '@/types/resume';
import html2pdf from 'html2pdf.js';
import { PdfConfig, HtmlConfig, JsonConfig } from '@/types/export';

export function exportToPDF(fileName: string, config?: PdfConfig) {
  const element = document.querySelector('.resume-preview');
  if (!element) return;

  const opt = {
    margin: Object.values( { top: 10, right: 10, bottom: 10, left: 10 }),
    filename: `${fileName}.pdf`,
    image: { type: 'jpeg', quality: (config?.imageQuality || 98) / 100 },
    html2canvas: { 
      scale: config?.scale || 2,
      useCORS: true,
      logging: true,
      letterRendering: true,
      allowTaint: true
    },
    jsPDF: { 
      unit: 'mm', 
      format: config?.pageSize || 'a4', 
      orientation: config?.orientation || 'portrait',
      compress: true
    },
    pagebreak: { mode: 'avoid-all' }
  };

  // Create a clone of the element to avoid modifying the original
  const clonedElement = element.cloneNode(true) as HTMLElement;
  
  // Fix contact icon alignment
  const contactItems = clonedElement.querySelectorAll('.flex.items-center.gap-2');
  contactItems.forEach(item => {
    (item as HTMLElement).style.display = 'flex';
    (item as HTMLElement).style.alignItems = 'center';
    (item as HTMLElement).style.gap = '8px';
  });

  // Ensure all styles are computed and applied
  const styles = document.getElementsByTagName('style');
  let allStyles = '';
  for (let i = 0; i < styles.length; i++) {
    allStyles += styles[i].innerHTML;
  }

  // Create a temporary container
  const container = document.createElement('div');
  container.appendChild(clonedElement);
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.style.top = '-9999px';
  
  // Add styles to the container
  const styleElement = document.createElement('style');
  styleElement.innerHTML = allStyles;
  container.appendChild(styleElement);
  
  // Add to document, generate PDF, then remove
  document.body.appendChild(container);
  
  html2pdf()
    .set(opt)
    .from(clonedElement)
    .save()
    .then(() => {
      document.body.removeChild(container);
    })
    .catch((error) => {
      console.error('PDF generation failed:', error);
      document.body.removeChild(container);
    });
}

export function exportToHTML(data: ResumeData, fileName: string, config?: HtmlConfig) {
  const element = document.querySelector('.resume-preview');
  if (!element) return;

  let htmlContent = `<!DOCTYPE html><html><head>`;
  
  if (config?.includeStyles) {
    const styles = document.getElementsByTagName('style');
    for (let i = 0; i < styles.length; i++) {
      htmlContent += styles[i].outerHTML;
    }
  }
  
  htmlContent += `<title>${data.name} - Resume</title></head><body>${element.innerHTML}</body></html>`;

  if (config?.minified) {
    htmlContent = htmlContent.replace(/\s+/g, ' ').trim();
  }

  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportToJSON(data: ResumeData, fileName: string, config?: JsonConfig) {
  const jsonContent = config?.pretty 
    ? JSON.stringify(data, null, 2)
    : JSON.stringify(data);

  const blob = new Blob([jsonContent], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}