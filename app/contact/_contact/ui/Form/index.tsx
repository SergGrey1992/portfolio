'use client'

import React from 'react'

import styles from './styles.module.css'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'
import { SubmitButton } from '@/app/contact/_contact/ui/Form/SubmitButton/index'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'

interface Props {}

export type FormState = {
    name: string
    email: string
    message: string
}

export const Form = ({}: Props) => {
    const method = useForm<FormState>({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    const { register, handleSubmit } = method

    const onSubmit: SubmitHandler<FormState> = async (data) => {
        console.log('data', data)
        await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

    return (
        <FormProvider {...method}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.info}>
                    <AnimationSection className={styles.wrapper}>
                        <input
                            className={styles.input}
                            type='text'
                            placeholder={'name'}
                            {...register('name')}
                        />
                    </AnimationSection>
                    <AnimationSection className={styles.wrapper}>
                        <input
                            className={styles.input}
                            type='text'
                            placeholder={'email'}
                            {...register('email')}
                        />
                    </AnimationSection>
                </div>

                <div className={styles.sendWrapper}>
                    <AnimationSection className={styles.wrapper}>
                        <textarea
                            className={styles.textarea}
                            placeholder={'message'}
                            {...register('message')}
                        />
                    </AnimationSection>
                    <AnimationSection className={styles.send}>
                        <SubmitButton />
                    </AnimationSection>
                </div>
            </form>
        </FormProvider>
    )
}
