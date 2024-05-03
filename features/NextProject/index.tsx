import React from 'react'
import styles from './styles.module.css'
import { TransitionLink } from '@/shared/ui/TransitionLink'

interface Props {
    title: string
    href: string
}

export const NextProject = ({ title, href }: Props) => {
    return (
        <section className={styles.container}>
            <h4 className={styles.nextTitle}>next project:</h4>
            <TransitionLink href={href} className={styles.link}>
                <span>{title}</span>
            </TransitionLink>
        </section>
    )
}
