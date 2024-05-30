import React from 'react'
import type { PropsWithChildren } from 'react'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'

import styles from './styles.module.css'

interface IndexPropsType {
    year: [string, string]
}

const data = ['start', 'end'] as const

export const WorkTime = ({ year }: PropsWithChildren<IndexPropsType>) => {
    return (
        <div className={styles.container}>
            {data.map((y, index) => {
                return (
                    <React.Fragment key={`y.${index}`}>
                        <AnimationSection className={styles.item}>
                            <span className={styles.text}>{y} work</span>
                        </AnimationSection>
                        <AnimationSection className={styles.item}>
                            <span className={styles.text}>{year[index]}</span>
                        </AnimationSection>
                    </React.Fragment>
                )
            })}
        </div>
    )
}
