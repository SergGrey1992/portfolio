'use client'

import React, { useRef, useState } from 'react'
import type { PropsWithChildren } from 'react'

import gsap from 'gsap'

import { Feature } from '@/shared/config/structures/common'
import { Tag } from '@/shared/ui/Tag'

import styles from './styles.module.css'

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
        const direction = active < index

        tl.set(ref.current, {
            transformOrigin: direction ? 'right center' : 'left center',
        })

        tl.to(ref.current, {
            rotateY: direction ? -50 : 50,
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                gsap.set(ref.current, {
                    opacity: 0,
                    transformOrigin: direction ? 'right center' : 'left center',
                })
                gsap.to(ref.current, {
                    //xPercent: 0,
                    rotateY: 0,
                    opacity: 1,
                })
                setActive(index)
            },
        })
    }

    return (
        <div>
            <h3 className={'text-xl'}>features:</h3>
            <div className={'flex flex-col gap-5'}>
                <ul className={'flex flex-wrap gap-5'}>
                    {features.map((f, index) => {
                        return (
                            <Tag
                                key={`Feature.${index}`}
                                as={'li'}
                                hover
                                active={active === index}
                                onClick={() => {
                                    changeActiveSection(index)
                                }}
                            >
                                {f.title}
                            </Tag>
                        )
                    })}
                </ul>
                <div className={styles.content}>
                    <div className={styles.wrapper}>
                        <p className={styles.text} ref={ref}>
                            {features[active]?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
