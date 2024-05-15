import React from 'react'
import type { PropsWithChildren } from 'react'

import styles from './styles.module.css'
import { Tag } from '@/shared/ui/Tag'
import { classNames } from '@/lib/utils/classNames'

interface EducationPropsType {}

const data = [
    { title: 'BELHARD', data: '2019-2020', skills: ['HTML', 'CSS'] },
    {
        title: 'IT-INCUBATOR',
        data: '2020',
        skills: ['JS', 'React', 'Redux', 'TypeScript'],
    },
]

type MySkill = 'simple' | 'average' | 'sophisticated' | 'frequently used'

const mySkills: { [key in MySkill]: string[] } = {
    simple: ['HTML', 'CSS', 'BASIC JS'],
    average: ['REACT', 'REDUX', 'BASIC REACT-NATIVE'],
    sophisticated: ['FRAMER_MOTION', 'GSAP', 'CSS-ANIMATION', 'NEXT JS'],
    'frequently used': [
        'REACT/NEXT JS',
        'OTHER LIBS FOR REACT/NEXT JS',
        'REDUX-TOOLKIT',
        'FRAMER-MOTION/GSAP',
        'REACT-NATIVE',
        'REANIMATED',
        'OTHER LIBS FOR REACT-NATIVE',
    ],
}

export const Education = ({}: PropsWithChildren<EducationPropsType>) => {
    return (
        <>
            {data.map((item, i) => {
                return (
                    <section key={`Section.${i}`}>
                        <span
                            className={styles.educTitle}
                            data-range={item.data}
                        >
                            {item.title}
                        </span>
                        <div>
                            <h4>studied:</h4>
                            <ul className={'flex gap-5'}>
                                {item.skills.map((s, index) => {
                                    return (
                                        <Tag
                                            key={`Tag.${s}.${i}.${index}`}
                                            as={'li'}
                                        >
                                            {s}
                                        </Tag>
                                    )
                                })}
                            </ul>
                        </div>
                    </section>
                )
            })}
            <section>
                <h2 className={styles.skillTitle}>my skills:</h2>
                <div className={styles.content}>
                    {(Object.keys(mySkills) as unknown as MySkill[]).map(
                        (i) => {
                            return (
                                <React.Fragment key={i}>
                                    <h3 className={styles.skillTitle}>{i}</h3>
                                    <div />
                                    <ul className={styles.skillList}>
                                        {mySkills[i].map((sk, index) => {
                                            return (
                                                <Tag
                                                    as={'li'}
                                                    key={`skill.${i}.${index}`}
                                                    className={styles.skill}
                                                >
                                                    {sk}
                                                </Tag>
                                            )
                                        })}
                                    </ul>
                                </React.Fragment>
                            )
                        }
                    )}
                </div>
            </section>
        </>
    )
}
