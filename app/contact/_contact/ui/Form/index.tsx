'use client'

import React, { useState } from 'react'

import styles from './styles.module.css'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'
import { SubmitButton } from '@/app/contact/_contact/ui/Form/SubmitButton/index'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { classNames } from '@/lib/utils/classNames'
import { Nice } from '@/app/contact/_contact/ui/Form/Nice/index'

interface Props {}

export type FormState = {
    name: string
    email: string
    message: string
}

const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export enum StatusForm {
    accepted = 'accepted',
    rejected = 'rejected',
}

export const Form = ({}: Props) => {
    const method = useForm<FormState>({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = method

    const [status, setStatus] = useState<StatusForm | undefined>(undefined)
    const [nice, setNice] = useState(false)

    const onSubmit: SubmitHandler<FormState> = async (data) => {
        try {
            await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(data),
            })
            setStatus(StatusForm.accepted)
            setNice(true)
            const id = setTimeout(() => {
                setNice(false)
                clearTimeout(id)
            }, 1600)
        } catch (error) {
            setStatus(StatusForm.rejected)
        }
    }

    return (
        <FormProvider {...method}>
            {nice && <Nice />}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.info}>
                    <AnimationSection
                        className={classNames(styles.wrapper, {
                            [styles.error]:
                                !!Object.keys(errors.name ?? {}).length ??
                                false,
                        })}
                    >
                        <input
                            className={styles.input}
                            type='text'
                            placeholder={'name'}
                            {...register('name', {
                                required: true,
                                minLength: 1,
                                maxLength: 100,
                            })}
                        />
                    </AnimationSection>
                    <AnimationSection
                        className={classNames(styles.wrapper, {
                            [styles.error]:
                                !!Object.keys(errors.email ?? {}).length ??
                                false,
                        })}
                    >
                        <input
                            className={styles.input}
                            type='text'
                            placeholder={'email'}
                            {...register('email', {
                                required: true,
                                minLength: 1,
                                pattern: regEmail,
                            })}
                        />
                    </AnimationSection>
                </div>

                <div className={styles.sendWrapper}>
                    <AnimationSection
                        className={classNames(styles.wrapper, {
                            [styles.error]:
                                !!Object.keys(errors.message ?? {}).length ??
                                false,
                        })}
                    >
                        <textarea
                            className={styles.textarea}
                            placeholder={'message'}
                            {...register('message', {
                                required: true,
                                minLength: 20,
                                maxLength: 500,
                            })}
                        />
                    </AnimationSection>
                    <AnimationSection className={styles.send}>
                        <SubmitButton status={status} />
                    </AnimationSection>
                </div>
            </form>
        </FormProvider>
    )
}
