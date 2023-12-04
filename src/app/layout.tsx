import {ReactNode} from "react";
import {ClerkProvider} from '@clerk/nextjs'
import type {Metadata} from 'next'
import {Inter, Space_Grotesk} from 'next/font/google'
import './globals.css'

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


export default function RootLayout({children}: {
    children: ReactNode
}) {
    return (
        <ClerkProvider
            appearance={{
                elements: {
                    formButtonPrimary: 'primary-gradient',
                    footerActionLink: 'primary-text-gradient hoover:text-primary-500',

                }
            }}
        >
            < html lang="en">
            <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <h1 className="h1-bold">This is a piece of text</h1>
            {children}
            </body>

            </html>
        </ClerkProvider>
    )
}