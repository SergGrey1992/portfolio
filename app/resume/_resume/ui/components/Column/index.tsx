import React from 'react'
import type { PropsWithChildren } from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'

export const Column = ({ children }: PropsWithChildren) => {
    return <View style={styles.text}>{children}</View>
}

const styles = StyleSheet.create({
    text: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },
})
