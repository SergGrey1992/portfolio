import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { animatePageIn } from './lib/animations'
import { useMenu } from '@/widgets/Sidebar/components/Menu/lib/state'
import { wait } from '@/shared/lib/wait'

export const PageTransitionEffect = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const pathname = usePathname()
    const isOpen = useMenu((state) => state.isOpen)
    const toggleOpen = useMenu((state) => state.toggleOpen)
    const start = async () => {
        if (isOpen) {
            toggleOpen(false)
            await wait(1400)
        }
        animatePageIn()
    }

    useEffect(() => {
        start()
    }, [pathname])
    return (
        <>
            <div id={'element'} className={'transition-element'} />
            <div id={'page'} className={'page'}>
                {children}
            </div>
        </>
    )
}
