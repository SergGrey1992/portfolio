import React from 'react'
import type { PropsWithChildren } from 'react'

import styles from './styles.module.css'

interface IndexPropsType {}

export const Pattern = ({}: PropsWithChildren<IndexPropsType>) => {
    return <div className={styles.pattern} />
}
