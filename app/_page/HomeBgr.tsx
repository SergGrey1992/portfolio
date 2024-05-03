import React from 'react'
import type { PropsWithChildren } from 'react'
import Image from 'next/image'
import img1 from '../../public/images/library.jpeg'

interface HomePropsType {}

export const HomeBgr = ({}: PropsWithChildren<HomePropsType>) => {
    return (
        <>
            <Image
                src={img1}
                alt={'BGR'}
                placeholder='blur'
                quality={100}
                sizes='100vw'
                fill
                style={{
                    objectFit: 'cover',
                    filter: 'grayscale(100%)',
                    zIndex: -1,
                }}
            />
        </>
    )
}
