import React from 'react'
import type { PropsWithChildren } from 'react'

import styles from './styles.module.css'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'

interface IndexPropsType {}

export const Empty = ({}: PropsWithChildren<IndexPropsType>) => {
    return (
        <AnimationSection className={styles.emptyBox}>
            <div className={styles.empty} />
        </AnimationSection>
    )
}
