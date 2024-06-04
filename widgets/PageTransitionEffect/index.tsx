import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { animatePageIn } from './lib/animations'
import { useMenu } from '@/widgets/Sidebar/components/Menu/lib/state'
import { wait } from '@/shared/lib/wait'
import { useAnimSectionTransition } from '@/widgets/PageTransitionEffect/lib/state'

export const PageTransitionEffect = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const pathname = usePathname()
    const isOpen = useMenu((state) => state.isOpen)
    const toggleOpen = useMenu((state) => state.toggleOpen)
    const toggleAnimSectionOpen = useAnimSectionTransition(
        (state) => state.toggleAnimSectionOpen
    )
    const start = async () => {
        if (isOpen) {
            toggleOpen(false)
            await wait(1400)
        }
        await wait(400)
        toggleAnimSectionOpen(true)
    }

    useEffect(() => {
        start()
    }, [pathname])
    return (
        <>
            <div id={'page'} className={'page'}>
                {children}
            </div>
        </>
    )
}
