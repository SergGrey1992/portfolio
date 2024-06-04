import React from 'react'
import styles from './styles.module.css'
import { TransitionLink } from '@/shared/ui/TransitionLink'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'

interface Props {
    title: string
    href: string
}

export const NextProject = ({ title, href }: Props) => {
    return (
        <AnimationSection className={styles.container}>
            <h4 className={styles.nextTitle}>next project:</h4>
            <TransitionLink href={href} className={styles.link}>
                <span>{title}</span>
            </TransitionLink>
        </AnimationSection>
    )
}
