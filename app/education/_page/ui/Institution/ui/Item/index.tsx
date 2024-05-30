'use client'

import React, { Fragment, useEffect, useRef } from 'react'
import { EducationType } from '@/shared/config/structures/educations'

import { AnimationSection } from '@/shared/ui/AnimationSection/index'
import { classNames } from '@/lib/utils/classNames'
import gsap from 'gsap'

import styles from './styles.module.css'

interface Props extends EducationType {}

export const Item = ({ date, title, studied, description }: Props) => {
    const refList = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen((prev) => !prev)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(refList.current, { height: isOpen ? 0 : 'auto' })

            gsap.to(refList.current, { height: !isOpen ? 0 : 'auto' })
        })
        return () => ctx.revert()
    }, [isOpen])

    return (
        <>
            <div className={styles.mainContent} onClick={toggle}>
                <div
                    className={classNames(styles.overlay, {
                        [styles.active]: isOpen,
                    })}
                />
                <AnimationSection className={styles.name}>
                    <span>{title}</span>
                </AnimationSection>
                <AnimationSection className={styles.date}>
                    <span>{date}</span>
                </AnimationSection>
            </div>
            <AnimationSection>
                <div ref={refList}>
                    <ul className={styles.list}>
                        {studied.map((st, index, array) => {
                            const last = array.at(-1)
                            return (
                                <Fragment key={`${title}.${st}.${index}`}>
                                    <li className={styles.item}>{st}</li>
                                    {st === last && (
                                        <li
                                            className={classNames(
                                                styles.item,
                                                {},
                                                [styles.last]
                                            )}
                                        />
                                    )}
                                </Fragment>
                            )
                        })}
                    </ul>
                    <p className={styles.description}>{description}</p>
                </div>
            </AnimationSection>
        </>
    )
}
