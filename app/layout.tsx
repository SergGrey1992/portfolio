import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'

import './index.css'
import { Sidebar } from '@/widgets/Sidebar/index'
import { MenuList } from '@/widgets/Sidebar/components/MenuList/index'
import { MarqueName } from '@/shared/ui/MarqueName/index'

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
//support projects
export default async function RootLayout({ children }: Readonly<Props>) {
    return (
        <html lang={'en'} data-theme={'dark'}>
            <body className={`${myFont.className} body flex flex-col`}>
                <MarqueName />
                <Sidebar />
                <MenuList />
                {children}
            </body>
        </html>
    )
}
