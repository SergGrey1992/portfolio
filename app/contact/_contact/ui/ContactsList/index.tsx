import type { PropsWithChildren } from 'react'
import React from 'react'
import {
    Contacts,
    CONTACTS,
    ContactVariant,
} from '@/shared/config/structures/contacts'
import { Icon } from '@/shared/ui/Icons/index'

import styles from './styles.module.css'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'
import { fillEmptyItems } from '@/shared/lib/fillEmptyItems'

interface IndexPropsType {}

export const ContactsList = ({}: PropsWithChildren<IndexPropsType>) => {
    return (
        <ul className={styles.list}>
            {fillEmptyItems<Contacts>(CONTACTS, 6, (index) => ({
                id: `Empty.${index}`,
                title: '',
                icon: 'home',
                link: '',
                name: '',
                variant: ContactVariant.text,
            })).map((c, index) => {
                if (c.title === '') {
                    return (
                        <li key={`contact.${index}`}>
                            <AnimationSection
                                className={styles.item}
                            ></AnimationSection>
                        </li>
                    )
                }
                return (
                    <li key={`contact.${index}`}>
                        <AnimationSection className={styles.item}>
                            <a
                                href={
                                    c.title === 'email'
                                        ? `mailto:${c.link}`
                                        : c.link
                                }
                                className={styles.link}
                                rel='noopener noreferrer'
                                target='_blank'
                            />
                            <div className={styles.title}>
                                <Icon as={c.icon} width={25} height={25} />
                                <span>{c.title}</span>
                            </div>
                            <Icon as={'arrowrightup'} width={25} height={25} />
                        </AnimationSection>
                    </li>
                )
            })}
        </ul>
    )
}
