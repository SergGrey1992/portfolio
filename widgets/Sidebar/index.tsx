'use client'

import type { PropsWithChildren } from 'react'
import React from 'react'
import styles from './styles.module.css'
import { ThemeSwitcher } from '@/widgets/Sidebar/components/ThemeSwitcher'
import { Menu } from '@/widgets/Sidebar/components/Menu'
import { Empty } from '@/widgets/Sidebar/components/Empty/index'

interface IndexPropsType {}

export const Sidebar = ({}: PropsWithChildren<IndexPropsType>) => {
    return (
        <aside className={styles.container}>
            <div className={styles.sidebar}>
                <Menu />
                <Empty />
                <ThemeSwitcher />
            </div>
        </aside>
    )
}
