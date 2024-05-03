import { HomePage } from '@/app/_page/HomePage/HomePage'

type Props = {
    children: React.ReactNode
}

export default async function Page({}: Readonly<Props>) {
    return (
        <main>
            <HomePage />
        </main>
    )
}
