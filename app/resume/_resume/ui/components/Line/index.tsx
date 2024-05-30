import React from 'react'
import { StyleSheet, View } from '@react-pdf/renderer'

export enum Mode {
    light = 'light',
    dark = 'dark',
}

interface Props {
    mode?: Mode
    width?: number | string
}

export const Line = ({ mode = Mode.light, width }: Props) => {
    const size = width ? { width } : { width: styles.line.width }
    return (
        <View style={[styles.box]}>
            <View style={[styles.line, { ...styles[mode], ...size }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        height: '1px',
        width: '100%',
    },
    light: {
        backgroundColor: 'white',
    },
    dark: {
        backgroundColor: 'black',
    },
})
