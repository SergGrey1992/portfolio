import React from 'react'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'

import styles from './styles.module.css'

interface Props {
    height?: number
}

export const Spacing = ({ height }: Props) => {
    return <AnimationSection className={styles.spacing} style={{ height }} />
}
