import React from 'react'
import Marquee from 'react-fast-marquee'

import { Icon } from '@/shared/ui/Icons'
import { AnimationSection } from '@/shared/ui/AnimationSection'

import styles from './styles.module.css'

interface Props {
    title: string
    readonly isPrivate?: boolean
    readonly site: string
}

export const MainTitle = ({ title, isPrivate, site }: Props) => {
    return (
        <>
            <AnimationSection className={styles.titleContent}>
                <Marquee autoFill className={styles.title}>
                    {site && (
                        <a
                            href={site}
                            className={styles.linkSite}
                            target={'_blank'}
                            rel={'noreferrer'}
                        />
                    )}
                    <h1 className={styles.text}>
                        {title.replace('/', ' ') + ' '}
                    </h1>
                    <div className={styles.private}>
                        <Icon
                            as={
                                isPrivate === undefined
                                    ? 'starline'
                                    : isPrivate
                                      ? 'lock'
                                      : 'arrowrightup'
                            }
                            width={35}
                            height={35}
                        />
                    </div>
                </Marquee>
            </AnimationSection>
        </>
    )
}
