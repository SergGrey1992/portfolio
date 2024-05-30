import React from 'react'
import type { PropsWithChildren } from 'react'

import styles from './styles.module.css'
import { ContactsList } from '@/app/contact/_contact/ui/ContactsList/index'
import { Form } from '@/app/contact/_contact/ui/Form/index'
import { StickySection } from '@/widgets/StickySection/index'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'

interface IndexPropsType {}

export const ContactPage = ({}: PropsWithChildren<IndexPropsType>) => {
    return (
        <main>
            <section className={styles.container}>
                <StickySection sectionName={'Contact form'} full={false}>
                    <Form />
                </StickySection>
                <AnimationSection className={styles.empty} />
                <ContactsList />
            </section>
        </main>
    )
}
