import {ReactNode} from "react";
import {ClerkProvider} from '@clerk/nextjs'
import type {Metadata} from 'next'
import {Inter, Space_Grotesk} from 'next/font/google'

import './globals.css'
import {ThemeProvider} from "@/src/context/ThemeProvider";

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--fontInter',
})

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-spaceGrotesk',
})

export const metadata: Metadata = {
    title: 'DevOverflow',
    description: 'DevOverflow is a Q&A platform for developers.',
    icons: {
        icon: '/assets/images/site-logo.svg',
    },
}

const clerkAppearance = {
    elements: {
        formButtonPrimary: 'primary-gradient',
        footerActionLink: 'primary-text-gradient hoover:text-primary-500',
    }
}

export default function RootLayout({children}: {
    children: ReactNode
}) {
    return (
        < html lang="en">

        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>

        <ClerkProvider appearance={clerkAppearance}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </ClerkProvider>

        </body>
        </html>
    )
}