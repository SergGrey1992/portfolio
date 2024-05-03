'use client'

import React from 'react'
import Link from 'next/link'

import cls from './styles.module.css'
import { usePathname } from 'next/navigation'
import { classNames } from '@/lib/utils/classNames'
import { TransitionLink } from '@/shared/ui/TransitionLink'

interface Props {
    myName: string
}

export const Logo = ({ myName }: Props) => {
    const pathname = usePathname()
    return (
        <TransitionLink
            href={'/'}
            className={classNames(cls.logo, {
                [cls.topMode]: !(pathname === '/'),
            })}
        >
            {myName.split(' ').map((char, index) => {
                return <span key={`chat.${char}.${index}`}>{char}</span>
            })}
        </TransitionLink>
    )
}
