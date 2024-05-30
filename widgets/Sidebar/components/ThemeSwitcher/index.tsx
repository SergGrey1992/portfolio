'use client'

import React, { useState } from 'react'
import {
    ColorModeEnum,
    useChangeHTMLColorSchema,
} from '@/shared/hooks/useChangeHTMLColorSchema'
import { classNames } from '@/lib/utils/classNames'

import styles from './styles.module.css'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'

interface Props {}

export const ThemeSwitcher = ({}: Props) => {
    const [mode, setMode] = useState<ColorModeEnum | ''>('')
    const mouseEnter = (mode: ColorModeEnum | '') => setMode(mode)

    const { themeGlobal } = useChangeHTMLColorSchema()
    return (
        <AnimationSection>
            <div className={styles.content}>
                <div className={styles.rela}>
                    <div className={styles.dot} data-mode={mode} />
                    <div className={styles.wrapper}>
                        <button
                            className={classNames(styles.btn, {}, [
                                styles.dark,
                            ])}
                            onClick={() => themeGlobal(ColorModeEnum.dark)}
                            onMouseEnter={() => mouseEnter(ColorModeEnum.dark)}
                            onMouseLeave={() => mouseEnter('')}
                        />
                        <button
                            className={classNames(styles.btn, {}, [
                                styles.light,
                            ])}
                            onClick={() => themeGlobal(ColorModeEnum.light)}
                            onMouseEnter={() => mouseEnter(ColorModeEnum.light)}
                            onMouseLeave={() => mouseEnter('')}
                        />
                    </div>
                    <div className={styles.wrapper}>
                        <button
                            className={classNames(styles.btn, {}, [
                                styles.ultra,
                            ])}
                            onClick={() => themeGlobal(ColorModeEnum.ultra)}
                            onMouseEnter={() => mouseEnter(ColorModeEnum.ultra)}
                            onMouseLeave={() => mouseEnter('')}
                        />
                        <button
                            className={classNames(styles.btn, {}, [
                                styles.pink,
                            ])}
                            onClick={() => themeGlobal(ColorModeEnum.pink)}
                            onMouseEnter={() => mouseEnter(ColorModeEnum.pink)}
                            onMouseLeave={() => mouseEnter('')}
                        />
                    </div>
                </div>
            </div>
        </AnimationSection>
    )
}
