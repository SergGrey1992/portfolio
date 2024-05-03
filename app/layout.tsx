import type { Metadata } from 'next'
import localFont from 'next/font/local'
import {
    Space_Grotesk,
    Bebas_Neue,
    Prompt,
    Geologica,
    Mitr,
} from 'next/font/google'
import { Header } from '@/widgets/Header/Header'

import './index.css'

// const myFont = localFont({
//     src: '../shared/config/fonts/DrukWideBold.ttf',
//     variable: '--font-druk',
// })

const myFont = Prompt({
    weight: ['400', '500', '600', '700', '900'],
    preload: true,
    variable: '--font-druk',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Portfolio Sergey Tsviatkou',
}

type Props = {
    children: React.ReactNode
}
//https://www.awwwards.com/directory/freelance/
//https://vanholtz.co/
export default async function RootLayout({ children }: Readonly<Props>) {
    return (
        <html lang={'en'} data-theme={'ultra'}>
            <body
                className={`${myFont.className} body h-screen flex flex-col bg-accent`}
            >
                <Header myName={'Sergey Tsviatkou'} />
                {children}
            </body>
        </html>
    )
}
