import React from 'react'

interface NavigationPropsType {
    name: string
}

export const Navigation = ({ name }: NavigationPropsType) => {
    const initials = 'text-3xl font-bold p-3'
    return (
        <nav className={'flex justify-between items-center text-white'}>
            <div className={initials}>{name}</div>
            <menu>
                <span>123</span>
            </menu>
            <div className={initials}>{name}</div>
        </nav>
    )
}
