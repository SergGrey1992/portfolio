import React from 'react'
import styles from '@/shared/ui/GoBackCircle/styles.module.css'
import { Icon } from '@/shared/ui/Icons/index'
import { TransitionLink } from '@/shared/ui/TransitionLink/index'

interface Props {}

export const GoBack = ({}: Props) => {
    return (
        <TransitionLink href={'/'} className={styles.link}>
            <Icon as={'arrowLeft'} width={'50%'} height={'50%'} />
        </TransitionLink>
    )
}
