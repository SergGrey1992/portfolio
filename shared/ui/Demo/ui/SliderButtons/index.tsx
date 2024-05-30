'use client'

import React, { useCallback, useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react'

import styles from './styles.module.css'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'
import { Icon } from '@/shared/ui/Icons/index'
import { classNames } from '@/lib/utils/classNames'
import { EmblaCarouselType } from 'embla-carousel'

interface IndexPropsType {
    emblaApi: EmblaCarouselType | undefined
}

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    }
}

export const SliderButtons = ({
    children,
    emblaApi,
}: PropsWithChildren<IndexPropsType>) => {
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi)

    return (
        <section className={styles.content}>
            <AnimationSection
                className={classNames(styles.action, {}, [styles.actionL])}
            >
                <button disabled={prevBtnDisabled} onClick={onPrevButtonClick}>
                    <Icon as={'arrowleft'} />
                </button>
            </AnimationSection>
            {children}
            <AnimationSection
                className={classNames(styles.action, {}, [styles.actionR])}
            >
                <button disabled={nextBtnDisabled} onClick={onNextButtonClick}>
                    <Icon as={'arrowright'} />
                </button>
            </AnimationSection>
        </section>
    )
}
