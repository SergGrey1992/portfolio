import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { animatePageIn } from './lib/animations'

export const PageTransitionEffect = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const pathname = usePathname()

    useEffect(() => {
        animatePageIn()
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
