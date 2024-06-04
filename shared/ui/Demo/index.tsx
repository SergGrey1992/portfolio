'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { SliderButtons } from './ui/SliderButtons'

import styles from './styles.module.css'
import Marquee from 'react-fast-marquee'
import { Icon } from '@/shared/ui/Icons/index'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'
import { PreviewType } from '@/shared/config/structures/projects'
import Image from 'next/image'
import { PreviewProject } from '@/shared/ui/PreviewProject/index'
import { EmblaCarouselType } from 'embla-carousel'

interface Props {
    data: PreviewType[]
}

export const Demo = ({ data }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({})
    return (
        <SliderButtons emblaApi={emblaApi}>
            <AnimationSection className={styles.embla}>
                <div className={styles.viewport} ref={emblaRef}>
                    <div className={styles.container}>
                        {data.map((pr, i) => (
                            <div key={`Slide.${i}`} className={styles.slide}>
                                <PreviewProject preview={pr} />
                            </div>
                        ))}
                    </div>
                </div>
            </AnimationSection>
        </SliderButtons>
    )
}
