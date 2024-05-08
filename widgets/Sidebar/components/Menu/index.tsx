'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import styles from './styles.module.css'
import { useMenu } from '@/widgets/Sidebar/components/Menu/lib/state'

interface Props {}

export const Menu = ({}: Props) => {
    const isOpen = useMenu((state) => state.isOpen)
    const toggleOpen = useMenu((state) => state.toggleOpen)

    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            const body = document.getElementById('page')
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
                <span className={styles.menuBurger} />
            </div>
            <menu className={styles.menuContent} ref={menuRef}>
                <ul className={styles.list}>
                    <li className={styles.item}>about</li>
                    <li className={styles.item}>contact</li>
                    <li className={styles.item}>education</li>
                </ul>
            </menu>
        </div>
    )
}
