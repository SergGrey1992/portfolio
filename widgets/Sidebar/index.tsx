'use client'

import React from 'react'
import type { PropsWithChildren } from 'react'
import styles from './styles.module.css'
import { GoBack } from '@/widgets/Sidebar/components/GoBack'
import { ThemeSwitcher } from '@/widgets/Sidebar/components/ThemeSwitcher'
import { Menu } from '@/widgets/Sidebar/components/Menu'
import { classNames } from '@/lib/utils/classNames'
import { usePathname } from 'next/navigation'

interface IndexPropsType {}

export const Sidebar = ({}: PropsWithChildren<IndexPropsType>) => {
    const pathname = usePathname()
    return (
        <aside
            className={classNames(styles.sidebar, {
                [styles.modeGoBack]: !(pathname === '/'),
            })}
        >
            <GoBack />
            <Menu />
            <ThemeSwitcher />
        </aside>
    )
}
