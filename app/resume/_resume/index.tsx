import React from 'react'

import styles from './styles.module.css'
import { Render } from '@/app/resume/_resume/ui/Render/index'

export const Resume = () => {
    return (
        <main className={styles.container}>
            <Render />
        </main>
    )
}
