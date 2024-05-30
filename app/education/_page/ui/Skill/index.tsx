import React from 'react'
import { MySkill } from '@/shared/config/structures/skills'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'

import styles from './styles.module.css'

interface Props extends MySkill {}

export const Skill = ({ skills }: Props) => {
    return (
        <ul className={styles.list}>
            {skills.map((s, index, array) => {
                const data = s?.progress ? { 'data-percent': s.progress } : {}
                const last = array.length - 1 === index
                return (
                    <React.Fragment key={`Skill.${index}`}>
                        <AnimationSection as={'li'} className={styles.content}>
                            <div className={styles.item}>
                                <span>{s.title}</span>
                                {s?.progress && (
                                    <div className={styles.progress} {...data}>
                                        <div className={styles.inner}>
                                            <div
                                                className={styles.range}
                                                style={{
                                                    width: `${s.progress}%`,
                                                }}
                                            />
                                            <span className={styles.percent}>
                                                {s.progress}%
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </AnimationSection>
                        {last && <AnimationSection className={styles.empty} />}
                    </React.Fragment>
                )
            })}
        </ul>
    )
}
