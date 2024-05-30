'use client'

import React, { PropsWithChildren } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { animatePageOut } from '@/widgets/PageTransitionEffect/lib/animations'
import { wait } from '@/shared/lib/wait'
import { useMenu } from '@/widgets/Sidebar/components/Menu/lib/state'
import { useAnimSectionTransition } from '@/widgets/PageTransitionEffect/lib/state'

type Default = React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>

interface Props extends Default {
    href: string
    delay?: number
}

export const TransitionLink = ({
    href,
    children,
    delay,
    onClick,
    ...rest
}: PropsWithChildren<Props>) => {
    const router = useRouter()
    const pathname = usePathname()
    const isOpen = useMenu((state) => state.isOpen)
    const toggleOpen = useMenu((state) => state.toggleOpen)
    const setActiveIndex = useMenu((state) => state.setActiveIndex)
    const toggleAnimSectionOpen = useAnimSectionTransition(
        (state) => state.toggleAnimSectionOpen
    )

    const handleClick = async (e: any) => {
        e.preventDefault()
        if (href === pathname) {
            return
        }
        onClick?.(e)
        if (delay) {
            await wait(delay)
        }
        if (isOpen) {
            toggleOpen(false)
            await wait(650)
        }
        setActiveIndex(-1)
        toggleAnimSectionOpen(false)
        await wait(1000)
        router.push(href)
        //animatePageOut(href, router)
    }
    return (
        <a {...rest} href={href} onClick={handleClick}>
            {children}
        </a>
    )
}
