import React from 'react'
import type { PropsWithChildren } from 'react'

import cls from './styles.module.css'
import { PROJECTS } from '@/shared/config/structures/common'
import { TransitionLink } from '@/shared/ui/TransitionLink'

interface HomePagePropsType {}

export const HomePage = ({}: PropsWithChildren<HomePagePropsType>) => {
    return (
        <div className={cls.perspective}>
            <ul className={cls.projects}>
                {PROJECTS.map((pr, i) => {
                    return (
                        <li key={`Link.${i}`} className={cls.linkProject}>
                            <div className={cls.content}>
                                <TransitionLink
                                    className={cls.linkText}
                                    href={pr.titleSettings.href}
                                    data-info={pr.titleSettings.year[0]}
                                >
                                    {pr.titleSettings.title}
                                </TransitionLink>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
