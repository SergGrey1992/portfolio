import React from 'react'
import { Feature } from '@/shared/config/structures/projects'

import styles from './styles.module.css'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'
import { classNames } from '@/lib/utils/classNames'

interface Props {
    features: Feature[]
    activeIndex: number
    changeActiveSection: (index: number) => void
}

export const AnimationFeaturesList = ({
    features,
    activeIndex,
    changeActiveSection,
}: Props) => {
    return (
        <div className={styles.container}>
            {features.map((feature, index) => {
                return (
                    <AnimationSection
                        key={`Feature.${index}`}
                        className={classNames(styles.item, {
                            [styles.active]: activeIndex === index,
                        })}
                        onClick={() => {
                            if (feature.title === '') {
                                return
                            }
                            changeActiveSection(index)
                        }}
                    >
                        {feature.title}
                    </AnimationSection>
                )
            })}
        </div>
    )
}
