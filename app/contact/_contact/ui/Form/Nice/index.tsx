import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'

interface Props {}

export const Nice = ({}: Props) => {
    const ref = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (ref.current) {
            ref.current.volume = 0.3
            ref.current.play()
        }
    }, [])
    return (
        <div className={styles.content}>
            <div className={styles.inner}>
                <img src={'/nice.gif'} alt='' className={styles.img} />
                <audio src={'/audio/nice.mp3'} ref={ref} controls={false} />
            </div>
        </div>
    )
}
