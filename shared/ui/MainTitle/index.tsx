import React from 'react'
import styles from './styles.module.css'
import { Icon } from '@/shared/ui/Icons/index'

interface Props {
    title: string
    readonly isPrivate: boolean
}

export const MainTitle = ({ title, isPrivate = false }: Props) => {
    return (
        <div className={styles.title}>
            <h1 className={styles.text}>{title.replace('/', ' ')}</h1>
            {isPrivate && <Icon as={'lock'} width={36} height={36} />}
        </div>
    )
}
