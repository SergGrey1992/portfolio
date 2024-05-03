import React from 'react'

interface Props {
    year: [string, string]
}

export const YearSection = ({ year }: Props) => {
    return (
        <div className={'flex items-center h-1/2'}>
            <div className={'w-1/2 text-center text-4xl'}>{year[0]}</div>
            <div className={'w-1/2 text-center text-4xl'}>{year[1]}</div>
        </div>
    )
}
