'use client'

import React from 'react'

interface Props {
    myName: string
}

export const MyName = ({ myName }: Props) => {
    return (
        <section className={'h-full text-white'}>
            <div className={'h-full flex flex-col justify-center items-center'}>
                <div
                    className={
                        'p-14 border-2 border-accent backdrop-blur gap-5 flex flex-col'
                    }
                >
                    <h1>
                        <span className={'text-5xl'}>{myName}</span>
                    </h1>
                </div>
            </div>
        </section>
    )
}
