'use client'

import React, { useEffect } from 'react'
import type { PropsWithChildren } from 'react'

import styles from './styles.module.css'
import gsap from 'gsap'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'

interface IndexPropsType {}

export const MyName = ({}: PropsWithChildren<IndexPropsType>) => {
    useEffect(() => {
        let ctx = gsap.context(() => {
            let isScrollingDown = true
            let tween = gsap
                .to('.marquee-part', {
                    xPercent: -100,
                    repeat: -1,
                    duration: 7,
                    ease: 'linear',
                })
                .totalProgress(0.5)
            // const marque = document.getElementById('marque-names')
            // gsap.set(marque, { xPercent: -50 })
            gsap.to(tween, {
                timeScale: isScrollingDown ? 1 : -1,
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <AnimationSection className={styles.inner}>
            {[...Array(15)].map((_, i) => (
                <div
                    className={`${styles.content} marquee-part`}
                    key={`Part.${i}`}
                >
                    <h1 className={styles.name}>sergey tsviatkou</h1>
                </div>
            ))}
        </AnimationSection>
    )
}
