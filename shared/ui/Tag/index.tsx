import React, {
    ComponentPropsWithoutRef,
    ElementType,
    PropsWithChildren,
} from 'react'

import styles from './styles.module.css'
import { classNames } from '@/lib/utils/classNames'

type PolymorphicAsProp<E extends ElementType> = {
    as?: E
}

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
    ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>

const defaultElement = 'p'

type Props<E extends ElementType = typeof defaultElement> =
    PolymorphicProps<E> & {
        color?: 'primary' | 'secondary'
        hover?: boolean
        active?: boolean
    }

export const Tag = <E extends ElementType = typeof defaultElement>({
    as,
    children,
    className,
    hover = false,
    active = false,
    ...restProps
}: Props<E>) => {
    const Component = as ?? defaultElement

    return (
        <Component
            {...restProps}
            className={classNames(styles.tag, {
                [styles.hoveredTag]: hover,
                [styles.activeTag]: active,
            })}
        >
            {children}
        </Component>
    )
}
