import {ClerkProvider} from '@clerk/nextjs'
import React from "react";
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'DevOverflow',
    description: 'DevOverflow is a Q&A platform for developers.',
}


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body>{children}
            </body>

            </html>
        </ClerkProvider>
    )
}