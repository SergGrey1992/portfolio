'use client'

import { useEffect } from 'react'
import type { PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import { useMenu } from '@/widgets/Sidebar/components/Menu/lib/state'

interface IndexPropsType {}

export const ClosedMenu = ({}: PropsWithChildren<IndexPropsType>) => {
    const pathname = usePathname()
    const setActiveIndex = useMenu((state) => state.setActiveIndex)
    useEffect(() => {
        setActiveIndex(-1)
    }, [pathname])
    return null
}
