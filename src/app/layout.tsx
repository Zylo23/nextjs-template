import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from '@/utils/cn'
import { ThemeProvider } from '@/components/theme-provider'
import { BackgroundBeams } from '@/components/ui/background-beams'

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    {children}
                    <BackgroundBeams />
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
