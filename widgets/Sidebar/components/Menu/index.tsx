'use client'

import React from 'react'

import styles from './styles.module.css'
import { useMenu } from '@/widgets/Sidebar/components/Menu/lib/state'
import { classNames } from '@/lib/utils/classNames'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'

interface Props {}

export const Menu = ({}: Props) => {
    const isOpen = useMenu((state) => state.isOpen)
    const toggleOpen = useMenu((state) => state.toggleOpen)

    return (
        <AnimationSection right>
            <div className={styles.content} onClick={() => toggleOpen(!isOpen)}>
                <span
                    className={classNames(styles.menuBurger, {
                        [styles.active]: true,
                    })}
                    data-active={isOpen}
                />
            </div>
        </AnimationSection>
    )
}
