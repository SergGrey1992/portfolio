'use client'

import React, {
    ComponentPropsWithoutRef,
    ElementType,
    useEffect,
    useState,
} from 'react'
import type { PropsWithChildren } from 'react'

import styles from './styles.module.css'
import { classNames } from '@/lib/utils/classNames'
import { useAnimSectionTransition } from '@/widgets/PageTransitionEffect/lib/state'

type Default = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

type PolymorphicAsProp<T extends ElementType> = {
    as?: T
}

type PolymorphicProps<T extends ElementType> = PropsWithChildren<
    ComponentPropsWithoutRef<T> & PolymorphicAsProp<T>
>

type Props<T extends ElementType = typeof defaultElement> =
    PolymorphicProps<T> & {
        top?: boolean
        left?: boolean
        right?: boolean
        bottom?: boolean
    }

const defaultElement = 'div'

export const AnimationSection = <
    T extends ElementType = typeof defaultElement,
>({
    children,
    as,
    top = false,
    left = false,
    right = false,
    bottom = false,
    className,
    style,
    ...rest
}: Props<T>) => {
    const isOpen = useAnimSectionTransition((state) => state.isOpen)

    const Component = as ?? defaultElement

    return (
        <Component
            className={classNames(
                styles.section,
                {
                    [styles.top]: top,
                    [styles.left]: left,
                    [styles.right]: right,
                    [styles.bottom]: bottom,
                },
                [className ?? '']
            )}
            style={style}
            {...rest}
        >
            <span
                className={classNames(styles.overlay, {
                    [styles.hidden]: isOpen,
                    [styles.top]: top,
                    [styles.left]: left,
                    [styles.right]: right,
                    [styles.bottom]: bottom,
                })}
            />
            {children}
        </Component>
    )
}
