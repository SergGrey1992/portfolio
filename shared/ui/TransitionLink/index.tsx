'use client'

import React, { PropsWithChildren } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { animatePageOut } from '@/widgets/PageTransitionEffect/lib/animations'

type Default = React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>

interface Props extends Default {
    href: string
}

export const TransitionLink = ({
    href,
    children,
    ...rest
}: PropsWithChildren<Props>) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = async (e: any) => {
        e.preventDefault()
        // if (href === undefined) {
        //     return
        // }
        //if (withBurger) {
        // router.push(href)
        // return
        //}
        animatePageOut(href, router)
    }
    return (
        <a {...rest} href={href} onClick={handleClick}>
            {children}
        </a>
    )
}
