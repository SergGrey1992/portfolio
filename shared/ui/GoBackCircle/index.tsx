'use client'

import React from 'react'
import styles from './styles.module.css'
import { Icon } from '@/shared/ui/Icons/index'
import { TransitionLink } from '@/shared/ui/TransitionLink'
import Link from 'next/link'

interface Props {}

export const GoBackCircle = ({}: Props) => {
    return (
        <>
            <div className={styles.btn}>
                <TransitionLink href={'/'} className={styles.link}>
                    <Icon as={'arrowLeft'} width={'50%'} height={'50%'} />
                </TransitionLink>
                <div className={styles.backContainer}>
                    <div className={styles.back}>Go Back?</div>
                </div>
            </div>
        </>
    )
}
