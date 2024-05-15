'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import styles from './styles.module.css'
import { useMenu } from '@/widgets/Sidebar/components/Menu/lib/state'
import { TransitionLink } from '@/shared/ui/TransitionLink/index'
import { classNames } from '@/lib/utils/classNames'

interface Props {}

const items = ['about', 'contact', 'education']

export const Menu = ({}: Props) => {
    const isOpen = useMenu((state) => state.isOpen)
    const toggleOpen = useMenu((state) => state.toggleOpen)
    const activeIndex = useMenu((state) => state.activeIndex)
    const setActiveIndex = useMenu((state) => state.setActiveIndex)

    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            const body = document.getElementById('page')
            if (isOpen === undefined) {
                gsap.set(menuRef.current, { xPercent: -100 })
                return
            }
            if (body) {
                const tl = gsap.timeline().progress(1)
                tl.set(body, {
                    scaleY: !isOpen ? 0.95 : 1,
                    opacity: !isOpen ? 0.4 : 1,
                    xPercent: !isOpen ? 10 : 0,
                })
                tl.set(menuRef.current, { xPercent: isOpen ? -100 : 0 })

                tl.to(
                    body,
                    {
                        scaleY: isOpen ? 0.95 : 1,
                        opacity: isOpen ? 0.4 : 1,
                        xPercent: isOpen ? 10 : 0,
                        duration: 0.6,
                        ease: 'power4.out',
                    },
                    0
                ).to(
                    menuRef.current,
                    {
                        xPercent: !isOpen ? -100 : 0,
                        duration: 0.6,
                        ease: 'power4.out',
                    },
                    0
                )
            }
        })
        return () => ctx.revert()
    }, [isOpen])

    return (
        <div
            style={{
                position: 'relative',
            }}
        >
            <div className={styles.content} onClick={() => toggleOpen(!isOpen)}>
                <span
                    className={classNames(styles.menuBurger, {
                        [styles.active]: true,
                    })}
                    data-active={isOpen}
                />
            </div>
            <menu className={styles.menuContent} ref={menuRef}>
                <ul className={styles.list}>
                    {items.map((item, i) => {
                        return (
                            <TransitionLink
                                key={`Link.${i}`}
                                href={`/${item}`}
                                className={classNames(styles.item, {
                                    [styles.active]: activeIndex === i,
                                })}
                                delay={500}
                                onClick={() => setActiveIndex(i)}
                            >
                                <span>{item}</span>
                            </TransitionLink>
                        )
                    })}
                </ul>
            </menu>
        </div>
    )
}
