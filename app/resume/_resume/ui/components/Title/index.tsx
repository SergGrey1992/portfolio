import React from 'react'
import type { PropsWithChildren } from 'react'
import { StyleSheet, Text, Link, View } from '@react-pdf/renderer'
import { Style } from '@react-pdf/types'

export enum TitleType {
    text = 'text',
    link = 'link',
}

export enum Mode {
    light = 'light',
    dark = 'dark',
}

type Props = {
    text: string
    mode?: Mode
    style?: Style
    fontSize?: string | number
    fontWeight?: Style['fontWeight']
}

export const Title = ({
    text,
    mode = Mode.light,
    style = {},
    fontSize,
    fontWeight,
}: Props) => {
    const size = fontSize ? { fontSize } : { fontSize: styles.text.fontSize }
    const weight = fontWeight ? { fontWeight } : {}
    return (
        <Text
            style={[
                styles.text,
                { ...styles[mode] },
                style,
                { ...size },
                { ...weight },
            ]}
        >
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
    },
    light: {
        color: 'white',
    },
    dark: {
        color: 'black',
    },
})
