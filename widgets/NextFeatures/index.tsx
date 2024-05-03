import React from 'react'

import styles from './styles.module.css'

interface Props {}

export const NextFeatures = ({}: Props) => {
    return (
        <div className={styles.content}>
            <span>next features:</span>
            <ul>
                <li className={styles.item}>mobile version</li>
                <li className={styles.item}>about and my skills</li>
                <li className={styles.item}>contact section</li>
                <li className={styles.item}>education section</li>
                <li className={styles.item}>not-found page</li>
            </ul>
        </div>
    )
}
