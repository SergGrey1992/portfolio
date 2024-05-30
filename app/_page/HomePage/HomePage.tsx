'use client'

import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'

import cls from './styles.module.css'
import { PROJECTS } from '@/shared/config/structures/projects'
import { TransitionLink } from '@/shared/ui/TransitionLink'
import { classNames } from '@/lib/utils/classNames'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'

interface HomePagePropsType {}

export const HomePage = ({}: PropsWithChildren<HomePagePropsType>) => {
    const [active, setActive] = useState(-1)
    return (
        <div className={cls.perspective}>
            <ul
                className={classNames(cls.projects, {
                    [cls.withActive]: active !== -1,
                })}
            >
                {PROJECTS.map((pr, i) => {
                    return (
                        <li
                            key={`Link.${i}`}
                            className={classNames(cls.linkProject, {
                                [cls.active]: active === i,
                            })}
                        >
                            <AnimationSection className={cls.content}>
                                <TransitionLink
                                    className={cls.linkText}
                                    href={pr.titleSettings.href}
                                    data-info={pr.titleSettings.year[0]}
                                    delay={1000}
                                    onClick={() => setActive(i)}
                                >
                                    {pr.titleSettings.title}
                                </TransitionLink>
                            </AnimationSection>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
