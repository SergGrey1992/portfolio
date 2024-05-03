'use client'

import React, { useState } from 'react'

import cls from './styles.module.css'
import { classNames } from '@/lib/utils/classNames'
import {
    ColorModeEnum,
    useChangeHTMLColorSchema,
} from '@/shared/hooks/useChangeHTMLColorSchema'

interface Props {}

export const ColorMode = ({}: Props) => {
    const [mode, setMode] = useState<ColorModeEnum | ''>('')
    const mouseEnter = (mode: ColorModeEnum | '') => setMode(mode)

    const { themeGlobal } = useChangeHTMLColorSchema()

    return (
        <div className={cls.colorMode} data-mode={mode}>
            <div>design</div>
            <div className={cls.containerModer}>
                <div className={cls.dot} />
                <button
                    className={classNames(cls.btn, {}, [cls.darkMode])}
                    onMouseEnter={() => mouseEnter(ColorModeEnum.dark)}
                    onMouseLeave={() => mouseEnter('')}
                    onClick={() => themeGlobal(ColorModeEnum.dark)}
                />
                <button
                    className={classNames(cls.btn, {}, [cls.lightMode])}
                    onMouseEnter={() => mouseEnter(ColorModeEnum.light)}
                    onMouseLeave={() => mouseEnter('')}
                    onClick={() => themeGlobal(ColorModeEnum.light)}
                />
                <button
                    className={classNames(cls.btn, {}, [cls.ultraMode])}
                    onMouseEnter={() => mouseEnter(ColorModeEnum.ultra)}
                    onMouseLeave={() => mouseEnter('')}
                    onClick={() => themeGlobal(ColorModeEnum.ultra)}
                />
                <div className={cls.circle} />
            </div>
        </div>
    )
}
