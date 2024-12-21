export type ExportFormat = 'pdf' | 'html' | 'json';

export interface PdfConfig {
  pageSize: 'a4' | 'letter';
  orientation: 'portrait' | 'landscape';
  imageQuality: number;
  scale: number;
}

export interface HtmlConfig {
  includeStyles: boolean;
  minified: boolean;
}

export interface JsonConfig {
  pretty: boolean;
}

export interface ExportConfig {
  format: ExportFormat;
  fileName: string;
  pdf?: PdfConfig;
  html?: HtmlConfig;
  json?: JsonConfig;
} 