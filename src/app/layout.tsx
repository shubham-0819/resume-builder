import { ClientLayout } from '@/components/ClientLayout'
import { ClientProvider } from '@/components/ClientProvider'
import '@/styles/globals.css'

// export const metadata = {
//   title: 'Resume Builder',
//   description: 'Create professional resumes with multiple templates',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientLayout>
      <ClientProvider>
        {children}
      </ClientProvider>
    </ClientLayout>
  )
} 