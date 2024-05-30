import React from 'react'
import type { PropsWithChildren } from 'react'
import { MainTitle } from '@/shared/ui/MainTitle/index'

import styles from './styles.module.css'
import { Spacing } from '@/shared/ui/Spacing/index'
import { classNames } from '@/lib/utils/classNames'

interface IndexPropsType {
    sectionName: string
    isPrivate?: boolean
    site?: string
    withSpacing?: boolean
    full?: boolean
}

export const StickySection = ({
    sectionName,
    isPrivate,
    site = '',
    withSpacing = false,
    full = true,
    children,
}: PropsWithChildren<IndexPropsType>) => {
    return (
        <section
            className={classNames(styles.container, {
                [styles.fit]: !full,
            })}
        >
            <div className={styles.titleBlock}>
                <MainTitle
                    title={sectionName}
                    isPrivate={isPrivate}
                    site={site}
                />
            </div>
            {withSpacing && <Spacing height={75} />}
            <>{children}</>
        </section>
    )
}
