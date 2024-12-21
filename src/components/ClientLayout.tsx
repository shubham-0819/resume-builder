'use client'

import { inter } from '@/config/fonts'
import '@/styles/globals.css'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full overflow-hidden`}>
        {children}
      </body>
    </html>
  )
} 