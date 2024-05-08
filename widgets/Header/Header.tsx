import React from 'react'
import Link from 'next/link'

import cls from './styles.module.css'
import { ColorMode } from '@/widgets/ColorMode/ColorMode'
import { Logo } from '@/features/Logo'

interface Props {
    myName: string
}

export const Header = ({ myName }: Props) => {
    return (
        <header className={cls.header}>
            <Logo myName={myName} />
            {/*<button>123</button>*/}
            <div className={cls.info}>
                <div className={cls.left}>
                    <div className={cls.contact}>
                        <ul>
                            <li>Front-end Developer</li>
                            <li>Mobile Developer</li>
                        </ul>
                        <ul>
                            <li>React JS | Next JS</li>
                            <li>React Native</li>
                        </ul>
                    </div>
                    <nav className={cls.links}>
                        <ul>
                            <li>
                                <button>about</button>
                            </li>
                            <li>
                                <button>email</button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={cls.right}>
                    <nav>
                        <ul>
                            <li>
                                <Link href={'/'}>
                                    <span>03</span>
                                    <strong>instagram</strong>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <span>04</span>
                                    <strong>linkedin</strong>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <span>05</span>
                                    <strong>telegram</strong>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
