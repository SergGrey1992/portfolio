import React from 'react'
import type { PropsWithChildren } from 'react'

import { StickySection } from '@/widgets/StickySection/index'
import { Institution } from '@/app/education/_page/ui/Institution/index'
import { mySkills } from '@/shared/config/structures/skills'
import { Skill } from '@/app/education/_page/ui/Skill'

import styles from './styles.module.css'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'

interface EducationPropsType {}

export const Education = ({}: PropsWithChildren<EducationPropsType>) => {
    return (
        <>
            <StickySection sectionName={'education'} full={false}>
                <Institution />
            </StickySection>
            <div className={styles.content}>
                {mySkills.map((sk, index) => {
                    return (
                        <section
                            key={`Skill.${sk.variant}.${index}`}
                            className={styles.section}
                        >
                            <AnimationSection className={styles.sectionTitle}>
                                {sk.variant}
                            </AnimationSection>
                            <Skill {...sk} />
                        </section>
                    )
                })}
            </div>
        </>
    )
}
