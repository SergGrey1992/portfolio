import React from 'react'
import styles from './styles.module.css'
import { PreviewType } from '@/shared/config/structures/projects'
import Image from 'next/image'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'

interface Props {
    preview?: PreviewType
}

export const PreviewProject = ({ preview }: Props) => {
    return (
        <AnimationSection className={styles.content}>
            {preview?.type === 'img' && (
                <Image
                    src={preview.src}
                    alt={'asd'}
                    fill
                    style={{ objectFit: 'contain' }}
                    className={styles.image}
                />
            )}
            {preview?.type === 'video' && (
                <video
                    src={preview.src}
                    className={styles.video}
                    autoPlay
                    loop
                    muted
                    controls={false}
                    playsInline
                />
            )}
        </AnimationSection>
    )
}
