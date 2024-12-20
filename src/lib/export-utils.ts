import { ResumeData } from '@/types/resume';
import html2pdf from 'html2pdf.js';

export function exportToPDF(data: ResumeData, fileName: string) {
  const element = document.querySelector('.resume-preview');
  if (!element) return;

  const opt = {
    margin: 10,
    filename: `${fileName}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
}

export function exportToHTML(data: ResumeData, fileName: string) {
  const element = document.querySelector('.resume-preview');
  if (!element) return;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${data.name} - Resume</title>
      <style>
        /* Add your CSS styles here */
      </style>
    </head>
    <body>
      ${element.innerHTML}
    </body>
    </html>
  `;

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