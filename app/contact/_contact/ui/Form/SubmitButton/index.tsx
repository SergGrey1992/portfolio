'use client'

import React, { useRef } from 'react'
import type { PropsWithChildren } from 'react'
import { Icon } from '@/shared/ui/Icons/index'
import { useFormContext, useWatch } from 'react-hook-form'
import { FormState } from '@/app/contact/_contact/ui/Form/index'

interface IndexPropsType {}

export const SubmitButton = ({}: PropsWithChildren<IndexPropsType>) => {
    const { control } = useFormContext<FormState>()

    const justRef = useRef<HTMLAudioElement>(null)
    const noRef = useRef<HTMLAudioElement>(null)

    const name = useWatch({ control, name: 'name' })
    const email = useWatch({ control, name: 'email' })
    const message = useWatch({ control, name: 'message' })

    const onMouseEnter = () => {
        if (name === '' || email === '' || message === '') {
            if (noRef.current) {
                noRef.current.volume = 0.3
                noRef.current.play()
                return
            }
        }
        if (justRef.current) {
            justRef.current.volume = 0.3
            justRef.current.play()
        }
    }

    return (
        <>
            <button type={'submit'} onMouseEnter={onMouseEnter}>
                <Icon as={'send'} width={25} height={25} />
            </button>
            <audio src='/audio/just_do_it.mp3' ref={justRef} />
            <audio src='/audio/noooo.mp3' ref={noRef} />
        </>
    )
}
