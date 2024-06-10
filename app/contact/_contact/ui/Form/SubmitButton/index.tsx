'use client'

import type { PropsWithChildren } from 'react'
import React, { useRef } from 'react'
import { Icon } from '@/shared/ui/Icons/index'
import { useFormContext } from 'react-hook-form'
import { FormState, StatusForm } from '@/app/contact/_contact/ui/Form/index'

interface IndexPropsType {
    status?: StatusForm
}

export const SubmitButton = ({ status }: PropsWithChildren<IndexPropsType>) => {
    const {
        formState: { isSubmitting, errors, submitCount },
    } = useFormContext<FormState>()

    const justRef = useRef<HTMLAudioElement>(null)
    const noRef = useRef<HTMLAudioElement>(null)

    const onMouseEnter = () => {
        if (submitCount > 0) {
            return
        }
        if (!!Object.keys(errors).length) {
            if (noRef.current) {
                noRef.current.volume = 0.3
                noRef.current.play()
            }
            return
        }
        if (justRef.current) {
            justRef.current.volume = 0.3
            justRef.current.play()
        }
    }

    return (
        <>
            <button
                type={'submit'}
                onMouseEnter={onMouseEnter}
                disabled={isSubmitting || !!status}
            >
                {status === undefined && (
                    <>
                        {!isSubmitting && (
                            <Icon as={'send'} width={25} height={25} />
                        )}
                        {isSubmitting && (
                            <Icon as={'refresh'} width={25} height={25} />
                        )}
                    </>
                )}
                {status === StatusForm.accepted && (
                    <Icon
                        as={'accept'}
                        width={25}
                        height={25}
                        color={'green'}
                    />
                )}
                {status === StatusForm.rejected && (
                    <Icon as={'reject'} width={25} height={25} color={'red'} />
                )}
            </button>
            <audio src='/audio/just_do_it.mp3' ref={justRef} />
            <audio src='/audio/noooo.mp3' ref={noRef} />
        </>
    )
}
