import React, {
    ComponentPropsWithoutRef,
    ElementType,
    PropsWithChildren,
} from 'react'

import styles from './styles.module.css'

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
    }

export const Tag = <E extends ElementType = typeof defaultElement>({
    as,
    children,
    className,
    ...restProps
}: Props<E>) => {
    const Component = as ?? defaultElement

    return (
        <Component {...restProps} className={styles.tag}>
            {children}
        </Component>
    )
}
