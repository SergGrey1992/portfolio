'use client'

import React, { useEffect, useRef } from 'react'
import type { PropsWithChildren } from 'react'
import styles from './styles.module.css'
import { TransitionLink } from '@/shared/ui/TransitionLink/index'
import { classNames } from '@/lib/utils/classNames'
import gsap from 'gsap'
import { useMenu } from '@/widgets/Sidebar/components/Menu/lib/state'
import { IconName } from '@/shared/config/assets/icons/list'
import { Icon } from '@/shared/ui/Icons/index'
import { usePathname } from 'next/navigation'

interface IndexPropsType {}

type MenuItem = {
    title: string
    href: string
    icon?: IconName
}

const items: MenuItem[] = [
    { title: '', href: '/', icon: 'home' },
    { title: 'contact', href: '/contact' },
    { title: 'education', href: '/education' },
    { title: 'resume', href: '/resume' },
]

export const MenuList = ({}: PropsWithChildren<IndexPropsType>) => {
    const isOpen = useMenu((state) => state.isOpen)
    const toggleOpen = useMenu((state) => state.toggleOpen)
    const activeIndex = useMenu((state) => state.activeIndex)
    const setActiveIndex = useMenu((state) => state.setActiveIndex)

    const menuRef = useRef<HTMLDivElement>(null)

    const pathname = usePathname()

    useEffect(() => {
        let ctx = gsap.context(() => {
            const body = document.getElementById('page')
            if (isOpen === undefined) {
                gsap.set(menuRef.current, { height: 0 })
                return
            }
            if (body) {
                const tl = gsap.timeline().progress(1)
                tl.set(body, {
                    //scaleX: !isOpen ? 0.9 : 1,
                    opacity: !isOpen ? 0.4 : 1,
                    y: !isOpen ? 51 : 0,
                })
                tl.set(menuRef.current, { height: !isOpen ? 'auto' : 0 })

                tl.to(
                    body,
                    {
                        //scaleX: isOpen ? 0.9 : 1,
                        opacity: isOpen ? 0.4 : 1,
                        y: isOpen ? 51 : 0,
                        duration: 0.6,
                        ease: 'power4.out',
                    },
                    0
                ).to(
                    menuRef.current,
                    {
                        height: isOpen ? 'auto' : 0,
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
        <>
            <menu className={styles.menuContent} ref={menuRef}>
                <ul className={styles.list}>
                    {items.map((item, i) => {
                        return (
                            <TransitionLink
                                key={`Link.${i}`}
                                href={item.href}
                                className={classNames(styles.item, {
                                    [styles.active]: activeIndex === i,
                                    [styles.itemIcon]: !(
                                        item.icon === undefined
                                    ),
                                    [styles.hidden]:
                                        pathname === '/' && i === 0,
                                    [styles.first]: pathname !== '/' && i === 0,
                                })}
                                delay={500}
                                onClick={() => setActiveIndex(i)}
                            >
                                {item.icon ? (
                                    <Icon
                                        as={item.icon}
                                        height={25}
                                        width={25}
                                    />
                                ) : (
                                    <span>{item.title}</span>
                                )}
                            </TransitionLink>
                        )
                    })}
                </ul>
            </menu>
            <div
                className={classNames(styles.overlay, {
                    [styles.activeOverlay]: !!isOpen,
                })}
                onClick={() => toggleOpen(false)}
            />
        </>
    )
}
