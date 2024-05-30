import React from 'react'
import styles from './styles.module.css'
import { MyName } from '@/widgets/Sidebar/components/MyName'

export const MarqueName = () => {
    return (
        <div className={styles.marque}>
            <div id={'marque-names'}>
                <MyName />
            </div>
        </div>
    )
}
