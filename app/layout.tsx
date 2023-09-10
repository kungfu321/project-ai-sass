import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";

import './globals.css';
import CrispChat from '@/components/crisp-chat';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brainfast',
  description: 'Unlock the power of AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <CrispChat />
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
