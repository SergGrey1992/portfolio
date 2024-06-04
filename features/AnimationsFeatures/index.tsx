'use client'

import React, { useRef, useState } from 'react'
import type { PropsWithChildren } from 'react'

import gsap from 'gsap'

import { Feature } from '@/shared/config/structures/projects'
import { Tag } from '@/shared/ui/Tag'

import styles from './styles.module.css'
import Marquee from 'react-fast-marquee'
import { Icon } from '@/shared/ui/Icons/index'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'
import { AnimationFeaturesList } from '@/features/AnimationsFeatures/ui/AnimationFeaturesList/index'

interface IndexPropsType {
    features: Feature[]
}

export const AnimationsFeatures = ({
    features,
}: PropsWithChildren<IndexPropsType>) => {
    const [active, setActive] = useState(0)

    const ref = useRef<HTMLDivElement>(null)

    const changeActiveSection = (index: number) => {
        if (index === active) {
            return
        }
        const tl = gsap.timeline()

        tl.set(ref.current, {
            opacity: 0,
        })

        setActive(index)

        tl.to(ref.current, {
            onComplete: () => {
                gsap.set(ref.current, {
                    opacity: 0,
                })
                gsap.to(ref.current, {
                    opacity: 1,
                })
            },
        })
    }

    return (
        <>
            <div className={styles.container}>
                <AnimationFeaturesList
                    features={features}
                    activeIndex={active}
                    changeActiveSection={changeActiveSection}
                />
                <AnimationSection className={styles.content}>
                    <div className={styles.wrapper}>
                        <p className={styles.text} ref={ref}>
                            {features[active]?.description}
                        </p>
                    </div>
                </AnimationSection>
            </div>
            <AnimationSection className={styles.empty} />
        </>
    )
}
